class AdvertList {
    constructor(obj) {
        this.elem = obj.elementId;
        this.adData = obj.initialAdverts;
    }
    /*
    * Добавление объявления на страницу и добавление созданного класса
    */
    initAdvert(adData, elem) {
        let data = { adData, elem };
        let advert = new Advert(data);
        advert.getTemplate();
    }
    /*
    * Перебор списка объявлений
    */
    listAdverts() {
        for (let i = 0; i < this.adData.length; i++){
            this.initAdvert(this.adData[i], this.elem);
        }
    }
}