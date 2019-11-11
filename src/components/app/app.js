import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import { withBookstoreService } from '../hoc';
import { HomePage, CartPage } from '../pages';

const App = ({ bookstoreService }) => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact />
            <Route
                path="/cart"
                component={CartPage} />
        </Switch>
    );
};

export default withBookstoreService()(App);