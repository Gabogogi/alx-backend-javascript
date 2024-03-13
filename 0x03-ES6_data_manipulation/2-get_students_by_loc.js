export default function getStudentsByLocation(arr, city) {
  const homies = arr.filter((arrayItem) => {
    return arrayItem.location === city;
  });
  return homies;
}
