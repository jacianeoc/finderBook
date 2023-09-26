import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Encontre seu livro</h2>
                <p className='header-text'> Apenas digitando o nome do livro ou autor que deseja encontrar </p>
                <br />
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header