import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import all pages
import Home from './home';
import About from './about';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Interest from './interest';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skill" component={Skills} />
        <Route path="/interest" component={Interest} />
        <Route path="/experience" component={Experience} />


    </Switch>
)

export default Router;