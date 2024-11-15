type offerType = {
    listing_id: number,  //уникальный идентификатор предложения, число;
    url: string, //ссылка на предложение, строка;
    MainImage: object, //информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
    title: string, //название предложения, строка;
    currency_code: string, //код валюты, строка;
    price: string, //цена, строка;
    quantity: number //доступное количество, число.
}

export default offerType;