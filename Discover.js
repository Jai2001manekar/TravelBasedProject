import React from "react";

const Discover = () => {
    return(
<section class="discover">
    <h2>Discover</h2>
    <div class="discover-grid">
        <div class="discover-item">
            <img src= {require('./Beachgateway.jpg')} alt="Discover 1"/>
            <h3>Beach Getaways</h3>
            <p>Find your perfect beach vacation</p>
        </div>
        <div class="discover-item">
            <img src= {require('./CityPlan.jpg')} alt="Discover 2"/>
            <h3>City Breaks</h3>
            <p>Explore new cities and cultures</p>
        </div>
        <div class="discover-item">
            <img src= {require('./MountainRetreats.jpg')} alt="Discover 3"/>
            <h3>Mountain Retreats</h3>
            <p>Escape to the mountains</p>
        </div>
    </div>
</section>
    )
}
export default Discover;