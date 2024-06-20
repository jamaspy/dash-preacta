import React from "react";
import { DonutChart } from "@tremor/react";
import { dataFormatter } from "./data-formatter";

type Data = {
  value: number;
  label: string;
};

interface DoughnutChartProps {
  data: Data[];
}

export const DoughnutChart = ({ data }: DoughnutChartProps) => {
  return (
    <DonutChart
      data={data}
      variant="donut"
      valueFormatter={dataFormatter}
      onValueChange={(v) => console.log(v)}
    />
  );
};
