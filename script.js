const luasBtn = document.getElementById("luasBtn");
const kelilingBtn = document.getElementById("kelilingBtn");
const luasSection = document.getElementById("hitungLuas");
const kelilingSection = document.getElementById("hitungKeliling");

// hide all body section, onLoadingScreen
luasSection.style.display = "block";
kelilingSection.style.display = "none";

luasBtn.addEventListener("click", function () {
  luasSection.style.display = "block";
  kelilingSection.style.display = "none";
});

kelilingBtn.addEventListener("click", function () {
  luasSection.style.display = "none";
  kelilingSection.style.display = "block";
});

function Luas() {
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;
  var rumusluas = (1 / 2) * (alas * tinggi);
  document.getElementById(
    "operasiLuas"
  ).innerHTML = `Luas Segitiga = 1/2 x (${alas} x ${tinggi})`;
  document.getElementById(
    "resultLuas"
  ).innerHTML = `Luas Segitiga = ${rumusluas}`;
}

// function hitungKeliling() {
//   var sisi1 = document.getElementById("sisi1").value;
//   var sisi2 = document.getElementById("sisi2").value;
//   var sisi3 = document.getElementById("sisi3").value;
//   var rumuskeliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
//   document.getElementById(
//     "operasiKeliling"
//   ).innerHTML = `Keliling Segitiga = ${sisi1} + ${sisi2} + ${sisi3}`;
//   document.getElementById(
//     "resultKeliling"
//   ).innerHTML = `Keliling Segitiga = ${rumuskeliling}`;
// }

// // Reset Functions
// function resetLuas() {
//   document.getElementById("alas").value = "";
//   document.getElementById("tinggi").value = "";
//   document.getElementById("operasiLuas").innerHTML = "";
//   document.getElementById("resultLuas").innerHTML = "";
// }

// function resetKeliling() {
//   document.getElementById("sisi1").value = "";
//   document.getElementById("sisi2").value = "";
//   document.getElementById("sisi3").value = "";
//   document.getElementById("operasiKeliling").innerHTML = "";
//   document.getElementById("resultKeliling").innerHTML = "";
// }
