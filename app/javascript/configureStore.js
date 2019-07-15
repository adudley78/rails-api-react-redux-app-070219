// like index.js

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    articles: [
        // {
        //     name: "test",
        //     guid: "123"
        // }
    ]
};

function rootReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case "GET_ARTICLES_SUCCESS":
            return { articles: action.json.articles };
    }
    return state;
}

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunk,
            )
        )
    );
    return store;
}