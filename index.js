// Code your solution here:


function driversWithRevenueOver(arr, value) {
  return arr.filter(function(e) {
     return e.revenue > value
  } )
}

//return string of driver name with revenue > value
function driverNamesWithRevenueOver(arr, value) {
  let newArr = driversWithRevenueOver(arr, value);
    return newArr.map((e) => e.name);
}

function exactMatch() {

}

function exactMatchToList() {

}
