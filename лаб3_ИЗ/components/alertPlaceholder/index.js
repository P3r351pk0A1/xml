export class alertPlaceholder {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return (
            `
            <div class="alert alert-danger alert-dismissible" role="alert">
               <div>Эти кошки кончились!</div>
               <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
            </div>
            `
        )
    }

    render() {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }


}


