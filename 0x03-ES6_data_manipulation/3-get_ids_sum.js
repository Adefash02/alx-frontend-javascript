export default function getStudentIdsSum(students) {
  // Use reduce to sum the IDs of all students
  return students.reduce((sum, student) => sum + student.id, 0);
}
