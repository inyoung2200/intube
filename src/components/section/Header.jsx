import React from 'react'

import { GoPersonFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { GoFileDirectory } from "react-icons/go";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
            <a href='/'>
                <em aria-hidden='true'></em>
                <span>In<br/>Tube</span>
            </a>
        </h1>

        <nav className='header__menu'>
            <ul className='menu'>
                <li className='active'>
                    <a href='/'> <GoPersonFill/>inyoung</a>
                </li>
                <li>
                    <a href='/today'><GoHeart/>추천 영상</a>
                </li>
                <li>
                    <a href='/developer'><GoPeople/>추천 개발자</a>
                </li>
                <li>
                    <a href='/webd'><GoFileDirectory/>웹디자인기능사</a>
                </li>
                <li>
                    <a href='/website'><GoFileDirectory/>웹표준 사이트</a>
                </li>
                <li>
                    <a href='/gsap'><GoFileDirectory/>GSAP Parallax</a>
                </li>
                <li>
                    <a href='/port'><GoFileDirectory/>포트폴리오 사이트</a>
                </li>
                <li>
                    <a href='/youtube'><GoFileDirectory/>유튜브 클론 사이트</a>
                </li>
            </ul>
            <ul className='keyword'>
                <li>
                    <a href='/search/webstoryboy'>webstoryboy</a>
                </li>
                <li>
                    <a href='/search/html'>HTML</a>
                </li>
                <li>
                    <a href='/search/css'>CSS</a>
                </li>
                <li>
                    <a href='/search/javascript'>JavaScript</a>
                </li>
                <li>
                    <a href='/search/react.js'>React.js</a>
                </li>
                <li>
                    <a href='/search/vue.js'>Vue.js</a>
                </li>
                <li>
                    <a href='/search/next.js'>Next.js</a>
                </li>
                <li>
                    <a href='/search/node.js'>Node.js</a>
                </li>
                <li>
                    <a href='/search/sql'>SQL</a>
                </li>
                <li>
                    <a href='/search/React Portfolio'>portfolio</a>
                </li>
                <li>
                    <a href='/search/NewJeans'>music</a>
                </li>
            </ul>
        </nav>

        <div className='header__sns'>
            <ul>
                <li>
                    <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                        <AiFillYoutube />
                    </a>
                </li>
                <li>
                    <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                        <AiOutlineCodepen />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                        <AiOutlineInstagram />
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header