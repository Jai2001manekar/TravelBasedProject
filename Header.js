import React from "react";
const Header = () => {

    return(
        <header>
        <nav>
            <ul>
                <li><a href="#">Become a Host</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </nav>
        <div class="logo">
            <img src={require("./Radhekrishna.png")} />
        </div>
    </header>

    )
}
export default Header;