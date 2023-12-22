

export default class AviaService{
    constructor() {
        this.url = 'https://front-test.dev.aviasales.ru/search';
        this.anotherUrl = 'https://aviasales-test-api.kata.academy/search';
    }
    async getRes(url) {
        const res = await fetch(url);
        if (!res.ok){
            throw new Error("trouble in fetch((((")
        }
        return res;
    };

    async getInfo(){
        const res = await this.getRes(this.anotherUrl);
        return res;
    }
}