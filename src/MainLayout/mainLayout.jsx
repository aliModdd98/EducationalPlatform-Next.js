import { Provider } from "react-redux";
import store from "@/store";
export default function MainLayouts({ children }) {
  return (

    <Provider store={store}>
  {children}

    </Provider>
   );
}
