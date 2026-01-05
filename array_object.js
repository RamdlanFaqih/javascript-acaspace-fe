// array
// const buah = ["apel", "mangga", "pepaya"]

// console.log("semua buah: ", buah)

// console.log("indeks ke 2: ", buah[2])

// buah.push("Pisang")
// buah.push("Melon")
// console.log("buah buahan baru", buah)

// buah[0] = "Strawberry"

// console.log("Ganti buah apel", buah)

// object

const biodata = {
  nama: "Asep",
  umur: 22,
  noHandphone: "08123456789",
  lahir: {
    tanggalLahir: 29,
    bulanLahir: 12,
    tahunLahir: 2004,
    tempatLahir: "Ciamis",
  },
  hobby: ["Main Gitar", "Bernyanyi", "Coding", "Mendengarkan Musik"],
};

const biodata2 = {
  nama: "Asep",
  umur: 22,
  noHandphone: "08123456789",
  lahir: {
    tanggalLahir: 29,
    bulanLahir: 12,
    tahunLahir: 2004,
    tempatLahir: "Ciamis",
  },
  hobby: ["Main Gitar", "Bernyanyi", "Coding", "Mendengarkan Musik"],
};

console.log(biodata);

console.log("Nama: ", biodata.nama);
console.log(
  `Tempat Tanggal Lahir: ${biodata.lahir.tempatLahir}, ${biodata.lahir.tanggalLahir}/${biodata.lahir.bulanLahir}/${biodata.lahir.tahunLahir}`
);

// array of object

const dataMahasiswa = [
  {
    id: 1,
    nama: "Asep",
    umur: 22,
    noHandphone: "08123456789",
    lahir: {
      tanggalLahir: 29,
      bulanLahir: 12,
      tahunLahir: 2004,
      tempatLahir: "Ciamis",
    },
    hobby: ["Main Gitar", "Bernyanyi", "Coding", "Mendengarkan Musik"],
  },
  {
    id: 2,
    nama: "Udin",
    umur: 22,
    noHandphone: "08123456789",
    lahir: {
      tanggalLahir: 29,
      bulanLahir: 12,
      tahunLahir: 2004,
      tempatLahir: "Ciamis",
    },
    hobby: ["Main Gitar", "Bernyanyi", "Coding", "Mendengarkan Musik"],
  },
];
console.log(dataMahasiswa);
