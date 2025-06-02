import { useState, useMemo, useEffect } from "react";
import { Bell, Timer } from "lucide-react";
import AnnouncementCard from "./AnnouncementCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const AnnouncementList = ({ datainfo }) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Carousel auto-play functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-play timer - advance every 5 seconds
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div>
      {/* Header */}
      {/* Carousel Section */}
      <div className=" bg-green-500 grid grid-cols-1 rounded-md p-2 w-full overflow-hidden align-middle justify-center items-center ">
        <div className="bg-blue-800 align-center items-center justify-center p-1 grid grid-cols-1">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <div className="bg-green-600 p-5 h-100 grid grid-cols-1">
              <CarouselContent>
                {/*{data.map((item) => ( */}
                {datainfo.map((announcement) => (
                  <CarouselItem key={announcement.id}>
                    <div className="bg-yellow-300 h-full rounded-md">
                      <AnnouncementCard announcement={announcement} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            {/* Navigation arrows positioned below the carousel */}
            <div className="h-1/2 flex justify-center items-center align-middle space-x-4 bg-blue-400">
              <CarouselPrevious className="text-black hover:text-gray-600" />
              <CarouselNext className="text-black hover:text-gray-600" />
            </div>
          </Carousel>
        </div>

        <div className="h-10  w-full flex justify-center items-center text-center space-x-2 bg-white">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index + 1 === current ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementList;
