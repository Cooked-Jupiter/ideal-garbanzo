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
            _id:'1',
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
            _id:'2',
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
            _id:'3',
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
            _id:'4',
            name: 'Sprouts',
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
            _id:'5',
            name: 'Sprouts',
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
            _id:'6',
            name: 'Sprouts',
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