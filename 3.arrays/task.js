function compareArrays(arr1, arr2) {
  if(arr1.length === arr2.length){
    return arr1.every((a, i) => a === arr2[i]);
  }else{
    return false;
  }
}

function getUsersNamesInAgeRange(users, gender) {
  const filterUsers = users.filter(i => i.gender === gender);
  if(filterUsers.length === 0){
    return 0;
  }
  const reduceUsers = filterUsers.reduce((acc, i) => acc + i.age, 0);
  const resultAge = reduceUsers / filterUsers.length;
  return resultAge;
}