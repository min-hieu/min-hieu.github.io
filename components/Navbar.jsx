import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';
import Btn from './button';
import Boat from './Boat';

const pages = [
    {
      name: "🏠 Home",
      id: "/"
    },
    {
      name: "📚 Blogs",
      id: "/blogs"
    },
    {
      name: "🕹 Projects",
      id: "/projects"
    },
    {
      name: "🤖 About",
      id: "/about"
    },
    {
      name: "📄 Publications",
      id: "/publications"
    },
    {
      name: "💼 Resume",
      id: "/resume"
    },
]

export default function Navbar({ thisPage }){

    const router = useRouter();

    const handleClick = (path) =>
        router.push(path);

    const tabs = (thisPage) => (
        pages.map((page,idx) => (
            <Btn text={page.name}
                key={idx}
                click={()=>handleClick(page.id)}
                cls={
                    thisPage == page.id ? styles.navPressed : styles.navBtn
                }
            />
        ))
    );

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.subtitle}>This is</span>
                <span className={styles.title}>Hieu's</span>
                <span className={styles.title}>Digital</span>
                <span className={styles.title}>Oasis</span>
            </div>
            <Boat />
            <div className={styles.btnContainer}>
                { tabs(thisPage) }
                <Btn text="📞 Contact" cls={styles.navBtn}/>
            </div>
        </div>
   );
}
