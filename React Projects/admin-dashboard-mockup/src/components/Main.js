import React from 'react';
import Header from './Header';
import Cards from './Cards';
import MiniCards from './MiniCards';
import Graphs from './Graphs';

const Main = (props) => {
  return (
    <div className={props.className}>
      <Header />
      <Cards />
      <MiniCards />
      <Graphs />
    </div>
  )
}

export default Main