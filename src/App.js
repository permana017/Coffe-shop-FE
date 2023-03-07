import Routers from './routers'
import './App.css';
import { store } from 'src/redux/store';
import { Provider } from 'react-redux';


function App() {

  return (
    <Provider store={store}>
      <Routers/>
    </Provider>
  );
}

export default App;
