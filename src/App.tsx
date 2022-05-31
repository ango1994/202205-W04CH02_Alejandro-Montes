import React, { useState } from 'react';
import './App.css';
import { Form } from './pages/form';

export function App() {
    const [state, setState] = useState(1);

    return (
        <>
            <Form state={state}></Form>
            <button onClick={() => setState(state - 1)}>Anterior</button>
            <button onClick={() => setState(state + 1)}>Siguiente</button>
        </>
    );
}

export default App;
