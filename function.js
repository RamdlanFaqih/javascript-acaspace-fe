// function
// DRY

// const username = "Adipati"
// const greetings = "Hello Selamat Datang" + " " + username
// const usernameJohn = "John"
// const greetingsJohn = "Hello Selemat Datang" + " " + usernameJohn

// console.log(greetings)
// console.log(greetingsJohn)

// reusable
// parameter
function handleGreetings (username, role) {
    console.log("Hello Selamat Datang" + " " + username + " " + role)
}

// argument
handleGreetings("Adipati", "Admin")
handleGreetings("John", "Client")
handleGreetings("Jane", "SPV")

// rumus menghitum volume sebuah kubus / balok
// panjang kali lebar

// FUNCTION
function rumusVolumeBalok (p, l, t) {
    console.log(p * l * t)
}

// ARROW FUNCTION
const rumusPersegiPanjang = (p, l) => {
    console.log(p * l)
}


rumusPersegiPanjang(10, 50);
// rumusVolumeBalok(10, 3, 4);