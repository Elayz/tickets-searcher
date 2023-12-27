

export default class AviaService{
    constructor() {
        this.url = 'https://front-test.dev.aviasales.ru/search';
        this.searchIdUrl = 'https://aviasales-test-api.kata.academy/search/';
        this.resUrl = 'https://aviasales-test-api.kata.academy/'
    }
    async getSearchId(url) {
        try{
            let searchId = (await fetch(`${url}`)).json();
            return searchId
        }
        catch (e) {
            throw new Error("trouble in fetch((((")
        }
    };
    async getRes(url, searchId) {
        try{
            const res = await fetch(`${url}tickets?searchId=${searchId}`)
            return res
        }
        catch (e) {
            throw new Error("trouble in fetch((((")
        }
    };

    async getInfo(){
        const searchId = await this.getSearchId(this.searchIdUrl);
        let id = searchId.searchId
        const res = await this.getRes(this.resUrl, id);
        return res.json();
    }
}