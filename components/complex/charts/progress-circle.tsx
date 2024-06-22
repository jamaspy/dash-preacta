import React from "react";
import { ProgressCircle } from "@tremor/react";

interface ProgressCircleProps {
  value: number;
  size: string;
}

export const ProgressCircleChart = ({
  value,
  size = "md",
}: ProgressCircleProps) => {
  return (
    <ProgressCircle value={value} size={"md"} color="indigo">
      <span className="text-xs font-medium text-slate-700">{value}%</span>
    </ProgressCircle>
  );
};
