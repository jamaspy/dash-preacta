import React from "react";
import { ProgressCircle } from "@tremor/react";

interface ProgressCircleProps {
  value: number;
  size: string;
}

export const ProgressCircleChart = ({ value, size }: ProgressCircleProps) => {
  return (
    <ProgressCircle value={value} size="md">
      <span className="text-xs font-medium text-slate-700">{value}%</span>
    </ProgressCircle>
  );
};
