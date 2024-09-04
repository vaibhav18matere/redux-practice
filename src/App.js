import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
// import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import HooksIceCreamContainer from './components/hooksIceCreamContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
