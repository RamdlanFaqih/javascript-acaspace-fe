// if else condition
// let topScore = 90;
// let kkm = 80;
// let nilai = 79;

// if (nilai >= topScore) {
//   console.log("grade A");
//   console.log("good job, pertahankan prestasi");
// } else if (nilai >= kkm) {
//   console.log("grade B");
//   console.log("nilai terpenuhi, tingkatkan prestasi");
// } else {
//   console.log("grade C");
//   console.log("nilai belum terpenuhi, kamu wajib mengikuti remedial");
// }

// kalo nilainya diatas / sama dengan 90
// "good job, pertahankan prestasi"

// kalo nilainya pas kkm - 89
// "nilai terpenuhi, tingkatkan prestasi"

// kalo dibawah kkm
// "nilai belum terpenuhi, kamu wajib mengikuti remedial"

// Logical Operator
// AND dan OR
// && dan ||
// let umur = 18;
// let warganegara = "Indonesia";

// if (umur >= 17 && warganegara === "Indonesia") {
//   console.log("Boleh bikin KTP");
// } else {
//   console.log("Syarat belum terpenuhi");
// }

// masuk ke sebuah event
// punya tiket bisa masuk (peserta)
// atau kalo panitia bisa masuk tanpa tiket

let haveTicket = true;
let isOrganizer = true;

// OR Value
// true || true === true
// false || true === true
// true || false === true
// false || false === false

// AND
// true && true === true
// true && false === false
// false && true === false
// false && false === false

// cek ongkir
// minimal total belanja adalah 20_000 && lokasi bandung
// || memberVIP ongkir

// let totalBelanja = 15_000;
// let lokasi = "Bandung";
// let isMember = true

// if ((totalBelanja >= 20_000 && lokasi === "Jakarta") || isMember) {
//   console.log("dapat ongkir");
// } else {
//   console.log("wajib bayar ongkir");
// }

// status pembayaran

// switch case
let transctionStatus = "BATAL";

switch (transctionStatus) {
  case "PENDING":
    console.log("Menunggu Pembayaran")
    break;
  case "DIKIRIM":
    console.log("Paket sedang dalam perjalanan");
    break;
  case "SELESAI":
    console.log("Transaksi sukses. Terima Kasih!");
    break;
  case "BATAL":
    console.log("Transaksi Dibatalkan");
    break;
  default:
    console.log("Status tidak diketahui.")
    break;
}

// if-else
// if (transctionStatus === "PENDING") {
//   console.log("Meunggu pembayaran");
// } else if (transctionStatus === "DIKIRIM") {
//   console.log("Paket sedang dalam perjalanan");
// } else if (transctionStatus === "SELESAI") {
//   console.log("Transaksi sukses. Terima Kasih!");
// } else if (transctionStatus === "BATAL") {
//   console.log("Transaksi Dibatalkan");
// } else {
//   console.log("Status tidak diketahui.");
// }


// SWITCH CASE