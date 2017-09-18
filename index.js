function iterativeLog(arr){
  arr.forEach((el, index) => {
    console.log(`${index}: ${el}`);
  });

}

function iterate(callback){
  var fish = ['bass', 'perch', 'trout']
  fish.forEach(callback);
  return fish;
}

function doToArray(arr, callback){
  arr.forEach(callback);
}
