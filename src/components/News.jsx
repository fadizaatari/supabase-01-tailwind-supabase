import Header from "./Header";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel
      // Other carousel options, e.g., loop: true
      opts={{ loop: true }}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="w-full h-full bg-white border border-transparent text-black shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl font-semibold">{index + 1} </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const News = () => {
  return (
    <div>
      <div className="left-0 h-screen w-screen flex-col justify-center items-center bg-black ">
        <Header />
        <div className="bg-red-400 justify-center align-middle items-center p-20 flex flex-col">
          <CarouselDemo />
        </div>
      </div>
    </div>
  );
};

export default News;
