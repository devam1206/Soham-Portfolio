import React from "react";
import { cn } from "../lib/utils"; // optional utility for class merging

export function Card({ className, ...props }) {
  return (
    <div
      className={cn("rounded-2xl border border-gray-200 shadow-md bg-white", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-4", className)} {...props} />;
} 