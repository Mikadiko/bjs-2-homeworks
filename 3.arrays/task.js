function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return 0;
  }

  if (gender.includes("мужской") || gender.includes("женский")) {
    const filteredUsers = users.filter((user) => user.gender === gender);

    const ages = filteredUsers.map((user) => user.age);

    const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

    return averageAge;
  }

  return 0;
}
