import { SearchBar } from "./Main/SearchBar.js";
import { ContactUs } from "./Contact/ContactUs.js";
import { ProductList } from "./Main/ProductList.js";
import { NavigationBar } from "./NavigationBar/NavigationBar.js";
import MerchantProducts from "./Merchant/ProductList.js";
import AuthRegister from "./Auth/AuthRegister.js";
import AuthLogin from "./Auth/AuthLogin.js";

import { 
    BrowserRouter as Router, 
    Route,
    Switch,
    Redirect
    } from "react-router-dom";

const Components = () => {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={ProductList}>
                    {/* include components as children instead
                    so they will actually appear */}
                    <SearchBar />
                    <ProductList />
                </Route>
                <Route path="/contact" component={ContactUs}/>
                <Route path="/log-in" component={AuthLogin}/>
                <Route path="/register" component={AuthRegister}/>
                {/*<Route path="/merchant/:name" component={MerchantProducts}/>*/}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default Components;