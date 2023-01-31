exports.handler = async function(flavour:any) {
    let containsPineapple = false;
    
    if(flavour === 'pineapple' || flavour === 'hawaiian'){
        containsPineapple = true;
    }

    return {containsPineapple}
}