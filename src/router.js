import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './layout/Layout';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import ringsRoutes from './modules/rings/routes';

function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={enUS}>
        <Router history={history}>
            <Layout>
                {ringsRoutes}
            </Layout>
        </Router>
    </LocaleProvider>
    
  );
}
export default RouterConfig;

/*<Switch>
    <Route path="/" exact component={Containers.List} />
    <Route path="/ring/list" exact component={Containers.List} />
    <Route path="/ring/detail" exact component={Containers.Detail} />
</Switch>*/
