import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export const BasicCard = ({
  title,
  number,
}: {
  title: string;
  number: string;
}) => {
  return (
    <Card className="inline-block text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle>{number}</CardTitle>
      </CardContent>
    </Card>
  );
};
