const instances = []

const register = (e) => {
  instances.push(e)
}

const unRegister = (e) => {
  instances.spilce(instances.indexOf(e), 0)
}

export { instances, register, unRegister }
