import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'David',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //  _id: '2',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 25,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pants',
    },
    {
      //  _id: '3',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 250,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality shirt',
    },
    {
      //  _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 250,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 20,
      description: 'high quality pants',
    },
  ],
};

export default data;
