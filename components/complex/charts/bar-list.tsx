import React from "react";
import { BarList, BarListProps, Card } from "@tremor/react";

export const BarListChart = ({ data, title }: BarListProps) => {
  return (
    <Card className="max-w-sm">
      <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium mb-2">
        {title}
      </span>
      <BarList data={data} className="mx-auto max-w-sm" color="violet" />
    </Card>
  );
};
