import mongoose, { Document, FilterQuery, UpdateQuery } from 'mongoose'

/**
 * Generic wrapper for Mongoose models with type safety.
 *
 * @template T - The shape of the document.
 */
export class Model<T extends {}> {
  /**
   * @param model - Mongoose model instance.
   */
  constructor(private model: mongoose.Model<T & Document>) {}

  /**
   * Create a single document.
   *
   * @param doc - Document data to create.
   * @returns Promise resolving to the created document.
   */
  create(doc: T) {
    return this.model.create(doc)
  }

  /**
   * Create multiple documents.
   *
   * @param docs - Array of documents to create.
   * @returns Promise resolving to an array of created documents.
   */
  createMany(docs: T[]) {
    return this.model.insertMany(docs)
  }

  /**
   * Find documents matching a filter.
   *
   * @param filter - Filter query (optional).
   * @returns Query that resolves to an array of matching documents.
   */
  find(filter: FilterQuery<T & Document> = {}) {
    return this.model.find(filter)
  }

  /**
   * Find a single document matching a filter.
   *
   * @param filter - Filter query (optional).
   * @returns Query that resolves to the first matching document or null.
   */
  findOne(filter: FilterQuery<T & Document> = {}) {
    return this.model.findOne(filter)
  }

  /**
   * Find a document by its ID.
   *
   * @param id - Document ID.
   * @returns Query that resolves to the document or null.
   */
  findById(id: string) {
    return this.model.findById(id)
  }

  /**
   * Update multiple documents matching a filter.
   *
   * @param filter - Filter query to match documents.
   * @param update - Update query to apply.
   * @returns Promise resolving to the update result.
   */
  update(filter: FilterQuery<T & Document>, update: UpdateQuery<T & Document>) {
    return this.model.updateMany(filter, update)
  }

  /**
   * Update a single document matching a filter.
   *
   * @param filter - Filter query to match a document.
   * @param update - Update query to apply.
   * @returns Promise resolving to the update result.
   */
  updateOne(
    filter: FilterQuery<T & Document>,
    update: UpdateQuery<T & Document>,
  ) {
    return this.model.updateOne(filter, update)
  }

  /**
   * Find a single document and update it.
   *
   * @param filter - Filter query to match a document.
   * @param update - Update query to apply.
   * @param options - Optional Mongoose query options.
   * @returns Query that resolves to the updated document.
   */
  findOneAndUpdate(
    filter: FilterQuery<T & Document>,
    update: UpdateQuery<T & Document>,
    options?: mongoose.QueryOptions,
  ) {
    return this.model.findOneAndUpdate(filter, update, options)
  }

  /**
   * Find a document by ID and update it.
   *
   * @param id - Document ID.
   * @param update - Update query to apply.
   * @param options - Optional Mongoose query options.
   * @returns Query that resolves to the updated document.
   */
  findByIdAndUpdate(
    id: string,
    update: UpdateQuery<T & Document>,
    options?: mongoose.QueryOptions,
  ) {
    return this.model.findByIdAndUpdate(id, update, options)
  }

  /**
   * Delete multiple documents matching a filter.
   *
   * @param filter - Filter query to match documents.
   * @returns Promise resolving to the delete result.
   */
  delete(filter: FilterQuery<T & Document>) {
    return this.model.deleteMany(filter)
  }

  /**
   * Delete a single document matching a filter.
   *
   * @param filter - Filter query to match a document.
   * @returns Promise resolving to the delete result.
   */
  deleteOne(filter: FilterQuery<T & Document>) {
    return this.model.deleteOne(filter)
  }

  /**
   * Find a single document and delete it.
   *
   * @param filter - Filter query to match a document.
   * @returns Query that resolves to the deleted document.
   */
  findOneAndDelete(filter: FilterQuery<T & Document>) {
    return this.model.findOneAndDelete(filter)
  }

  /**
   * Find a document by ID and delete it.
   *
   * @param id - Document ID.
   * @returns Query that resolves to the deleted document.
   */
  findByIdAndDelete(id: string) {
    return this.model.findByIdAndDelete(id)
  }

  /**
   * Count documents matching a filter.
   *
   * @param filter - Filter query (optional).
   * @returns Promise resolving to the count of matching documents.
   */
  count(filter: FilterQuery<T & Document> = {}) {
    return this.model.countDocuments(filter)
  }

  /**
   * Perform an aggregation pipeline on the model.
   *
   * @param pipeline - Array of aggregation stages.
   * @returns Aggregation cursor or promise resolving to results.
   */
  aggregate(pipeline: any[]) {
    return this.model.aggregate(pipeline)
  }
}
