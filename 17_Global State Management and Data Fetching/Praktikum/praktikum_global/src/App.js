import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store.js";
import Axios from "./axios.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        </PersistGate>
      </Provider>
      <Axios/>
    </div>
  );
}

export default App;