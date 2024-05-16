import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {BuyButtonComponent} from "../../components/buy-button/index.js";
import {alertPlaceholder} from "../../components/alertPlaceholder/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        switch (this.id){
            case '1':
                return {
                    id: 1,
                    src: "https://i.pinimg.com/236x/d8/08/9c/d8089cfc25263b8a71769a8d8232319d.jpg",
                    title: `Кошка ${this.id}`,
                    text: "Такой кошки вы еще не видели"
                }
                break;
            case '2':
                return {
                    id: 1,
                    src: "https://i.pinimg.com/236x/c1/a4/36/c1a436555d06baed240bc6e705ece940.jpg",
                    title: `Кошка ${this.id}`,
                    text: "Такой кошки вы еще не видели"
                }
            case '3':
                return {
                    id: 1,
                    src: "https://i.pinimg.com/236x/c0/c5/17/c0c51737085bd6bfd1aaa004b3d48760.jpg",
                    title: `Кошка ${this.id}`,
                    text: "Такой кошки вы еще не видели"
                }
        }

    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    clickbuy(){
        const alertph = new alertPlaceholder(this.parent)
        alertph.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const buyButton = new BuyButtonComponent(this.pageRoot)
        buyButton.render(this.clickbuy.bind(this))
    
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}
