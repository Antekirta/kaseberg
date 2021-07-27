class Localstorage {
  set (key : string, value : string) {
    window.localStorage.setItem(key, value)
  }

  get (key : string) : string {
    return process.browser ? localStorage.getItem(key) || JSON.stringify({}) : JSON.stringify({})
  }

  clear () {
    window.localStorage.clear()
  }
}

export const localstorageCustom : Localstorage = new Localstorage()
