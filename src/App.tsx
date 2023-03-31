import * as React from "react";
import { Provider } from "react-redux";
import Catalog from "./components/Catalog";
import SearchAppBar from "./components/SearchAppBar";
import { pokemonsApi } from "./utils/apiSlice";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
        <SearchAppBar />
        <Catalog />
    </Provider>
  );
}

export default App;
