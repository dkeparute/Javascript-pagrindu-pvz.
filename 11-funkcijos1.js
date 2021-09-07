const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;

// duomenu perdavimas i funkcija
function desimteriopaSuma(pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(e, f);
console.log('--------');
desimteriopaSuma(a, b);
console.log('--------');
desimteriopaSuma(c, d);


function labas(vardas, amzius, vietovadis) {
    console.log(`Labas, as esu ${vardas}, man ${amzius} metai ir gyvenu ${vietovadis}.`);
}

labas('Petras', 88, 'vilniuje');
labas('Maryte', 77, 'Kaune');
labas('Alphe', 5, 'namie');


// f(x) = x*x;

function kvadaratu(x) {
    console.log(x * x);
}

kvadaratu(5)
kvadaratu(55)
kvadaratu(5554845)

function reverseString(text) {
    let reverse = '';
    for (let i = 0; i < text.length; i++) {
        reverse = text[i] + reverse;
    }
    console.log(text, '->', reverse);
}

const pirmasZodis = 'Labas rytas';
reverseString(pirmasZodis);

reverseString('Lietuva');
reverseString('sedek uzu kedes');
reverseString('sula');