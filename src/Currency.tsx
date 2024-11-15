const Currency = ({priceObj}: Object) => {
    const { currency, price } = priceObj;
    let result = '';
    
    switch (currency) {
        case 'USD':
            result = `$${price}`;
            break;
        case 'EUR':
            result = `€${price}`;
            break;
        default:
            result = `${price} ${currency}`;
            break;
    }

    return result;
}

export default Currency;