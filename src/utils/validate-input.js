// UTIL-2
//validateinput///
const validateinput =(...inputs) =>{
    return inputs.every((el)=> typeof el ==='number'&& !isNaN(el)) 
};