

export default class AviaService{
    constructor() {
        this.url = 'https://front-test.dev.aviasales.ru/search';
        this.searchIdUrl = 'https://aviasales-test-api.kata.academy/search/';
        this.resUrl = 'https://aviasales-test-api.kata.academy/';
        this.id = '';
    };
    async getSearchId(url) {
        try{
            return (await fetch(`${url}`)).json()
        }
        catch (e) {
            throw new Error("trouble in fetch((((")
        }
    };
    async getRes(url, searchId) {
        try {
            return await fetch(`${url}tickets?searchId=${searchId}`);
        } catch (error) {
            return 0;
        }
    };

    async getId(){
        const searchId = await this.getSearchId(this.searchIdUrl);
        this.id = searchId.searchId
    }
    async getInfo(){
        const res = await this.getRes(this.resUrl, this.id);
        return res.json();
    };
}
