import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome /></a>
            <a href="#about"><AiOutlineUser /></a>
            <a href="#experience"><BiBook /></a>
            <a href="#services"><RiServiceLine /></a>
            <a href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Nav;