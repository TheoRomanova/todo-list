import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Todos } from "./pages/Todos/Todos";
import { configureStore } from "./redux/configureStore";
const App = () => (
  <div className="main-wrapper">
    <BrowserRouter>
      <Provider store={configureStore()}>
        <Switch>
          <Route component={Home} path="/home" exact />
          <Route component={Todos} path="/todos" exact />

          <Redirect to="/home" />
        </Switch>
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;
