import React from 'react'

import Main from '../components/section/Main'
import { todayText } from '../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <Main title='추천영상' description='Welcome Intube'>
            <section id='todayPage'>
                <h2>추천 영상</h2>

                {todayText.map((today, key) => (
                    <div className='today__inner' key={key}>
                        <div className='today__thumb play__icon'>
                            <Link to={today.page}>
                                <img src={today.img} alt={today.title}/>
                            </Link>
                        </div>
                        <div className='today__text'>
                            <div className='today'>recommend!</div>
                            <h3 className='title'>
                                <Link to={today.title}> 
                                    {today.title}
                                </Link>
                            </h3>
                            <p className='desc'>{today.desc}</p>
                            <div className='info'>
                                <span className='author'>
                                    <Link to={'/channel/${todayText[0].author}'}>
                                        {today.author}
                                    </Link>
                                </span>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today