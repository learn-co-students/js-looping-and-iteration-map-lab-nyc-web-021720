function lowerCaseDrivers(arr){
    return arr.map( x => x.toLowerCase())
}

function nameToAttributes(arr){
   return  arr.map( x => {
      return {firstName: x.split(' ')[0], lastName: x.split(' ')[1]}
   })
}

function attributesToPhrase(arr){
    return arr.map(x => `${x.name} is from ${x.hometown}`)
}