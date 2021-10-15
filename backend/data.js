import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Chad",
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: "John",
            email: "jadams@hummuzon.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Sprouts',
            category:'Hummus',
            image:'/images/p1.jpg',
            price: 3.45,
            countInStock: 10,
            brand: "Sprouts",
            rating: 5,
            numReviews: 10,
            description: 'Delicious hummus',
        },
        {
            name: 'Whole Foods',
            category:'Hummus',
            image:'/images/p2.jpg',
            price: 2,
            countInStock: 0,
            brand: "Whole Foods",
            rating: .5,
            numReviews: 10,
            description: 'Mediocre hummus',
        },
        {
            name: 'Target',
            category:'Hummus',
            image:'/images/p1.jpg',
            price: 4,
            countInStock: 4,
            brand: "Target",
            rating: 3.5,
            numReviews: 10,
            description: 'Target hummus',
        },
        {
            name: 'Pirate O\'s',
            category:'Hummus',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 5,
            brand: "Sprouts",
            rating: 5,
            numReviews: 10,
            description: 'Delicious hummus',
        },
        {
            name: 'World Market',
            category:'Pirate-Os',
            image:'/images/p1.jpg',
            price: 6,
            countInStock: 12,
            brand: "Sprouts",
            rating: 5,
            numReviews: 10,
            description: 'Delicious hummus',
        },
        {
            name: 'Harmon\'s',
            category:'Hummus',
            image:'/images/p1.jpg',
            price: 2.40,
            countInStock: 1,
            brand: "Walmart",
            rating: 2.5,
            numReviews: 10,
            description: 'Delicious hummus',
        }
    ]
};

export default data;