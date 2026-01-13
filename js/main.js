const formVerifyer = document.getElementById("verifyer");
const kmCounter = document.getElementById("km-counter");
const kmVisible = document.getElementById("km-price");
const announcer = document.getElementById("announcer");
const ageFinder = document.getElementById("age-finder");
console.log(formVerifyer);
formVerifyer.addEventListener("submit", function (e) {
  e.preventDefault();
  let userKm = kmCounter.value;
  let kmprice = userKm * 0.21;
  console.log(kmprice);
  if (ageFinder.value === "over-65") {
    kmprice = kmprice - (kmprice * 40) / 100;
  } else if (ageFinder.value === "underage") {
    kmprice = kmprice - (kmprice * 20) / 100;
  }
  announcer.innerText = "Il prezzo è ";
  kmVisible.innerText = kmprice;
});
