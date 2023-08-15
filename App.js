import React from "react";
import HomePage from "./Src/Components/HomePage/HomePage";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import rootReducer from './reducers';
import Reducer from "./Src/Store/Reducer";
import Scanner from "./Src/Components/QRscanner/Scanner";
import Dropdown from "./Src/Components/Dropdown/Dropdown";

const App = () => {
  const store = createStore(Reducer, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      {/* <HomePage /> */}
      {/* <Scanner /> */}
      <Dropdown />
    </Provider>
  )
}
export default App;