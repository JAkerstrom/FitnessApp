import { createStore } from 'redux';
import rootReducer from './Reducers/RootReducer';

export default function configureStore() {
    return createStore(rootReducer);
}