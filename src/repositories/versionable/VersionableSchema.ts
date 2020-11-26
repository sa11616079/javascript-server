import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {

  constructor(options: any, collections: any) {
    const versionedOptions = Object.assign({
      originalId: {
        required: true,
        type: String,
      },
      createdAt: {
        required: true,
        default: Date.now(),
        type: Date,
      },
      createdBy: {
        required: false,
        type: String,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      deletedBy: {
        required: false,
        type: String,
      },
      updatedAt: {
        required:false,
        type: Date,
      },
      updatedBy: {
        required:false,
        type: String,
      }}, options);
      super(versionedOptions, collections);
    }
  }