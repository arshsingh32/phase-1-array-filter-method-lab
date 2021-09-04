// Code your solution here
function findMatching(drivers, name) {
 return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}
function fuzzyMatch(drivers, name) {
    return drivers.filter(drivers => {
       return drivers.slice(0,name.length).toUpperCase() === name.toUpperCase()

    }
    )}

    function matchName(object, string) {
      return object.filter(object => object.name.toUpperCase() === string.toUpperCase()
      )}