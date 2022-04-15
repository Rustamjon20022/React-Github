import React from 'react';
import "./Home.css";
import { AiFillFolderAdd } from "react-icons/ai";

const Home = () => {
  return (
  <div className='Home'>
      <div className='home'>
      </div>
      <div className='word'>
        <h1>Welcome to <span>HeroBiz</span> </h1>
        <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
        <button>Get started</button>

      </div>
      <div className='Cards'>
      <div className='card0 '>
      <h1><AiFillFolderAdd /></h1>
        <h1>Lorem ipsum</h1>
        <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
      </div>
      <div className='card1 '>
      <h1><AiFillFolderAdd /></h1>

        <h1>Lorem ipsum</h1>
        <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
      </div>
      <div className='card2 '>
      <h1><AiFillFolderAdd /></h1>

        <h1>Lorem ipsum</h1>
        <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
      </div>
      <div className='card3 '>
      <h1><AiFillFolderAdd /></h1>

        <h1>Lorem ipsum</h1>
        <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
      </div>

      </div>
  </div>
  )
  
}

export default Home;
