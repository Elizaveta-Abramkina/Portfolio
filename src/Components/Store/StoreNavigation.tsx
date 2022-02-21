import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "../../styles/StoreNavigation.css"

const StoreNavigation = () => {
    return (
        <div>
            <aside>
                <div className="store-nav">
                    <Link className="store-nav__link" to="/store/admin-panel">Admin panel</Link>
                    <Link className="store-nav__link"  to='/store/products'>All products</Link>
                </div>
            </aside>
        </div>
    );
};

export default StoreNavigation;