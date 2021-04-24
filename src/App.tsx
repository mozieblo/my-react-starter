import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ROUTES } from './router/router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { globalTheme } from './styles/theme';

const App: FC = () => {
    const { HOME, ABOUT, CONTACT } = ROUTES;

    return (
        <ThemeProvider theme={globalTheme}>
            <Switch>
                <Route path={HOME} exact component={Home} />
                <Route path={ABOUT} exact component={About} />
                <Route path={CONTACT} exact component={Contact} />
                <Redirect to={HOME} />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
