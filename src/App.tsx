import React, { useState } from 'react';
import './App.css';
import { Home } from './pages/home';

export function App() {
    const [state, setState] = useState(1);

    return (
        <>
            <Home state={state}></Home>
            <button onClick={() => setState(state - 1)}>Anterior</button>
            <button onClick={() => setState(state + 1)}>Siguiente</button>
        </>
    );
}

export default App;
