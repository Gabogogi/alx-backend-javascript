export default function updateUniqueItems(ourMap) {
  if (!(ourMap instanceof Map)) {
    throw Error ('Cannot process');
  }
  for (const i of ourMap) if (i[1] === 1) ourMap.set(i[0], 100);
  return ourMap;
}
