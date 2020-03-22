const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodeMorse = '';
    const morseNum = {'**********': ' '};
    for (let el in MORSE_TABLE) {
     const num = el.replace(/\./g, '10').replace(/\-/g,'11').padStart(10, '0');
    morseNum[num] = MORSE_TABLE[el];
    }
    for (let i=0; i<expr.length; i+=10) {
        const j = expr.slice(i, i+10).padStart(10, '0');
        decodeMorse = decodeMorse.concat(morseNum[j]);
    }
       return decodeMorse;
}

module.exports = {
    decode
}
