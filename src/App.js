import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Auth/Login"));
const RegisterPage = lazy(() => import("./pages/Auth/Register"));

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return (
    <div className="App">
      <Suspense fallback={<h1>Error From React!</h1>}>
        <Router>
          <Switch>
            {token ? (
              <Route exact path="/" component={HomePage} />
            ) : (
              <Route
                exact
                path="/"
                render={() => <LoginPage setToken={setToken} />}
              />
            )}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
