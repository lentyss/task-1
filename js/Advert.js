class Advert {
    /*
    * Заполнение шаблона объявления в my-adverts
    */
    getTemplate(params) {
        for (let i = 0; i < document.getElementsByClassName('obv').length; i++) {
            document.getElementsByClassName('advert-zag')[i].innerHTML = params.headline;
            document.getElementsByClassName('advert-cost')[i].innerHTML = params.cost;
            document.getElementsByClassName('advert-adress')[i].innerHTML = params.adress;
            document.getElementsByClassName('advert-id')[i].innerHTML = params.number;
        }
    }
    /*
    * Навешивание события на удаление объявления my-adverts
    */
    setEvent() {
        let delAdvert = document.getElementsByClassName('button_delete');
        if (delAdvert) {
            console.log('есть!');
            this.deleteEvent();
            delAdvert.onclick = function() {
                //не выполняется функция
                this.deleteEvent();
                let indexObv = delAdvert.querySelector;
                document.getElementsByClassName('obv')[indexObv].remove();
            }        
        }
        else {
            console.log('нет элемента в шаблоне');
        }
    }
    deleteEvent() {
        console.log('333');
    }
}

adData = {
    headline: "Дом в Барвихе",
    cost: "9 000 000 ₽",
    adress: "Цветочная улица, 23",
    number: "№284713528"

};
advertClass = new Advert();
advertClass.getTemplate(adData);
advertClass.setEvent();