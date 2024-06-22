import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import DashboardFilters from "../../filters/dashboard-filters/dashboard-filters";
import { Funnel, ProgressCircleCard } from "../../charts";
import { Card } from "@tremor/react";
import { ArrowRight } from "lucide-react";

export const SummaryDashboard = () => {
  const boxData = [
    { label: "Talent Pool", value: 50 },
    { label: "Pre-Screening", value: 50 },
    { label: "Connected", value: 50 },
    { label: "Screening", value: 50 },
    { label: "Submissions", value: 50 },
    { label: "Interview 1", value: 50 },
    { label: "Interview 2", value: 50 },
    { label: "Offer", value: 50 },
    { label: "Hire", value: 50 },
  ];

  return (
    <main>
      <DashboardFilters />
      <section className="flex flex-row gap-2 w-full">
        <div className="grid grid-cols-2 gap-2 max-w-md">
          <ProgressCircleCard
            value={50}
            size="lg"
            label="Talent Pool to Pre-Screening"
          />
          <ProgressCircleCard
            value={50}
            size="lg"
            label="Short Listed to Submission"
          />
          <ProgressCircleCard
            value={29}
            size="lg"
            label="Interviewed to Offer"
          />
          <ProgressCircleCard value={100} size="lg" label="Offer to Hire" />
        </div>
        <div className="w-full flex-1">
          <Funnel />
        </div>
      </section>
      <Card className="w-full p-2 pl-4 mt-4">
        <p className="font-semibold">6th June 2024</p>
      </Card>
      <section className="flex flex-1 flex-row gap-2 mt-4">
        {boxData.map((box, index) => (
          <span
            key={box.label}
            className="flex flex-1 flex-row items-center gap-2"
          >
            <Card className="px-2 py-6">
              <p className="text-xs text-center font-semibold text-cyan-700 dark:text-cyan-400">
                {box.label}
              </p>
              <p className="text-md text-center">{box.value}</p>
            </Card>
            <ArrowRight
              className={`${
                boxData.length - 1 === index ? "invisible" : "visible"
              }`}
            />
          </span>
        ))}
      </section>
      <Card className="w-full p-2 pl-4 mt-8">
        <p className="font-semibold">Lifetime</p>
      </Card>
      <section className="flex flex-1 flex-row gap-2 mt-4">
        {boxData.map((box, index) => (
          <span
            key={box.label}
            className="flex flex-1 flex-row items-center gap-2"
          >
            <Card className="px-2 py-6">
              <p className="text-xs text-center font-semibold text-cyan-700 dark:text-cyan-400">
                {box.label}
              </p>
              <p className="text-md text-center">{box.value}</p>
            </Card>
            <ArrowRight
              className={`${
                boxData.length - 1 === index ? "invisible" : "visible"
              }`}
            />
          </span>
        ))}
      </section>
    </main>
  );
};
