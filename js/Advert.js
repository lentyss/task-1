class Advert {
    constructor(obj) {
        this.adData = obj.adData;
        this.indexElem = obj.i;
        this.elem = document.getElementsByClassName('button_delete');
        
    }
    /*
    * Заполнение шаблона объявления в my-adverts
    */
    getTemplate(i) {
        //for (let i = 0; i < document.getElementsByClassName('obv').length; i++)
        document.getElementsByClassName('advert-cost')[this.indexElem].innerHTML = this.adData.cost;
        document.getElementsByClassName('advert-id')[this.indexElem].innerHTML = this.adData.id;
        document.getElementsByClassName('advert-zag')[this.indexElem].innerHTML = this.adData.title;
        document.getElementsByClassName('advert-adress')[this.indexElem].innerHTML = this.adData.address;
    }
    /*
    * Навешивание события на удаление объявления my-adverts
    */
    setEvent() {
        if (this.elem) {
            for (let i = 0; i < this.elem.length; i++){
               /* this.elem[i].addEventListener("click", () => {
                    this.indexElem = i;
                    globalThis.deleteEvent();
                });*/
                this.elem[i].addEventListener("click", this.deleteEvent);
                this.indexElem = i;
            }
        }        
        else {
            console.log('Нет элемента в шаблоне');
        }
    }
    /*
    * Удаление объявления my-adverts и события на кнопку
    */
    deleteEvent() {
        document.getElementsByClassName('obv')[this.indexElem].remove();
    }
}
