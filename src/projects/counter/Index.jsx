import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./Counter";

const Index = () => {
  return (
    <Provider store={store}>
      <Counter />;
    </Provider>
  );
};

export default Index;
