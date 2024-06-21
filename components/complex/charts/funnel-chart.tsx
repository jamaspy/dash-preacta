"use client";

import { Card, FunnelChart } from "@tremor/react";

const chartdata = [
  { name: "Talent Pool", value: 100 },
  { name: "Pre-Screening", value: 74 },
  {
    name: "Connected",
    value: 55,
  },
  {
    name: "Screening",
    value: 46,
  },
  {
    name: "Submissions",
    value: 40,
  },
  {
    name: "Interview 1",
    value: 37,
  },
  {
    name: "Interview 2",
    value: 32,
  },
  {
    name: "Offer",
    value: 3,
  },
  {
    name: "Hire",
    value: 1,
  },
];

export function Funnel() {
  return (
    <Card className="">
      <FunnelChart
        evolutionGradient
        gradient={false}
        color={"indigo"}
        calculateFrom="previous"
        className="h-60 w-full"
        data={chartdata}
      />
    </Card>
  );
}
