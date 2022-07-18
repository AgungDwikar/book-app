import React, { useState, useEffect } from 'react';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/AppContext';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    const { favorites, addToFav, removeOnFav } = useAppContext();

    console.log('favorites are', favorites);

    const favChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };
    useEffect(() => {
        getBooks();
    }, []);
    async function getBooks() {
        try {
            const resp = await axios.get(API_URL);
            console.log(resp);
            setBooks(resp.data);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div className='book-list'>
                {books.map((book, idx) => (
                    <div key={idx} className='book'>
                        <div className='title-book'>
                            <h4>" {book.title} "</h4>
                        </div>
                        <div>
                            <img src={book.image_url} alt='' />
                        </div>
                        <div className='btn-fav'>
                            {favChecker(book.id) ? (
                                <button onClick={() => removeOnFav(book.id)}>
                                    remove favorites
                                </button>
                            ) : (
                                <button onClick={() => addToFav(book)}>
                                    Add to favorites
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BookList;
