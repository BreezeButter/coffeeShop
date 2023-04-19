//DOM:INPUT//

const priceInput = document.getElementById('product-price');
const amountInput = document.getElementById('product-amount');
const shippingInput = document.getElementById('product-shipping');

//DOM:OUTPUT//
const errorBox = document.getElementById('error');
const resultBox = document.getElementById('result');

//DOM:Event Handler//
const totalBtn = document.getElementById('total-btn');

// console.log(priceInput);


// FUNCTION

// UTIL-1
//Function str--> int////
const parseInput = (...inputs) => {
    return inputs.map((str)=> +(str))
};


// UTIL-2
//validateinput///
const validateinput =(...inputs) =>{
    return inputs.every((el)=> typeof el ==='number'&& !isNaN(el)) 
};


//Hind error
const hindError = ()=> {
   return errorBox.classList.add('invisible')
}
//Show error
const showError = ()=> {
   return errorBox.classList.remove('invisible')
}

//Call-FN All time
hindError();


//Custom-Message
const showErrorMessage = (inputs,numbers) => {

    const fullErrorMsg = inputs.reduce((msg,str,index)=>{
    if(validateinput(numbers[index]))
    {
        msg+=''

    }else{
        msg+=`${str} is not number.`
    }

    return msg 

    },'')

    /// Show
    errorBox.innerText = fullErrorMsg;
    showError()
}


//Create Order
const calTotal =()=>{

    //hindError before cal for clear if before is error
    hindError()

    //validate 
    const inputs = [priceInput.value, amountInput.value, shippingInput.value]
    const numbers =parseInput(...inputs);
    const valid = validateinput(...numbers);

    //calculation
    if(valid){
        const[price,amount,shipping] = numbers;
        const totalPrice = price*amount + shipping;
        console.log(totalPrice);

        resultBox.innerText = totalPrice;
    // callerror
    }else{
        //  showError()
        showErrorMessage(inputs,numbers)
    }
}

totalBtn.addEventListener('click',calTotal)

