// 1. Tugas 1
function shoutOut() {
    return 'Halo Function!'
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console

// 2. Tugas 2

function calculateMultiply(num1, num2) {
    return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// 3. Tugas 3

function processSentence(name, age, adress, hobby) {
    var fullSentence = 'Nama saya ' + name + ', umur saya ' + age + ', alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'
    return fullSentence;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"