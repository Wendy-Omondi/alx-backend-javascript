function getStudentsByLocation(students, city) {

  return students.filter((items) => items.location === city);
}
export default getStudentsByLocation;
