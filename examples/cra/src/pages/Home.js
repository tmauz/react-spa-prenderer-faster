import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="bla bla bla home" />
        <meta name="robots" content="INDEX,FOLLOW" />
      </Helmet>
      <h2>Home page</h2>
    </>
  )
}

export default Home;
