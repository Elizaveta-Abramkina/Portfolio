import React from 'react';
import {Link, Outlet} from "react-router-dom";

const StoreNavigation = () => {
    return (
        <div>
            <aside>
                <div>
                    <Link to="/store/admin-panel">Admin panel</Link>
                    <Link  to='/store/products'>All products</Link>
                </div>
            </aside>
            <Outlet/>
        </div>
    );
};

export default StoreNavigation;