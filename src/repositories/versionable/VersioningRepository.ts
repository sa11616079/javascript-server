import * as mongoose from "mongoose";
import { DocumentQuery, Query } from "mongoose";

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
    public async update(id: string, dataToUpdate: any) {
        let originalData;
        await this.findOne({ originalId: id, deletedAt: null })
            .then((data) => {
                if (data === null) {
                    throw '';
                }
                originalData = data;
                const newId = VersioningRepository.generateObjectId();
                const oldId = originalData.originalId;
                const oldModel = {
                    ...originalData,
                    deletedAt: Date.now(),
                    deletedBy: id,
                };
                const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), dataToUpdate);
                newData._id = newId;
                newData.updatedAt = Date.now(),
                    newData.updatedBy = oldId;
                this.model.updateOne({ _id: oldId }, oldModel)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                        else
                            return res;
                    });

                return this.model.create(newData);
            });
    }
    public async delete(id: any) {
        let originalData;
        await this.findOne({ originalId: id, deletedAt: null, deletedBy: null })
            .then((data) => {
                if (data === null) {
                    throw undefined;
                }
                else {
                    originalData = data;
                    const oldId = originalData._id;
                    const modelDelete = {
                        ...originalData,
                        deletedBy: oldId,
                        deletedAt: Date.now(),
                    };
                    this.model.updateOne({ originalId: oldId }, modelDelete)
                        .then((res) => {
                            if (res === null) {
                                throw undefined;
                            }
                        })
                }
            })
    }
    public async list(searchBy, sort, skip, limit): Promise<D[]> {
        return this.getAll(searchBy).sort(sort).skip(Number(skip)).limit(Number(limit));
    }
}