import A from "./components/A";
import { Provider } from "./contexts";

function App() {
  return (
    <Provider>
      <A />
    </Provider>
  );
}

export default App;
