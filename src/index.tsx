import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './app/styles/reset.scss';
import './app/styles/index.scss';

const root = createRoot(document.getElementById('root') as Element);
root.render(<App />);
