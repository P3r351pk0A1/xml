export class MainPage{
    constructor(parent) {
        this.parent = parent;
        this.result = [];
        this.input = '1, 2, 3, 4, 5'
    }

    inverse(array, n=0) {
        array = [...array]
        let result = [];
        let savedData = []
        let addToEnd = n > 0;
        while (Math.abs(n) > 0) {
            if (n > 0) {
                savedData.push(array.shift())
                n--;
            }
            else {
                savedData.unshift(array.pop())
                n++;
            }
        }
        for (let i = 0; i < array.length; i++) {
            let index = array.length - i - 1;
           result.push(array[index]);
        }
        if (addToEnd) result = [...savedData, ...result]; else result = [...result, ...savedData];
        return result;
    }

    res(n){

        this.array = '1, 2, 3, 4, 5'
        this.array = this.array.split(', ')
    for (let i = 0; i < this.array.length; i++)
        this.array[i] = parseInt(this.array[i])
    // array = [1, 2, 3, 4, 5];
    console.log(`Input: ${this.array}`)
    this.result = this.inverse(this.array, n)
    console.log(`n = ${n}: ${this.result}`)
    }

    render() {
        this.res(0)
        const html = this.getHTML(0)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.res(2)
        const html1 = this.getHTML(2)
        this.parent.insertAdjacentHTML('beforeend', html1)
        this.res(-2)
        const html2 = this.getHTML(-2)
        this.parent.insertAdjacentHTML('beforeend', html2)

    }
    
    getHTML(n) {
        return (
            `
                <div class="card" style="width: 300px;">
                                    <div class="card-body">
                        <h5 class="card-title">Input: ${this.input}</h5>
                        <p> n = ${n}: ${this.result}</p>
                    </div>
                </div>
            `
        )
    }

}
