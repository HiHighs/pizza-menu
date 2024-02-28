import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Jonas' Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza
        name='focaccia'
        ingredients='Bread with italian olive oil and rosemary'
        price={6}
      />
      <Pizza
        name='spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        price={12}
      />
      <Pizza
        name='funghi'
        ingredients='Tomato, mozarella, mushrooms, and onion'
        price={12}
      />
      <Pizza name='margherita' ingredients='Tomato and mozarella' price={10} />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={`pizzas/${props.name}.jpg`} alt={`Pizza ${props.name}`} />
      <div>
        <h3>Pizza {props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = openHour <= hour && hour <= closeHour;

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // if (openHour <= hour && hour <= closeHour) alert('We are open');
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <footer className='footer'>{time}. We are currently open!</footer>;
}

const root = createRoot(document.querySelector('#root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
