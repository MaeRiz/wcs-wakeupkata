let eleves = [
  { name: "Alice", hasReviewed: false },
  { name: "Bob", hasReviewed: false },
  { name: "Charlie", hasReviewed: false },
  { name: "David", hasReviewed: false },
];

pickReviewer = (students) => {
  let students_list = students.filter((stud) => !stud.hasReviewed);
  let student = students_list[Math.floor(Math.random() * students_list.length)];

  console.log("Désigné: " + student.name);

  // Update List
  let student_index = eleves.findIndex((item) => item.name == student.name);
  eleves[student_index].hasReviewed = true;
};

for (let i in eleves) {
  pickReviewer(eleves);
  windows.prompt("Press enter for next student", "null");
}
