import { NextResponse } from "next/server";
import { feeds } from "@/libs/feeds";
import { parse } from "rss-to-json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region") || "north";
  const category = searchParams.get("category") || "world";

  try {
    const feedUrls = feeds[0][region][category];

    if (!feedUrls || Object.keys(feedUrls).length === 0) {
      throw new Error("Invalid region or category");
    }

    // Get all keys (news sources) for the category
    const sources = Object.keys(feedUrls);

    // Randomly select a source
    const randomSource = sources[Math.floor(Math.random() * sources.length)];

    // Get the feed URL for the randomly selected source
    const feedUrl = feedUrls[randomSource];

    if (!feedUrl) {
      throw new Error("No feed URL found for the selected source");
    }

    const parsedData = await parse(feedUrl);
    return NextResponse.json(parsedData);
  } catch (err) {
    console.error("Error fetching rss data", err);
    return NextResponse.json(
      { error: "Internal server error", message: err.message },
      { status: 500 }
    );
  }
}
