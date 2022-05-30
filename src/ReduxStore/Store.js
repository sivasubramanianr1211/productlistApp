import {createStore, applyMiddleware, compose} from 'redux';
import Reducers from './Reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];
let allowedDevTools = true;
const configStore = () =>{
    const store = createStore(
        Reducers,
        compose(
            applyMiddleware(...middleware),
            window && window.devToolsExtension && allowedDevTools ? window.devToolsExtension() : f => f
        )
    )
    return store
}
// const store = createStore(Reducers)

export default configStore();