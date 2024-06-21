"use client";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Card } from "@tremor/react";
import React from "react";

const DashboardFilters = () => {
  return (
    <Card className="w-full flex flex-row gap-8 p-2 mb-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Week starting" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Job title" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </Card>
  );
};

export default DashboardFilters;
