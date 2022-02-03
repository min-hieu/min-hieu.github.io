import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';
import Btn from './button';

const pages = [
    {
        name: "🏠 Home",
        id: ""
    },
    {
        name: "📚 Blogs",
        id: "blogs"
    },
    {
        name: "🕹 Projects",
        id: "projects"
    },
    {
        name: "🤖 About",
        id: "about"
    },
    {
        name: "📄 Publications",
        id: "publications"
    },
    {
        name: "💼 CV",
        id: "cv"
    },
]


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

const Canvas = () => {
  const canvasRef = useRef(null);
  const size = useWindowSize();
  const [angle, setAngle] = useState(0);

  const draw = (ctx,img,an) => {
    setAngle((angle + 20) % (Math.PI * 2));
    ctx.save();
    ctx.translate(100, 100);
    ctx.rotate(angle);
    ctx.drawImage(img, 100, 100);
    ctx.restore();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = size.width * 0.15 * 2;
    canvas.height = size.width * 0.3;

    const img = new Image();
    img.src = "/island.png";

    draw(ctx,img);

  }, [ size ])

  return <canvas ref={canvasRef}/>
}


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
            <Canvas className={styles.canvas} />
            <div className={styles.titleContainer}>
                <span className={styles.subtitle}>This is</span>
                <span className={styles.title}>Hieu's</span>
                <span className={styles.title}>Digital</span>
                <span className={styles.title}>Oasis</span>
            </div>
            <div className={styles.btnContainer}>
                { tabs(thisPage) }
                <Btn text="📞 Contact" cls={styles.navBtn}/>
            </div>
        </div>
   );
}
