import { createContext, useContext } from 'react';
import { useState } from 'react';
const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('App context mast be whitin app context provider');
    }

    return context;
};

const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFav = (book) => {
        const oldFav = [...favorites];

        const newFav = oldFav.concat(book);

        setFavorites(newFav);
    };

    const removeOnFav = (id) => {
        const oldFav = [...favorites];
        const newFav = oldFav.filter((book) => book.id !== id);

        setFavorites(newFav);
    };
    return (
        <AppContext.Provider value={{ favorites, addToFav, removeOnFav }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
