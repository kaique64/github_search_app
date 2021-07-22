/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import isAuthenticated from './auth';
import NotFound404 from './pages/NotFound';
import Repositories from './pages/Repositories';
import SearchUser from './pages/SearchUser';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props =>
            isAuthenticated() ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
)

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={SearchUser} />
                <PrivateRoute exact path='/repos' component={Repositories} />
                <Route path='*' component={NotFound404} />
            </Switch>
        </BrowserRouter>
    );
}