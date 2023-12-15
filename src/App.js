// import './App.css';
import {Provider} from 'react-redux';
import store from './services/redux/store/store';
import AppWithLayout from './config/appWithLayout';

function App() {
  return (
    <Provider store={store}>
      <AppWithLayout />
    </Provider>
  );
}

export default App;
