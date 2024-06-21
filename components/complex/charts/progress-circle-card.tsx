"use client";
import React from "react";
import { Card } from "@tremor/react";
import { ProgressCircleChart } from "./progress-circle";

interface ProgressCircleCardProps {
  value: number;
  size?: string;
  currencyActual?: number;
  currencyTotal?: number;
  label: string;
}

export const ProgressCircleCard = ({
  value,
  size = "md",
  currencyActual,
  currencyTotal,
  label,
}: ProgressCircleCardProps) => {
  return (
    <Card className="max-w-xs flex items-center justify-center">
      <div className="flex justify-start space-x-2 items-center">
        <ProgressCircleChart value={value} size={size} />
        <div>
          {currencyActual && currencyTotal && (
            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              ${currencyActual}/${currencyTotal} ({value}%)
            </p>
          )}
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {label}
          </p>
        </div>
      </div>
    </Card>
  );
};
