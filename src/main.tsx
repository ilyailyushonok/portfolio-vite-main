import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {StrictMode} from "react";
import {GlobalStyle} from "./styles/GlobalStyle.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>
)
