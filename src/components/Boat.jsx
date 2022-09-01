import React from 'react'
import { useSpring, animated, easings } from 'react-spring';

export default function Boat() {
  const transform = useSpring({
    loop: { reverse: true },
    from: {
      rotateZ: -10,
      width: "5vw",
      left: "8vw",
      top: "10vw",
      position: "absolute",
    },
    to: {
      rotateZ: 10
    },
    config: {
      duration: 1000,
      easing: easings.easeInQuad,
    }
  })
  return <animated.img src='/canoe.png' style={transform} />
}

