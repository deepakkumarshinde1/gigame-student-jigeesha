import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterContextProvider } from "./context/counter.context.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </Provider>
  </>,
);
