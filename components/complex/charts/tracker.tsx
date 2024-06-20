import React from "react";
import { Card, Color, Tracker } from "@tremor/react";

interface Tracker {
  color: Color;
  tooltip: string;
}

interface ProgressTrackerProps {
  data: Tracker[];
  title?: string;
  description?: string;
}

export const ProgressTracker = ({
  data,
  title,
  description,
}: ProgressTrackerProps) => {
  return (
    <Card className="mx-auto max-w-md">
      <p className="text-tremor-default flex items-center justify-between">
        <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          {title}
        </span>
        <span className="text-tremor-content dark:text-dark-tremor-content">
          {description}
        </span>
      </p>
      <Tracker data={data} className="mt-2" />
    </Card>
  );
};
