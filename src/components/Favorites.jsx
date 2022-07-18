import React from 'react';
import { useAppContext } from './context/AppContext';

const Favorites = () => {
    const { favorites, addToFav, removeOnFav } = useAppContext();

    console.log('favorites are', favorites);

    const favChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };
    return (
        <div className='favorites'>
            {favorites.length > 0 ? (
                favorites.map((book, idx) => (
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
                ))
            ) : (
                <div className='books-wrap'>
                    <h1 className='no-books'>
                        you dont have any favorites books...
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Favorites;
