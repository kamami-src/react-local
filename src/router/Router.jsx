import { Switch, Route } from 'react-router-dom';
import { Contact } from '../Contact';
import { ContactConfirm } from '../ContactConfirm';
import { Diary } from '../Diary';
import { Home } from '../Home';
import { Page404 } from '../Page404';
import { ProfileRoutes } from './ProfileRoutes';

export const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route path="/profile" render={({ match:{ url } }) => (
                    <Switch>
                        {ProfileRoutes.map((route) => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                            >
                                {route.children}
                            </Route>
                        ))}
                    </Switch>
                )}>
                </Route>
                <Route path="/diary">
                    <Diary />
                </Route>
                <Route　exact path="/contact">
                    <Contact />
                </Route>
                <Route　exact path="/contact/confirm">
                    <ContactConfirm />
                </Route>
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        </>
    )
}