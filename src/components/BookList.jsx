import React, { useState, useEffect } from 'react';
import { API_URL } from '../API';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

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
                    <div key={idx}>
                        <div>
                            <h2>{book.title}</h2>
                        </div>
                        <div>
                            <img src={book.image_url} alt='' />
                        </div>
                        <div>
                            <button>Add to favorites</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BookList;
