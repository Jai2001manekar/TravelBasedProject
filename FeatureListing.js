import React from "react";
const FeatureListing =()=>{
    return(
        <section class="featured-listings">
        <h2>Featured Listings</h2>
        <div class="listing-grid">
            <div class="listing">
                <img src={require('./WoodHouse.jpg')}alt="Listing 1"/>
                <h3>Cozy Cabin in the Woods in Himachal Pradesh</h3>
                <p>$150/night</p>
            </div>
            <div class="listing">
                <img src={require('./beach-side-bungalow-remodel-spang-builders-inc-img~c01141e809b022f8_4-8647-1-6bd37b2.jpg')} alt="Listing 2"/>
                <h3>Beachfront Villa in Goa</h3>
                <p>$300/night</p>
            </div>
            <div class="listing">
                <img src={require('./Flat.jpg')} alt="Listing 3"/>
                <h3>Modern Apartment in Nagpur</h3>
                <p>$200/night</p>
            </div>
        </div>
    </section>

    )
}
export default FeatureListing;