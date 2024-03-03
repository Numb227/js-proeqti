let motamashe1 = prompt(
  "შემოიყვანე ერთ-ერთი მნიშვნელობა (მაკრატელი  ჭა  ქაღალდი) "
);
let motamashe2 = prompt(
  "შემოიყვანე ერთ-ერთი მნიშვნელობა  (მაკრატელი  ჭა  ქაღალდი)"
);
if (
  (motamashe1 === "მაკრატელი" && motamashe2 === "ქაღალდი") ||
  (motamashe1 === "ქაღალდი" && motamashe2 === "მაკრატელი")
) {
  console.log("მოიგო მაკრატელმა");
} else if (motamashe1 === "მაკრატელი" && motamashe2 === "მაკრატელი") {
  console.log("ფრე");
} else if (
  (motamashe1 === "ქაღალდი" && motamashe2 === "ჭა") ||
  (motamashe1 === "ჭა" && motamashe2 === "ქაღალდი")
) {
  console.log("მოიგო ქაღალდმა");
} else if (motamashe1 === "ჭა" && motamashe2 === "ჭა") {
  console.log("ფრე");
} else if (
  (motamashe1 === "ჭა" && motamashe2 === "მაკრატელი") ||
  (motamashe1 === "მაკრატელი" && motamashe2 === "ჭა")
) {
  console.log("მოიგო ჭამ");
} else if (motamashe1 === "ქაღალდი" && motamashe2 === "ქაღალდი") {
  console.log("ფრე");
} else {
  console.log("შეიყვანეთ მარტო ეს მოქმედებები(მაკრატელი  ჭა  ქაღალდი)");
}
