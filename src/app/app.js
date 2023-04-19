
const componentService = new ComponentService();
const errorService = new ErrorService();

errorService.hindError();

//Create Order
const calTotal =()=>{

    //hindError before cal for clear if before is error
    errorService.hindError();

    //validate 
    const inputs = componentService.getInputs()
    // const inputs = [priceInput.value, amountInput.value, shippingInput.value]
    const numbers =parseInput(...inputs);
    const valid = validateinput(...numbers);

    //calculation
    if(valid){
        const[price,amount,shipping] = numbers;
        const totalPrice = price * amount + shipping;
        componentService.setPrice(totalPrice)

    // callerror
    }else{
        //  showError()
        errorService.showErrorMessage(inputs,numbers)
    }
}

// totalBtn.addEventListener('click',calTotal)
componentService.onClick(calTotal)

