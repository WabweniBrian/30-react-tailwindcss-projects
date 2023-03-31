import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./Home";

const Index = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Index;
