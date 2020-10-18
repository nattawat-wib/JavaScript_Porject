let sum = 0;

function plu () {
    sum++;
    document.getElementById('result').innerHTML = sum;
}

function min () {
    sum--;
    resText = sum;
    document.getElementById('result').innerHTML = sum;
}

function reset () {
    sum = 0 ;
    resText = sum;
    document.getElementById('result').innerHTML = sum;
}

if(sum == 10) {
    document.getElementById('result').style.color = 'red';
}