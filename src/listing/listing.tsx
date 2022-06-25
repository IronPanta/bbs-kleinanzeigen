import './listing.css'

function Listing(){
    return(<>
        <div className='listing'>
            <img className='listingImage' src="/assets/placeimg_500_300_arch1.jpg" alt="Product"></img>
            <div className="listingName">Test Listing</div>
            <div className='listingCondition'>Gebraucht</div>
            <div className="listingPrice">999,99 €</div>
        </div>
    </>);
}

export default Listing;