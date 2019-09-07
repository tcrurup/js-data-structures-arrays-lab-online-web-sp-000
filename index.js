// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver){
  drivers.push(driver);  
}

function destructivelyPrependDriver(driver){
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(driverName){
  return [...drivers, driverName];
}

function removeLastDriver(){
  return drivers.splice(0, drivers.length -1)
}

