import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { headings } from "./data";
const TabHeadings = () => {
  return (
    <TabsList className="w-full flex flex-row justify-between">
      {headings.map((heading: { value: string; label: string }) => (
        <TabsTrigger key={heading.value} value={heading.value}>
          <p className="font-semibold text-lg">{heading.label}</p>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default TabHeadings;
