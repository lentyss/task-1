kolvo = document.getElementsByClassName('card').length;

for (let i = 0; i < kolvo; i++){
    if (i % 2 != 0){
        document.getElementsByClassName('card')[i].style.backgroundColor = '#09c953';
    }
    document.getElementsByClassName('card-title')[i].innerHTML  += ' #' + (++i);
    i--;
}
