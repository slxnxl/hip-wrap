import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i , title, link, selectItem}) => {
  return (
    <motion.li
      className="nav_item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button onClick={() => selectItem()} colorScheme='black' variant='link' className={"menu-button"}><Link href={link}>{title}</Link></Button>
    </motion.li>
  );
};
