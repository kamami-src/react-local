import { VFC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoginUserProvider } from "../providers/LoginUserProvider";
import { ProfileRoutes } from './ProfileRoutes';
import { Contact } from '../components/pages/Contact';
import { ContactConfirm } from '../components/pages/ContactConfirm';
import { Diary } from '../components/pages/Diary';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';

export const Router: VFC = () => {
    return (
        <>
            <Switch>
                <LoginUserProvider>
                    <Route exact path="/">
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    </Route>
                    
                    <Route path="/profile" render={({ match:{ url } }) => (
                        <Switch>
                            {ProfileRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    <HeaderOnly>
                                        {route.children}
                                    </HeaderOnly>
                                </Route>
                            ))}
                        </Switch>
                    )}>
                    </Route>
                    <Route path="/diary">
                        <HeaderOnly>
                            <Diary />
                        </HeaderOnly>
                        
                    </Route>
                    <Route　exact path="/contact">
                        <HeaderOnly>
                            <Contact />
                        </HeaderOnly>
                    </Route>
                    <Route　exact path="/contact/confirm">
                        <HeaderOnly>
                            <ContactConfirm />
                        </HeaderOnly>
                    </Route>
                </LoginUserProvider>
                <Route path="*">
                    <HeaderOnly>
                        <Page404 />
                    </HeaderOnly>
                </Route>
            </Switch>
        </>
    )
}