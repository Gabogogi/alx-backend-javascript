export default function getStudentsByLocation(arr, city) {
  return arr.filter(function(arrayItem) {
    return arrayItem.location === city;
  });
}
