import React, { useState } from 'react';
import Context from './components/context';

export default function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App w-screen pt-10 pl-10">
            <button
                onClick={() => {
                    setShow(!show);
                }}
                className="px-3 py-1 bg-gray-200 border border-black rounded-md"
            >
                Toggle
            </button>
            {show && <Context />}
        </div>
    );
}
