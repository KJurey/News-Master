"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFeed } from "@/context/feedContext";
import { v4 as uuidv4 } from "uuid";
import GridItem from "@/components/UI/Feed/gridItem";
import { FeedData } from "@/types/rss-types";
import { Skeleton } from "@mui/material";

interface categoryData {
  [category: string]: FeedData;
}

export default function ResultPage() {
  const { setCategoryData } = useFeed();
  const { categoryData } = useFeed();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState<string[]>([]);
  const [region, setRegion] = useState<string>("");
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Create an array of promises for each category
      const fetchPromises = categories.map((cat) =>
        fetch(
          `/api/rss-api?region=${region}&category=${cat.toLowerCase()}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
      );

      // Wait for all fetches to complete
      const results = await Promise.all(fetchPromises);

      // Create an object with category names as keys and fetched data as values
      const categoryData: categoryData = {};
      categories.forEach((cat, index) => {
        categoryData[cat.toLowerCase()] = results[index] as FeedData;
      });

      setCategoryData(categoryData);
      setIsLoading(false);
      return categoryData;
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (categories.length > 0 && region) {
      fetchData();
    }
  }, [categories, region]);

  useEffect(() => {
    const categoryParams = searchParams.getAll("category");
    const regionParam = searchParams.get("region") || "";
    setCategories(categoryParams);
    setRegion(regionParam);
  }, [searchParams]);

  useEffect(() => {
    const fetchImages = async () => {
      const newImages: { [key: string]: string } = {};

      for (const category of categories) {
        try {
          const response = await fetch(
            `/api/pexels?query=${encodeURIComponent(category)}`
          );
          const data = await response.json();
          if (data.imageUrl) {
            newImages[category] = data.imageUrl;
          }
        } catch (error) {
          console.error(`Error fetching image for ${category}:`, error);
        }
      }

      setImages(newImages);
    };

    if (categories.length > 0) {
      fetchImages();
    }
  }, [categories]);

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  const gridItems = [
    { start: 0, end: 1, className: "col-span-2 row-span-2" },
    { start: 1, end: 2, className: "col-start-3 col-span-1 row-span-1" },
    { start: 2, end: 3, className: "col-start-4 col-span-1 row-span-1" },
    {
      start: 3,
      end: 4,
      className: "col-start-3 col-span-1 row-start-2 row-span-1",
    },
    {
      start: 4,
      end: 5,
      className: "col-start-4 col-span-1 row-start-2 row-span-1",
    },
    {
      start: 5,
      end: 6,
      className: "col-start-1 col-span-1 row-start-3 row-span-1",
    },
    {
      start: 6,
      end: 7,
      className: "col-start-2 col-span-1 row-start-3 row-span-1",
    },
    {
      start: 7,
      end: 8,
      className: "col-start-3 col-span-1 row-start-3 row-span-1",
    },
    {
      start: 8,
      end: 9,
      className: "col-start-4 col-span-1 row-start-3 row-span-1",
    },
  ];

  const SkeletonGridItem = ({ className }: { className: string }) => (
    <div className={className}>
      <Skeleton variant="rectangular" width="100%" height="60%" />
      <Skeleton variant="text" className="text-xl" />
      <Skeleton variant="text" className="text-xl" />
      <Skeleton variant="text" className="text-xl" />
    </div>
  );

  return (
    <main className="h-screen w-full">
      <section className="flex flex-col h-full w-full px-[80px] pt-24 pb-8">
        {isLoading ? (
          <section className="grid grid-rows-3 grid-cols-4 gap-x-5 gap-y-4 h-full w-full mb-4">
            {gridItems.map((item, index) => (
              <SkeletonGridItem key={index} className={item.className} />
            ))}
          </section>
        ) : (
          Object.entries(categoryData).map(([category, data]) => (
            <section
              key={uuidv4()}
              className="grid grid-rows-3 grid-cols-4 gap-x-5 gap-y-4 h-full w-full mb-4"
            >
              {gridItems.map((item, index) => (
                <GridItem
                  key={uuidv4()}
                  item={data.items[item.start]}
                  image={images[category]}
                  className={item.className}
                />
              ))}
            </section>
          ))
        )}
      </section>
    </main>
  );
}
