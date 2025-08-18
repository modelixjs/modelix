/**
 * A runtime assertion function that throws an error if the condition is falsy.
 * When used with TypeScript, it acts as a type guard that narrows the type when the assertion passes.
 *
 * @template T - The type being asserted
 * @param {unknown} condition - The condition to check (will be evaluated for truthiness)
 * @param {string} message - The error message to throw if the condition fails
 * @throws {Error} Will throw an error with the provided message if condition is falsy
 * @returns {asserts condition} TypeScript assertion signature that narrows the type
 *
 * @example
 * // Basic usage
 * invariant(value !== null, 'Value must not be null');
 *
 * @example
 * // Type narrowing in TypeScript
 * function processUser(user: User | null) {
 *   invariant(user, 'User must be defined');
 *   // TypeScript now knows user is User, not null
 *   console.log(user.name);
 * }
 */
export function invariant(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}
