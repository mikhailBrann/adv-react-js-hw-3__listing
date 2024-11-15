import offerType from './types/offerType';
import Currency from './Currency';
import TruncateText from './TruncateText';

const Offer = (dataOffer: offerType) => {
    const offerImg = dataOffer.MainImage?.url_570xN ?? false;
    const levelClass = "item-quantity level-" + (dataOffer.quantity <= 10 ? 'low' : dataOffer.quantity <= 20 ? 'medium' : 'high');

    if(!dataOffer.price) {
        return;
    }

    return (
        <div className="item" key={dataOffer.listing_id}>
            <div className="item-image">
                <a href={dataOffer.url}>
                    <img src={offerImg || ''} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title"><TruncateText text={dataOffer.title} maxLength={50}/></p>
                <p className="item-price"><Currency priceObj={{"currency": dataOffer.currency_code, "price": dataOffer.price}}/></p>
                <p className={levelClass}>{dataOffer.quantity} left</p>
            </div>
        </div>
    );
};
export default Offer;