export const typeFinder = (value: any) =>
  value instanceof Array ? 'array' : value instanceof Object ? 'object' : false

export const collectionValidator = (collection: any[]) => {
  return collection.reduce((a, c) => {
    if (a === null) {
      return typeFinder(c)
    } else {
      return typeFinder(c) === a ? a : false
    }
  }, null)
}
