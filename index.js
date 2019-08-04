// Code your solution here:


function driversWithRevenueOver(arr, value) {
  return arr.filter(function(e) {
     return e.revenue > value
  } )
}

//return string of driver name with revenue > value
function driverNamesWithRevenueOver(arr, value) {
  let newStr = driversWithRevenueOver(arr, value);
    return newStr.map((e) => e.name);
}

//accepts an array and an obj and returns object of matches to obj passed into function
function exactMatch(arr, obj) {
  return arr.filter(function (e) {
    for (const key in obj) {
      return e[key] === obj[key];
    }
  })
}

function exactMatchToList() {
  let exactMatch(arr, obj);

}
