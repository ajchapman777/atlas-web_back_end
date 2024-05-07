function cleanSet(set, startString) {
  // Convert the Set to an array, filter values that start with startString,
  // then map them to their substring starting from startString length,
  // and finally join them using '-'
  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
}

export default cleanSet;
