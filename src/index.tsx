import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.sass';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

reportWebVitals();
