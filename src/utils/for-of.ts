export const forIn = <T extends object>(
  items: T,
  handler: (key: keyof T, value: T[keyof T]) => void,
) => {
  for (const key in items) {
    handler(key, items[key])
  }
}

export const forOf = <T>(items: T[], handler: (item: T) => void) => {
  for (const item of items) {
    handler(item)
  }
}
