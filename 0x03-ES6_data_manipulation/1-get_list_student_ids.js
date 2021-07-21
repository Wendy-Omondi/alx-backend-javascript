function getListStudentIds(people) {
  if (Array.isArray(people)) {
    return people.map((idNumber) => idNumber.id);
  }
else
  return [];
}
