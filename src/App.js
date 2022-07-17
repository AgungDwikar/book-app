import React from 'react';
import './components/style.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList.jsx';
import BooksDetails from './components/BooksDetails';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Favorites from './components/Favorites';
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<BookList />} />
                <Route path='/book/id' element={<BooksDetails />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
