"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { FeedData } from "@/types/rss-types";

interface CategoryData {
  [category: string]: FeedData;
}

interface FeedContextType {
  categoryData: CategoryData | null;
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryData | null>>;
}

const FeedContext = createContext<FeedContextType | undefined>(undefined);

export function FeedProvider({ children }: { children: ReactNode }) {
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);

  return (
    <FeedContext.Provider value={{ categoryData, setCategoryData }}>
      {children}
    </FeedContext.Provider>
  );
}

export function useFeed() {
  const context = useContext(FeedContext);
  if (context === undefined) {
    throw new Error("useFeed must be used within a FeedProvider");
  }
  return context;
}
