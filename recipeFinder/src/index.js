import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import rootReducer from "./reducers/index";
import {createStore} from "redux";
import FavoriteRecipeList from "./components/FavoriteRecipeList/FavoriteRecipeList";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/favorite" component={FavoriteRecipeList}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);