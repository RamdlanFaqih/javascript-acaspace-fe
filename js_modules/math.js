export const sum = (a, b) => {
    return a + b
}

export const validation = (angka) => {
    if (typeof angka === 'number') {
        return "Ini adalah angka, dan ini valid"
    }
    return "Ini bukan angka, tidak valid"
}