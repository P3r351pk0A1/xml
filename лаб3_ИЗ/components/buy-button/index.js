export class BuyButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("buy-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="buy-button" class="btn btn-primary" type="button">Купить</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}