import { useState } from 'react'

const useLocalStorage = (key, initialvalue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const { storedValue, setStoredValue } = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialvalue
    } catch (error) {
      console.log(error)
      return initialvalue
    }
  })
  // Return a wrapped version of useState's setter function that persosts the new value to localStorage

  const setValue = value => {
    try {
      // Allow value to be a function so we have some API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would hadnle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

export default useLocalStorage
