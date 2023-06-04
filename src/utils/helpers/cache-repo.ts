export const setCache = (key:string, value:string|boolean, sec:number) => {
  const now = new Date()
  const item = {
      value: value,
      expiry: now.getTime() + sec*1000,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export const getCache = (key:string) => {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) {
      return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
      localStorage.removeItem(key)
      return null
  }
  return item.value
}
