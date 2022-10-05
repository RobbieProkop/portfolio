import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useRef } from "react";
import BackgroundCircles from "./BackgroundCircles";
import Box from "./Box";
import { PageInfo } from "../typings";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

// this comes from a code pen https://codesandbox.io/s/framer-motion-scroll-velocity-r1dy4u?from-embed=&file=/src/styles.css:2516-2898
const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const prevT = useRef<number>(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    //used to change the scroll direction

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};
type Props = {
  pageInfo: PageInfo;
};
const Hero = ({ pageInfo }: Props) => {
  const words = [``];
  return (
    <div className="h-screen relative top-0 z-1 max-w-7xl mx-auto">
      <div className="absolute w-full mt-10">
        <div className="flex items-center justify-center h-full">
          <Box />
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 2.5,
          duration: 2,
        }}
        className="name h-full flex flex-col justify-center items-center"
      >
        <div className="line animate:pulse"></div>
        <h1>Hi, I'm {pageInfo?.name}</h1>

        <div className="line"></div>

        <ParallaxText baseVelocity={-5}>{pageInfo?.role}</ParallaxText>
        <div className="line"></div>
      </motion.div>
    </div>
  );
};
export default Hero;
