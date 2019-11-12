import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import { withBookstoreService } from '../hoc';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';

const App = ({ bookstoreService }) => {
    return (
        <main role="main" className="container">
        <ShopHeader numItems={3} total={1488}/>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/cart"
                    component={CartPage} />
            </Switch>
        </main>
    );
};

export default withBookstoreService()(App);