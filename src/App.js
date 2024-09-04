import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
// import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import HooksIceCreamContainer from './components/hooksIceCreamContainer';
import HooksChocolateContainer from './components/hooksChocolateContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <HooksChocolateContainer />
      </div>
    </Provider>
  );
}

export default App;
