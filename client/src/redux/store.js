import {createStore, applyMiddleware, compose} from 'redux';
// import devToolsEnhancer from 'remote-redux-devtools';
import  thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer, 
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
    // devToolsEnhancer(applyMiddleware())
    )

export default store