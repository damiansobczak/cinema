
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Favorite />
                <Switch>
                    <Route exact path="/" component={App} />
                    {/* <Route exact path="/reservation/:film" component={App} /> */}
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}