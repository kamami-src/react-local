import { Switch, Route } from 'react-router-dom';
import { Contact } from '../Contact';
import { Diary } from '../Diary';
import { Home } from '../Home';
import { Profile } from '../Profile';

export const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/diary">
                    <Diary />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </>
    )
}