import offerType from "./types/offerType";
import Offer from "./Offer";
import uniqid from 'uniqid';

const Listing = (inputData: Array<offerType>) => {
    const offers = [];
    const { data, ...props } = inputData;
    const uniq = uniqid();

    for(const offer of data) {
        const uniq = uniqid();
        offers.push(<Offer {...offer} key={uniq}/>);
    }

    return (
        <div className="item-list" key={uniq}>
            {offers}
        </div>
    );
}

export default Listing;