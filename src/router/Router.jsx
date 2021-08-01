import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Page1Routes from './Page1Routes';
import Page2Routes from './Page2Routes';

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route
          path='/page1'
          // 引数で渡されるpropsにはルーティングに関する様々なデータが入っている。
          // その中のmatchの中のurlを使用する
          render={({ match: { url } }) => (
            <Switch>
              {Page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
        <Route
          path='/page2'
          render={({ match: { url } }) => (
            <Switch>
              {Page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
      </Switch>
    </div>
  );
};

export default Router;
