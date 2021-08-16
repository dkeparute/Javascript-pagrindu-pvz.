// kintamieji - jo atmintyje yra laikoma informacija
// salygos sakiniai - issakoti logika pagal ka daryti kai daugiau/maziau, tiesa/netiesa
// ciklai - kai turime sarasa su informacija kuri yra vienodos strukturos
// funkcijos - aprasome logika, kuria norime perpanaudoti N kartu, tik su galimai skirtaigais parametrais

// event'ai (event listeners) - skirta stebeti ivykius (click, scroll, keypress ir pan) i kuriuos reikia sureaguoti iskvieciant norima funkcija

// KINTAMUJU INICIAVIMO BUDAI:
// const - kintamasis, kurio reiksmes negali is naujo priskirti *
// let - kintamas, kurio reiksme gali buti priskirta kiek norite kartu (is naujo)
// var - esant galimybei ⚠⚠⚠⚠ NENAUDOTI!!!! ⚠⚠⚠⚠
// * - yra papildomu salygu su konpleksiniais kintamaisiais

// NAMU DARBAI
// KINTAMUJU INICIJAVIMAS

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const pirmasSkaicius = 1;
console.log(pirmasSkaicius);
const antrasSkaicius = 2;
console.log(antrasSkaicius);
const treciasSkaicius = 3;
console.log(treciasSkaicius);

// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const pirmasTekstas = "Labas";
console.log(pirmasTekstas);
const antrasTekstas = "esu";
console.log(antrasTekstas);
const treciasTekstas = "Dovile"
console.log(treciasTekstas);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const a = [0, 1, 2, 3, 4];
console.log(a);
const b = [5, 6, 7, 8, 9];
console.log(b);
const c = [10, 12, 13, 14, 15];
console.log(c);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
const d = ['a', 'b', 'c', 'd', 'e'];
console.log(d);
const e = ['f', 'g', 'h', 'i', 'j'];
console.log(e);
const f = ['k', 'l', 'm', 'n', 'o'];
console.log(f);

// VEIKSMAI SU KINTAMAISIAIS

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
let suma = pirmasSkaicius + antrasSkaicius + treciasSkaicius;
console.log(suma);

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console
console.log(pirmasTekstas + " " + antrasTekstas + " " + treciasTekstas);

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1 - 2 + 3 - 4 + 5
// Rezultatą išvesti į console
let aVerte = a[0] - a[1] + a[2] - a[3] + a[4];
console.log(aVerte);
let bVerte = b[0] - b[1] + b[2] - b[3] + b[4];
console.log(bVerte);
let cVerte = c[0] - c[1] + c[2] - c[3] + c[4];
console.log(cVerte);

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
console.log(d, ",", " ", e, ",", " ", f);

// KINTAMŲJŲ PALYGINIMAS

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį“ Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį“ Bandykite kitą kartą.”.

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//     kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus
// Išvesti teksto tipo kintamųjų ilgius
// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//     kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus
// Išvesti sąrašo tipo kintamųjų ilgius
// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
//     kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus