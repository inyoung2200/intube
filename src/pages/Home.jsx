import React from 'react'

import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/videoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer';
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main title='Home' description='Welcome Intube'>
            <Today videos={todayText} id='today' />
            <Developer videos={developerText} title="추천 개발자" id='developer' />
            <VideoSlider videos={webdText} title='웹디자인기능사' id='webd'/>
            <VideoSlider videos={websiteText} title='웹표준 사이트' id='website'/>
            <VideoSlider videos={gsapText} title='GSAP' id='gsap'/>
            <VideoSlider videos={portfolioText} title='포트폴리오 사이트' id='portfolio'/>
            <VideoSlider videos={youtubeText} title='유튜브' id='youtube'/>
        </Main>
    )
}

export default Home