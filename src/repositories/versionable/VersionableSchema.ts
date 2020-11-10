import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {

  constructor(options: any, collections: any) {
    const versionedOptions = Object.assign({
      createdAt: {
        required: true,
        default: Date.now,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      updatedAt: {
        default:Date.now,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      }}, options);
    //   console.log(versionedOptions)
      super(versionedOptions, collections);
    }
  }