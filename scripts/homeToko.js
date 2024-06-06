function clearLastCharacter() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

const testing = document.getElementById('msrBtn');
testing.addEventListener('click', function(){
    alert('jadi');
});

function totalHarga(index){
    const namaMenu = document.getElementsByClassName('namaMenu');
    const hargaMenu = document.getElementsByClassName('hargaMenu');
    const jumlahMenu = document.getElementsByClassName('jumlahMenu');

    for(let i = 0; i < arguments; i++){
        
    }
}

const sturct = document.getElementById('sturct');
const tmbhDsr = document.getElementById('dsrBtn');
tmbhDsr.addEventListener('click', function(){
    const elmBaru = document.createElement('p');
    // elmBaru.setAttribute('class', '');
    const textBaru = document.createTextNode('1x Durian Sticky Rice');
    elmBaru.appendChild(textBaru);
    // const hargaBaru = document
    sturct.appendChild(elmBaru);
    });

const tmbhLk = document.getElementById('lkBtn');
tmbhLk.addEventListener('click', function(){
    const divBru = document.createElement('div');
    const pBaru = document.createElement('p');
    divBru.setAttribute('class', 'd-flex gap-2 justify-content-between');
    const textBaru = document.createTextNode('1x Lupis Ketan');
    const hargaBaru = document.createTextNode('Rp.10.000');
    pBaru.appendChild(textBaru);
    pBaru.appendChild(hargaBaru);
    divBru.appendChild(pBaru)
    sturct.appendChild(divBru);
});

const tmblClear = document.getElementById('clear');
tmblClear.addEventListener('click', function(){
    const hapus = document.createTextNode(' ');
    sturct.innerHTML(' ');
});