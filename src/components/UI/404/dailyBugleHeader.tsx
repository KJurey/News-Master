import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Parallelogram: React.FC<{
  width: string;
  backgroundColor: string;
  children?: React.ReactNode;
}> = ({ width, backgroundColor, children }) => (
  <Box
    sx={{
      "--p": "50px",
      width,
      height: "150px",
      backgroundColor,
      clipPath: "polygon(var(--p) 0,100% 0,calc(100% - var(--p)) 100%,0 100%)",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
    }}
    className="i"
  >
    <div className="flex justify-center items-center w-full">{children}</div>
  </Box>
);

const DailyBugleHeader = () => (
  <article className="w-full relative">
    <Box
      className="flex justify-between my-2 relative"
      sx={{ height: "150px" }}
    >
      <Box
        className="bg-red-800 text-white w-[50%] flex items-center justify-start pl-16"
        sx={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          className="font-noticia font-bold text-9xl italic uppercase"
          sx={{
            textShadow: "#28282B 8px 2px",
          }}
        >
          Daily
        </Typography>
      </Box>
      <Parallelogram width="230px" backgroundColor="#333333">
        <Image
          height={180}
          width={180}
          src={"/daily-bugle.png"}
          alt="Daily bugle Logo"
        />
      </Parallelogram>
      <Box
        className="bg-red-800 text-white w-[50%] flex items-center justify-end pr-16"
        sx={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          className="font-noticia font-bold text-9xl italic uppercase"
          sx={{
            textShadow: "#28282B 8px 2px",
          }}
        >
          Bugle
        </Typography>
      </Box>
    </Box>
  </article>
);

export default DailyBugleHeader;
