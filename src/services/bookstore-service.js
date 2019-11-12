export default class BookstoreServvice {

    getBooks() {
        return [
            {
                id: 1,
                title: 'The Adventures of Tom Sawyer',
                author: 'Mark Twain',
                price: 13,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                title: 'The Long Walk',
                author: 'Richard Bachman',
                price: 42,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg'
            },
            {
                id: 3,
                title: 'League of Legends',
                author: 'Riot Games',
                price: 35,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/A1ZdStJde4L.jpg'
            },
        ];
    }
    
}