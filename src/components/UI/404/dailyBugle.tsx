import { Box, Typography } from "@mui/material";
import DailyBugleHeader from "./dailyBugleHeader";
import DailyBugleButton from "./dailyBugleButton";

export default function DailyBugle() {
  return (
    <main className="w-full h-screen">
      <section className="flex flex-col px-[80px] pt-24">
        <Box className="flex w-full justify-between">
          <article className="border-2 border-black w-1/2 mr-2">
            <Box className="py-2">
              <Typography
                variant="h1"
                className="text-3xl font-bold text-center font-anton"
              >
                Blind Teacher
              </Typography>
              <Typography
                variant="h1"
                className="text-3xl font-bold text-center font-anton"
              >
                OPENS STUDENTS&apos; MINDS
              </Typography>
            </Box>
            <Box className="bg-black text-white text-2xl text-center">
              <Typography className="font-anton">
                Regional News: PAGE 8
              </Typography>
            </Box>
          </article>
          <article className="border-2 border-black w-1/2 ml-2">
            <Box className="py-2">
              <Typography
                variant="h1"
                className="text-3xl font-bold text-center font-anton"
              >
                2 Dozen Sunway Cars
              </Typography>
              <Typography
                variant="h1"
                className="text-3xl font-bold text-center font-anton"
              >
                DUMPED IN ATLANTIC
              </Typography>
            </Box>
            <Box className="bg-black text-white text-2xl text-center">
              <Typography className="font-anton">
                The Last Word: PAGE 20
              </Typography>
            </Box>
          </article>
        </Box>
        <span className="font-bold my-1">
          New York&apos;s Favorite Newspaper Since 1932
        </span>
        <span className="bg-black h-1 w-full"></span>
        <DailyBugleHeader />
        <span className="bg-black h-1 w-full"></span>
        <article className="w-full">
          <Box className="flex justify-between w-full">
            <Typography variant="body1" className="font-bold">
              MONDAY MORNING/Cloudy/Weather: Page 38
            </Typography>
            <Box className="flex">
              <Typography variant="body1" className="font-bold mr-8">
                www.dailybugle.com
              </Typography>
              <Typography variant="body1" className="font-bold">
                50&#162;
              </Typography>
            </Box>
          </Box>
        </article>
        <Box>
          <Typography
            variant="h1"
            className="font-bold text-[15rem] leading-none font-anton"
          >
            404: NOT FOUND! POLICE SEEK SPIDEY
          </Typography>
        </Box>
        <DailyBugleButton />
      </section>
    </main>
  );
}
