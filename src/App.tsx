import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from './router/router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

const App: FC = () => {
    const { HOME, ABOUT, CONTACT } = ROUTES;

    return (
        <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={ABOUT} exact component={About} />
            <Route path={CONTACT} exact component={Contact} />
            <Redirect to={HOME} />
        </Switch>
    );
};

export default App;
