import React from 'react';
import BookList from '../book-list';

const HomePage = () => {

    const dataBooks = [
        { id: 1, title: 'Как быть стоиком. Античная философия и современная жизнь ', author: 'Массимо Пильюччи' },
        { id: 2, title: 'Нравственные письма к Луцилию', author: 'Луций Анней Сенека' },
    ];
    return (
        <div>
            HomePage
            <BookList books={dataBooks} />
        </div>
    );
};

export default HomePage;
