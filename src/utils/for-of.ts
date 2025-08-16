export const forOf = <T>(items: T[], handler: (item: T) => void) => {
  for (const item of items) {
    handler(item)
  }
}
