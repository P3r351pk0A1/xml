import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    }
        
    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/236x/d8/08/9c/d8089cfc25263b8a71769a8d8232319d.jpg",
                title: "Черно-желтая кошка",
                text: "Такой кошки вы еще не видели"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/236x/c1/a4/36/c1a436555d06baed240bc6e705ece940.jpg",
                title: "Котенок",
                text: "Черный"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/236x/c0/c5/17/c0c51737085bd6bfd1aaa004b3d48760.jpg",
                title: "Белая кошка",
                text: "Замечательная"
            },
        ]
    }
        

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}





