import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {GlobalStyle} from "./utils/styles/GlobalStyles";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClientInstance} from "./api/api";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={QueryClientInstance}>
            <GlobalStyle/>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);

