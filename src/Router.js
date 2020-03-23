
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Favorite />
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </BrowserRouter>
        );
    }
}