import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;

/* 
interview
1. how is react routing different from conventional rouating
2. how do you implement react routing
3. what is the prupose of context api in react
4. can you explain how the provider works with the react context api
5. what is a custom hook
6. how many way can we implement conditional rendering in react
*/