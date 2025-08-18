/**
 * Iterates over an array of items and applies a callback function to each item.
 * This is a utility function similar to Array.prototype.forEach but with a simpler interface.
 *
 * @template T - The type of items in the array
 * @param {T[]} items - The array of items to iterate over
 * @param {(item: T) => void} callback - The function to execute for each item in the array
 *
 * @example
 * // Log each number in the array
 * forOf([1, 2, 3], (num) => console.log(num))
 *
 * @example
 * // Modify objects in an array
 * const users = [{ name: 'Alice' }, { name: 'Bob' }]
 * forOf(users, (user) => user.name = user.name.toUpperCase())
 */
export const forOf = <T>(items: T[], callback: (item: T) => void) => {
  for (const item of items) {
    callback(item)
  }
}
