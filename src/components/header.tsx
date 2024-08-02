"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  Home,
  Public,
  SportsSoccer,
  AttachMoney,
  Business,
} from "@mui/icons-material";
import { NavItemProps } from "@/types/header-types";

const MotionTypography = motion(Typography);

const NavItem: React.FC<NavItemProps> = ({ text, icon, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <MotionTypography
      variant="h5"
      className="font-bold text-black text-3xl cursor-pointer relative"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
      >
        {text}
      </motion.span>
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </MotionTypography>
  );
};

export default function Header() {
  const router = useRouter();
  const [category, setCategory] = useState<string>("");

  const handleNavigate = (newCategory: string) => {
    setCategory(newCategory);
    const categoryParams = `category=${encodeURIComponent(newCategory)}`;
    router.push(`/result?region=north&${categoryParams}`);
  };

  return (
    <AppBar className="bg-white shadow-none h-24">
      <Toolbar className="flex flex-wrap justify-between items-center px-[80px] h-full">
        <Box className="flex flex-wrap flex grow">
          <NavItem
            text="News Master"
            icon={<Home fontSize="large" />}
            onClick={() => router.push("/")}
          />
        </Box>
        <Box className="flex flex-wrap flex grow justify-evenly">
          <NavItem
            text="World"
            icon={<Public fontSize="large" />}
            onClick={() => handleNavigate("world")}
          />
          <NavItem
            text="Sports"
            icon={<SportsSoccer fontSize="large" />}
            onClick={() => handleNavigate("sports")}
          />
          <NavItem
            text="Finance"
            icon={<AttachMoney fontSize="large" />}
            onClick={() => handleNavigate("finance")}
          />
          <NavItem
            text="Business"
            icon={<Business fontSize="large" />}
            onClick={() => handleNavigate("business")}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
