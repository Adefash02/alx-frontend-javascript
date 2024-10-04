export default function createIteratorObject(report) {
  const employees = report.allEmployees; // Access allEmployees from the report

  // Create a generator function to yield each employee
  function* employeeGenerator() {
    for (const department in employees) {
      // Use Object.prototype.hasOwnProperty.call for safe property checking
      if (Object.prototype.hasOwnProperty.call(employees, department)) {
        for (const employee of employees[department]) {
          yield employee; // Yield each employee
        }
      }
    }
  }

  // Return an instance of the generator
  return employeeGenerator();
}
