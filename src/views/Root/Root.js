import React from 'react';
import MainTemplate from "../../stories/templates/MainTemplate";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import First from '../First'
import Second from "../Second";

const Root = () => (

            <BrowserRouter>
                <MainTemplate>
                    <Switch>
                    < Route exact path="/" component = { First } />
                    < Route path = "/first" component = { First }/>
                    < Route path = "/second" component = { Second }/>
                </Switch>
                </MainTemplate>
                </BrowserRouter>


)
export default Root;