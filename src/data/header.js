import { GoPersonFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { GoFileDirectory } from "react-icons/go";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "Inyoung",
        icon: <GoPersonFill />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <GoHeart />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <GoPeople />,
        src: "/developer"
    },
    {
        title: "웹디자인기능사",
        icon: <GoFileDirectory />,
        src: "/webd"
    },
    {
        title: "웹표준 사이트",
        icon: <GoFileDirectory />,
        src: "/website"
    },
    {
        title: "GSAP",
        icon: <GoFileDirectory />,
        src: "/gsap"
    },
    {
        title: "포트폴리오",
        icon: <GoFileDirectory />,
        src: "/port"
    },
];

export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]