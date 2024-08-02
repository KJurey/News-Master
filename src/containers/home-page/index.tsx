"use client";

import {
  Typography,
  Button,
  Box,
  Chip,
  Modal,
  MenuItem,
  Select,
  SelectChangeEvent,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  FormControl,
  InputLabel,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import World from "@/components/UI/Icons/world";
import Business from "@/components/UI/Icons/business";
import Sports from "@/components/UI/Icons/sports";
import Finance from "@/components/UI/Icons/finance";
import Science from "@/components/UI/Icons/science";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState<string>("north");
  const [category, setCategory] = useState<string[]>([]);
  const [categoryString, setCategoryString] = useState<string[]>([]);
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 1000); // Change category every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = () => {
    const regionParam = `region=${encodeURIComponent(region)}`;
    const categoryParams = category
      .map((c) => `category=${encodeURIComponent(c)}`)
      .join("&");
    router.push(`/result?${regionParam}&${categoryParams}`);
  };

  const actions = [
    { icon: <World />, name: "World", value: "world" },
    { icon: <Business />, name: "Business", value: "business" },
    { icon: <Sports />, name: "Sports", value: "sports" },
    { icon: <Finance />, name: "Finance", value: "finance" },
    { icon: <Science />, name: "Science & Tech", value: "science" },
  ];

  const handleActionClick = (actionName: string, value: string) => {
    // Save the value associated with the clicked action
    if (!category.includes(value)) {
      // Add the action to the state
      setCategory((prevCategory) => [...prevCategory, value]);
      setCategoryString((prevCategoryString) => [
        ...prevCategoryString,
        actionName,
      ]);
    }
  };

  const handleDeleteChip = (chipToDelete: string) => {
    setCategory((prevCategories) =>
      prevCategories.filter((category) => category !== chipToDelete)
    );
    setCategoryString((prevCategoryStrings) => {
      const index = category.indexOf(chipToDelete);
      return prevCategoryStrings.filter((_, i) => i !== index);
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCategory([]);
    setCategoryString([]);
  };
  const handleClickRegion = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  const categories = ["world", "business", "science", "finance", "sports"];

  return (
    <main className="h-screen w-screen">
      <section className="flex items-center justify-between h-full w-full px-[80px]">
        <article className="flex flex-col max-w-[600px] h-[450px] items-center justify-between">
          <Typography variant="h3" className="text-black font-bold text-5xl">
            The stories that you are interested in, the way you like it, at any
            moment about{" "}
            <AnimatePresence>
              <motion.span
                key={categories[index]}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                className="ml-4 absolute w-fit overflow-hidden"
              >
                {categories[index]}
              </motion.span>
            </AnimatePresence>
          </Typography>
          <Typography variant="body1" className="text-black text-2xl">
            Look up for relevant articles and news from thousands of sources in
            one place.
          </Typography>
          <Button
            variant="contained"
            className="w-96 h-24 rounded-[20px] text-3xl normal-case bg-blue-700"
            onClick={handleOpen}
          >
            Get started
          </Button>
          <Typography variant="body1" className="text-black text-2xl">
            And the best, for <b>free</b>
          </Typography>
        </article>
        <Image
          src="/news-master.png"
          width={500}
          height={571}
          alt="Picture of News Master Mascot"
          className="w-[500px] h-[571px]"
        />
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box
          className="h-[520px] w-[800px] bg-white m-auto"
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
          <Box className="flex flex-col justify-around items-center h-full">
            <Typography
              variant="h3"
              className="text-3xl font-bold self-start uppercase"
            >
              Select your feed
            </Typography>
            <Box className="flex h-full">
              <Box className="w-1/2">
                <Box className="flex flex-wrap items-center">
                  <Box className="h-[35px] w-[40px]" />
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    icon={<SpeedDialIcon />}
                    direction="right"
                    className="self-start absolute"
                    sx={{
                      "& .MuiButtonBase-root": {
                        height: "10px",
                        width: "35px",
                      },
                    }}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() =>
                          handleActionClick(action.name, action.value)
                        }
                      />
                    ))}
                  </SpeedDial>
                  {category.map((category) => (
                    <Chip
                      key={category}
                      label={category}
                      onDelete={() => handleDeleteChip(category)}
                      className="text-xl italic mt-4"
                    />
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  className="text-xl pr-4 mt-2 text-justify"
                >
                  In the constant evolution landscape of{" "}
                  <b>
                    {categoryString.map((cat, index) => (
                      <span key={index}>{`${cat}, `}</span>
                    ))}
                  </b>
                  information consumption, news has undergone a radical
                  transformation. With the advent of digital platforms and
                  social media, the way we access and engage with news has
                  shifted dramatically.
                </Typography>
              </Box>
              <Box className="flex flex-col justify-between">
                <Box className="flex">
                  <FormControl className="">
                    <InputLabel id="time-frame-helper-label">Region</InputLabel>
                    <Select
                      labelId="select-region-label"
                      id="select-region"
                      value={region}
                      defaultValue="North America"
                      label="Region"
                      onChange={handleClickRegion}
                    >
                      <MenuItem value="north">North America</MenuItem>
                      <MenuItem value="latin">Latin America</MenuItem>
                      <MenuItem value="europe">Europe</MenuItem>
                      <MenuItem value="asia">Asia</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {region === "north" ? (
                  <Image
                    src="/statue-of-liberty.jpg"
                    width={400}
                    height={400}
                    alt="Statue of Liberty"
                    className="mb-4"
                  />
                ) : region === "latin" ? (
                  <Image
                    src="/teotihuacan.jpg"
                    width={400}
                    height={400}
                    alt="Statue of Liberty"
                    className="mb-4"
                  />
                ) : region === "europe" ? (
                  <Image
                    src="/london.jpg"
                    width={400}
                    height={400}
                    alt="Statue of Liberty"
                    className="mb-4"
                  />
                ) : region === "asia" ? (
                  <Image
                    src="/asia.jpg"
                    width={400}
                    height={400}
                    alt="Statue of Liberty"
                    className="mb-4"
                  />
                ) : (
                  ""
                )}
              </Box>
            </Box>
            <Button
              variant="contained"
              className="w-72 max-w-80 h-20 text-xl normal-case rounded-[20px]"
              disabled={category.length === 0}
              onClick={handleNavigate}
            >
              Let&apos;s Go!
            </Button>
          </Box>
        </Box>
      </Modal>
    </main>
  );
}
