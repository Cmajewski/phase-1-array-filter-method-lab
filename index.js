// Code your solution here
function findMatching(array,name){
  return  array.filter(driver=>driver.toUpperCase()===name.toUpperCase())
}

function fuzzyMatch(array,string){
  return  array.filter(x=>x.startsWith(string))
}

function matchName(object,name){
   return object.filter(x=>x.name===name)
}
