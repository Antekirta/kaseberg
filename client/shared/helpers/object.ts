export const hasKey = (obj: {}, key: string) => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
