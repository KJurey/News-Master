"use client";

import { useState } from "react";
import { FeedItem } from "@/types/rss-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { truncateText } from "@/services/truncateText";

interface GridItemProps {
  item: FeedItem; // Replace 'any' with a more specific type if available
  image: string;
  className: string;
}

export default function GridItem({ item, image, className }: GridItemProps) {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <motion.article
        className={className}
        onClick={handleOpenModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 500, damping: 10 }}
      >
        <Card className="flex flex-col h-full">
          <CardMedia component="div" className="h-[28rem] relative">
            <Image
              src={
                // item.enclosures?.url
                (Array.isArray(item?.enclosures) && item.enclosures[0]?.url) ||
                // item.media?.thumbnail?.url
                (Array.isArray(item?.media) && item.media.thumbnail?.url) ||
                image ||
                "/newspaper.jpg"
              }
              fill={true}
              alt={item.title}
              sizes="(max-width: 768px) 10rem, (max-width: 1200px) 18rem, 28rem"
            />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h2"
              className="text-2xl font-bold text-center uppercase text-ellipsis"
            >
              {truncateText(item.title, 7)}
            </Typography>
          </CardContent>
        </Card>
      </motion.article>
      <Modal
        open={open}
        onClose={handleCloseModal}
        sx={{
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box
          className="h-[769px] w-[1080px] bg-white m-auto"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "4px",
          }}
        >
          <Box className="flex flex-col items-center h-full">
            <Box className="h-3/5 w-[600px] relative">
              <Image
                src={
                  (Array.isArray(item?.enclosures) &&
                    item.enclosures[0]?.url) ||
                  (Array.isArray(item?.media) && item.media.thumbnail?.url) ||
                  image ||
                  "/newspaper.jpg"
                }
                fill={true}
                alt={item.title}
                sizes="(max-width: 768px) 20rem, (max-width: 1200px) 28rem, 28rem"
              />
            </Box>
            <Typography
              variant="h3"
              className="text-3xl font-bold mt-4 text-center uppercase"
            >
              {item.title}
            </Typography>
            <Typography variant="body1" className="mt-4 text-xl text-ellipsis">
              {item.description ? truncateText(item.description, 40) : ""}
            </Typography>
            <Button
              variant="contained"
              className="w-72 max-w-80 h-20 mt-4 text-xl normal-case rounded-[20px]"
              href={item.url || item.link}
              target="blank"
            >
              Let&apos;s Go!
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
