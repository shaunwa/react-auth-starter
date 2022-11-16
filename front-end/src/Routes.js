import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { LogInPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <UserInfoPage />
        </PrivateRoute>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};
