// UTIL-2
//validateinput///
export const validateinput = (...inputs) => {
    return inputs.every((el)=> typeof el ==='number'&& !isNaN(el)) 
};