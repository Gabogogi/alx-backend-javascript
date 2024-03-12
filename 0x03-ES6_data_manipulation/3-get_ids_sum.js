export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sum;
}
