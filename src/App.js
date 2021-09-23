import { Switch, Route } from 'react-router-dom';

import { AppHeader } from './cmps/AppHeader';
import { FavoritesPage } from './pages/FavoritesPage';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Switch>
        <Route path="/favorites" component={FavoritesPage}></Route>
        <Route path="/" exact component={ Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
