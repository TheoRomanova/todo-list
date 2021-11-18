import { Provider } from "react-redux";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Form } from "./components/Form/Form";
import { Todos } from "./components/Todos/Todos";
import { configureStore } from "./redux/configureStore";
function App() {
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Provider store={configureStore()}>
          <Switch>
            <Route component={Form} path="/form" exact />
            <Route component={Todos} path="/todos" exact />

            <Redirect to="/form" />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
