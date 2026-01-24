import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { WatchlistProvider } from './context/WatchListContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <WatchlistProvider>
        <App />
    </WatchlistProvider>
    </BrowserRouter>
)
