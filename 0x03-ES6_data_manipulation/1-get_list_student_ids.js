export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const indexArray = arr.map((arrayItem) => arrayItem.id);
  return indexArray;
}
