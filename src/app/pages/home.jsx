

import React from 'react';
import Head from 'next/head';
import GetQuote from '../components/GetQuote';


const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Don't quote me on that</h1>
      </header>

      <main>
        <GetQuote />
      </main>

      <footer>
        <p>© 2023 Derek Olsen</p>
      </footer>
    </div>
  );
}

export default HomePage;
