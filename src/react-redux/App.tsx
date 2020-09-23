import * as React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import { Footer, Navbar } from './layout';
import { About, Home, NotFoundPage, Contact, Project } from './pages';


interface AppProps {
    /** */
}

export const App = (props: AppProps) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/single-page" component={Project} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    );
}