kolvo = document.getElementsByClassName('card').length;
for (let i = 0; i < kolvo; i){
    let el = document.getElementsByClassName('card')[i];
}
for (let i = 0; i < kolvo; i++){
    if (i % 2 != 0){
        el.style.backgroundColor = '#09c953';
    }
    el.innerHTML  += ' #' + (++i);
}
