import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store/store';


ReactDOM.render(
  <Provider store={store}>
  <App />
  </provider>,
Document.getElementById('root')
);
