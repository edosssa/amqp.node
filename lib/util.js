module.exports = {
 fromCallback: (fn) => { 
    return new Promise((resolve, reject) => {
      cb = (error, value) => {
        if(error) reject(error)
        else resolve(value)
      }
      fn(cb)
    })
  }
}