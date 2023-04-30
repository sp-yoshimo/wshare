import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return <div>
        <header>
            <div className="logo">
                <h3>WShare</h3>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/post">投稿</Link></li>
                </ul>
            </nav>
        </header>
    </div>;
};

export default Header;
