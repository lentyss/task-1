class Advert {
    constructor(obj) {
        this.adData = obj.adData;
        this.elem = obj.elem;
        this.getTemplate = this.getTemplate.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }
    /*
    * Заполнение шаблона объявления в my-adverts
    */
    getTemplate() {
        this.tmp = `<div class="obv" id="${this.adData.id}">
                        <div class="obv-preview">
                        <h3 class="advert-id">№ ${this.adData.id}</h3>
                        <img src="./images/default.jpg" class = "advert-img"/>
                        </div>
                        <div class="obv-info">
                        <h3 class="advert-zag">${this.adData.title}</h3>
                        <h3 class="advert-cost">${this.adData.cost} ₽</h3>
                        <h3 class="advert-adress">${this.adData.address}</h3>
                        </div>
                        <div class="obv-buttons">
                        <a href="adv_create.html" class="button_edit">Редактировать</a>
                        <button type = "submit" class="button_delete">Удалить</button>
                        </div>
                    </div>`
        this.elem.insertAdjacentHTML('beforebegin', this.tmp);
        this.setEvent();
    }
    /*
    * Навешивание события на удаление объявления my-adverts
    */
    setEvent() {
        let buttonDelete = document.getElementsByClassName('button_delete');
        for (let i = 0; i < buttonDelete.length; i++) {
            buttonDelete[i].addEventListener("click", this.deleteEvent);
        }
    }
    /*
    * Удаление объявления my-adverts
    */
    deleteEvent(element, target) {
        let advert = element.target.closest('.obv');
        advert.getAttribute('id');
        advert.remove();
    }
}
