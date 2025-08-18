import { DefBuilder } from '../builders'
import { Def } from '../entity'

/**
 * Transforms an array of DefBuilder instances into their final Def objects.
 * This function maps over each DefBuilder and calls its `build()` method,
 * converting all builder instances into their finalized definition objects.
 *
 * @param {DefBuilder[]} defs - Array of DefBuilder instances to resolve
 * @returns {Def[]} Array of built Def objects ready for schema creation
 *
 * @example
 * // Basic usage with simple field definitions
 * const fieldBuilders = [
 *   new DefBuilder('username').string().required(),
 *   new DefBuilder('age').number().min(18)
 * ];
 * const fieldDefs = resolveDefs(fieldBuilders);
 * // Returns: [
 * //   { name: 'username', type: String, required: true },
 * //   { name: 'age', type: Number, min: 18 }
 * // ]
 *
 * @example
 * // Usage in schema creation
 * const schema = new Schema()
 *   .addBatch(resolveDefs([
 *     new DefBuilder('email').string().email().required(),
 *     new DefBuilder('createdAt').date().default(Date.now)
 *   ]));
 */
export const resolveDefs = (defs: DefBuilder[]): Def[] =>
  defs.map((def) => def.build())
