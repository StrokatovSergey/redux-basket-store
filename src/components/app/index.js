import React from 'react';
import ErrorIndicator from '../error-indicator';
import withBookstoreService from '../hocs/withBookstoreService';
import BookstoreService from '../../services/bookstore-service';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home-page';
import CarPage from '../pages/car-page';


const App = () => {

    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={(props) => (<HomePage/>)}/>
                <Route path={'/cart  '} render={(props) => (<CarPage/>)}/>
            </Switch>
        </div>
    );
};

export default App ;
