import * as React from "react";
import {useEffect, useRef} from "react";
import {motion, sync, useCycle} from "framer-motion";
import {MenuItem} from "./menuItem";
import {MenuToggle} from "./menuToggle";
import {Link} from "@chakra-ui/react";
import Image from "next/image";

const sidebar = {
    open: {
        background: "white",
        clipPath: `circle(1000px at 95% 50%)`,
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2,
        },
    },
    closed: {
        background: "white",
        clipPath: "circle(30px at 95% 50%)",
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 40,
        },
    },
};

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2},
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1},
    },
};


const height = {
    open: {
        height: '100%',
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
    closed: {
        height: '72px',
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2,
        },
    },
};

export const Navbar = ({links}) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

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
            variants={height}
        >
            <Link href="/">
                <Image
                    style={{zIndex: 6}}
                    src="/logo.svg"
                    alt="logo"
                    objectFit="cover"
                    width="200px"
                    height="80px"
                ></Image>
            </Link>
            <div className="nav_fon"></div>
            <motion.div className="nav_background" variants={sidebar}/>
            {isOpen && <motion.ul className="nav_list" variants={variants}>
                {links.map((item, index) => (
                    <MenuItem i={index} key={index} title={item.title} link={item.link} selectItem={selectItem}/>
                ))}
            </motion.ul>}
            <MenuToggle toggle={() => toggleOpen()}/>
        </motion.nav>
    );
};
