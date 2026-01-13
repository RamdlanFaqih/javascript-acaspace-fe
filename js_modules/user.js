export const validation = (user) => {
    if (user === "admin") {
        console.log("Kamu adalah admin, boleh berbuat sesukamu")
    } else {
        console.log("Kamu bukan admin")
    }
}