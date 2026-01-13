const formVerifyer = document.getElementById("verifyer");
const kmCounter = document.getElementById("km-counter");
const kmVisible = document.getElementById("km-price");
console.log(formVerifyer);
formVerifyer.addEventListener("submit", function (e) {
  e.preventDefault();
  let userKm = kmCounter.value;
  let kmprice = userKm * 0.21;
  console.log(kmprice);
  kmVisible.innerText = kmprice;
});
