export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by location
    .map((student) => {
      // Find the corresponding grade for the current student by studentId
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

      // Return the student object along with the found grade or 'N/A'
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
