const isMathPath = (pathname, { path }) => {
  if (!path) {
    return {
      math: null,
      location: pathname,
    }
  }
  const regex = new RegExp(`^${path}`, 'gi')
  const math = regex.exec(pathname)
  if (!math) return false
  return ({ math, location: pathname })
}

export default isMathPath
