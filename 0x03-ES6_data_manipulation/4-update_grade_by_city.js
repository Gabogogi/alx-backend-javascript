export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter(arrItem => getStudentsByLocation.location === city)
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      if (gradeObj) {
        return { ...student, grade: gradeObj.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    });
}
