import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { HomeScreen } from "./screens/HomeScreen";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;
