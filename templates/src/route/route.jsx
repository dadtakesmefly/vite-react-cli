import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from '../components/scrollToTop/index'; // 用于切换路由时,将页面滚动到最上面
import Detail from '../screens/detail/detail';
import List from '../screens/list/list';
import Draw from '../screens/draw/draw';


const BasicRoute = () => (
    <HashRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={List} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/draw" component={Draw} />
            </Switch>
        </ScrollToTop>
    </HashRouter>
);

export default BasicRoute;