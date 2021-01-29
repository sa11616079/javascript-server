import * as mongoose from "mongoose";
import { DocumentQuery, Query } from "mongoose";
import bcrypt from 'bcrypt';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>>
{
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    private model: M;
    constructor(model) {
        this.model = model;
    }
    public async create(options: any): Promise<D> {
        console.log("VersioningRepository :: create ", options);
        const id = VersioningRepository.generateObjectId();
        const model = new this.model({
            ...options,
            _id: id,
            originalId: id
        });
        return await model.save();
    }
    public count(query: any): Query<number> {
        const finalQuery = { deleteAt: null, ...query };
        return this.model.countDocuments(finalQuery);
    }
    public getAll(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: null, ...query };
        return this.model.find(finalQuery, projection, options);
    }
    public findOne(query: any): mongoose.DocumentQuery<D, D> {
        const finalQuery = { deleteAt: null, ...query };
        return this.model.findOne(finalQuery);
    }

    public find(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deleteAt: null, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    protected async update(data): Promise<D> {
        const prev = await this.findOne({ originalId: data.originalId, deletedAt: null });
        console.log('previous values', prev);
        if (prev) {
            console.log('trying to call invalidate');
            await this.invalidate(data.originalId);
        }
        else {
            return undefined;
        }
        console.log('Data inside update', data);
        if (data.password !== undefined) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(data.password, salt);
            data.password = hash;
        }
        const dataToUpdate = {
            originalId: data.originalId,
            ...data
        };
        const newData = Object.assign(JSON.parse(JSON.stringify(prev)), dataToUpdate);
        newData._id = VersioningRepository.generateObjectId();
        delete newData.deletedAt;
        const model = new this.model(newData);
        return model.save();
    }

    public async delete(id: string): Promise<D> {
        const previous = await this.findOne({ originalId: id, deletedAt: null });
        console.log('previous data', previous);
        if (previous) {
            await this.invalidate(id);
            return previous;
        }
    }

    protected invalidate(id: string): DocumentQuery<D, D> {
        const query: any = { originalId: id, deletedAt: { $exists: false } };
        const data: any = { deletedAt: Date.now() };
        return this.model.updateOne(query, data);
    }
    
    public async list(searchBy, sort, skip, limit): Promise<D[]> {
        return this.getAll(searchBy).sort(sort).skip(Number(skip)).limit(Number(limit));
    }
}