"use client";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DailyBugleButton() {
  const router = useRouter();
  return (
    <motion.article
      className="flex justify-center items-center bg-red-500 h-14 mb-4 cursor-pointer"
      onClick={() => router.push("/")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      <Typography variant="h2" className="font-anton text-4xl text-white">
        THE DAILY BUGLE ALWAYS GIVE YOU MORE - EXCLUSIVE STORY INSIDE!
      </Typography>
    </motion.article>
  );
}
