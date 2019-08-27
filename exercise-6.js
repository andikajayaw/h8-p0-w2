// 1. Melakukan Looping Menggunakan While

var angka1 = 0;
var angka2 = 20;

console.log('LOOPING PERTAMA');
while (angka1 <= 20) {
    console.log(angka1 + ' - I love coding ');
    angka1 += 2;
}

console.log('LOOPING KEDUA');
while (angka2 > 0) {
    console.log(angka2 + ' - I will become fullstack developer ');
    angka2 -= 2;
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA MENGGUNAKAN FOR');

for (var looping = 1; looping <= 20; looping++) {
    console.log(looping + ' - I love coding');
}

console.log('LOOPING KEDUA MENGGUNAKAN FOR')

for (var looping2 = 20; looping2 > 0; looping2--) {
    console.log(looping2 + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

var angkaCounter;

while (angkaCounter < 100) {
    if (angka % 2 === 0) {
        console.log('GENAP');
    } else if (angka % 2 !== 0) {
        console.log('GANJIL')
    }
    angkaCounter++;
}

// Counter 2

for (var angkaCounter2 = 1; angkaCounter2 < 100; angkaCounter2 += 2) {
    if (angkaCounter2 % 3 === 0) {
        console.log(angkaCounter2 + ' Kelipatan 3');
    }
}

// Counter 5

for (var angkaCounter3 = 1; angkaCounter3 < 100; angkaCounter3 += 5) {
    if (angkaCounter3 % 6 === 0) {
        console.log(angkaCounter3 + ' Kelipatan 6');
    }
}

// Counter 6

for (var angkaCounter4 = 1; angkaCounter4 < 100; angkaCounter4 += 9) {
    if (angkaCounter4 % 10 === 0) {
        console.log(angkaCounter4 + ' Kelipatan 10');
    }
}