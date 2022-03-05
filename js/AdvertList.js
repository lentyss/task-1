class AdvertList {
    constructor(obj) {
        this.elem = obj.elementId;
        this.adData = obj.initialAdverts;
    }
    /*
    * Добавление объявления на страницу и добавление созданного класса
    */
    initAdvert(adData, i) {
        let data = {adData, i};
        let advert = new Advert(data);
        advert.getTemplate();
        advert.setEvent();
    }
    /*
    * Перебор списка объявлений
    */
    listAdverts() {
        for (let i = 0; i < this.adData.length; i++){
            this.initAdvert(this.adData[i], i);
        }
    }
}