exports.handler = async function(state:any) {
    type User = {
        name:string,
        phone:string,
        address:string,
    }

    const obj: User = {
        name: state.name ? state.name : 'John',
        phone: state.phoneNumber ? state.phoneNumber : '+12058547412',
        address: state.deliveryAddress ? state.deliveryAddress : '3637 Doctors Drive'    
    }
    
    const randomAlphaNumeric = Math.random().toString(6).slice(2);
    const message = "The order " + randomAlphaNumeric + " which belongs to "+ obj.name + "("+obj.phone+") will be delivered in few minutes in "+obj.address;
    return { message }
}