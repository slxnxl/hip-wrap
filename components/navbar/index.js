import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
//import { useDimensions } from "./use-dimensions";
import { MenuItem } from "./menuItem";
import { MenuToggle } from "./menuToggle";
import { Link } from "@chakra-ui/react";
import Image from "next/image";

const sidebar = {
  open: (height = 1000) => ({
    background: "white",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    background: "transparent",
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navbar = ({ links }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const height = isOpen ? "100%" : "72px";

  useEffect(() => {
    const root = document.documentElement;

    if (isOpen) {
      document.body.classList.add("scroll");
      root.classList.add("scroll");
    } else {
      //document.body.className = document.body.className.replace("scroll","");
      document.body.classList.remove("scroll");
      root.classList.remove("scroll");
    }
  }, [isOpen]);


  const selectItem = () => {
    console.log(isOpen);
    
    toggleOpen()
  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={200}
      ref={containerRef}
      className="nav"
      style={{ height: `${height}` }}
    >
      <Link href="/">
        <Image
          style={{ zIndex: 6 }}
          src="/logo.svg"
          alt="logo"
          objectFit="cover"
          width="200px"
          height="80px"
        ></Image>
      </Link>
      <motion.div className="nav_background" variants={sidebar} />
      {isOpen && <motion.ul className="nav_list" variants={variants}>
        {links.map((item, index) => (
          <MenuItem i={index} key={index} title={item.title} link={item.link} selectItem={selectItem}/>
        ))}
      </motion.ul>}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
