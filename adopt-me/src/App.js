import { render } from 'react-dom';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import SearchParams from './SearchParams';
import Details from './Details';

import ThemeContext from './ThemeContext';


const App = () => {
    const theme = useState('pink');

    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
};

render(<App />, document.getElementById("root"));
