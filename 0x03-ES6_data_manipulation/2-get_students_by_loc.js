export default function getStudentsByLocation(arr, city) {
  const homies = arr.filter(function(arrayItem) {
    return arrayItem.location === city;
  });
  return homies;
}
