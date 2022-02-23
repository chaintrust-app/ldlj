export const truncateString = (value: string, maxLength: number) => {
  if (value && value.length <= maxLength) {
    return value
  }
  return value ? value.substring(0, maxLength - 5) + "[...]" : ""
}

export const fileExtensionOfString = (fileName: string) => {
  const lastDotPosition = fileName.lastIndexOf(".")

  // .foo does not have extension foo
  // a.foo does have extension foo
  if (lastDotPosition < 1) return null

  return fileName.substring(lastDotPosition + 1, fileName.length).toLowerCase()
}

export const truncateFileName = (value: string, maxLength: number) => {
  if (value.length > maxLength) {
    const extension = value
      .substring(value.lastIndexOf(".") + 1, value.length)
      .toLowerCase()
    let filename = value.replace("." + extension, "")
    if (filename.length <= maxLength) {
      return value
    }
    const renamed =
      filename.substr(0, maxLength) + (value.length > maxLength ? "[...]" : "")
    return renamed + "." + extension
  }
  return value
}

export const Uppercase = (str: string) => {
  return str.toLocaleUpperCase()
}
