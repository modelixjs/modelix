export const forOf = <T>(items: T[], callback: (item: T) => void) => {
  for (const item of items) {
    callback(item)
  }
}
