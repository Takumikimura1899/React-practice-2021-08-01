import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Page2 from '../Page2';
import Page1Routes from './Page1Routes';

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
        <Route path='/page2'>
          <Page2 />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
