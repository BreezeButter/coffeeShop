/// Class=> Generate obj

// Class => Generate Object

class ComponentService {
    /*
 {
  priceInput : DOM-INPUT-1,
  amountInput : DOM-INPUT-2
 }
 
 */
    constructor() {
        this.priceInput = document.getElementById('product-price');
        this.amountInput = document.getElementById('product-amount');
        this.shippingInput = document.getElementById('product-shipping');
        this.resultBox = document.getElementById('result');
        this.totalBtn = document.getElementById('total-btn');
    }

    getInputs() {
        let price = this.priceInput.value;
        let amount = this.amountInput.value;
        let shipping = this.shippingInput.value;
        return [price, amount, shipping];
    }

    setPrice(price) {
        this.resultBox.innerText = price;
    }

    onClick(calTotal) {
        this.totalBtn.addEventListener('click', calTotal);
    }
}

// const myComponet = new ComponentService()