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

const AnnouncementList = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Sample announcements data
  const announcements = [
    {
      id: 1,
      title: "System Maintenance Scheduled",
      description:
        "We will be performing scheduled maintenance on our servers this weekend from 2:00 AM to 6:00 AM EST. During this time, some services may be temporarily unavailable. We apologize for any inconvenience and appreciate your patience.",
      priority: "high",
      date: "2024-05-28",
      author: "IT Team",
      category: "Maintenance",
    },
    {
      id: 2,
      title: "New Feature Release: Enhanced Dashboard",
      description:
        "We're excited to announce the launch of our enhanced dashboard with improved analytics, better performance monitoring, and a more intuitive user interface. Check out the new features in your account settings.",
      priority: "medium",
      date: "2024-05-25",
      author: "Product Team",
      category: "Feature Update",
    },
    {
      id: 3,
      title: "Security Update Available",
      description:
        "A new security update is now available for all users. This update includes important security patches and performance improvements. Please update your application at your earliest convenience.",
      priority: "high",
      date: "2024-05-24",
      author: "Security Team",
      category: "Security",
    },
    {
      id: 4,
      title: "Holiday Schedule Announcement",
      description:
        "Please note our updated holiday schedule for the upcoming month. Our support team will have limited availability during these dates. For urgent matters, please use our emergency contact information.",
      priority: "low",
      date: "2024-05-20",
      author: "HR Department",
      category: "General",
    },
    {
      id: 5,
      title: "Training Session: Best Practices",
      description:
        "Join us for an interactive training session covering best practices for using our platform effectively. This session will include live demonstrations, Q&A, and practical tips from our expert team.",
      priority: "medium",
      date: "2024-05-18",
      author: "Training Team",
      category: "Training",
    },
    {
      id: 6,
      title: "Community Forum Launch",
      description:
        "We're thrilled to introduce our new community forum where users can connect, share experiences, ask questions, and collaborate. Join the conversation and be part of our growing community!",
      priority: "low",
      date: "2024-05-15",
      author: "Community Team",
      category: "Community",
    },
  ];

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
    <div
      className="align-middle items-center flex flex-col  p-5 rounded-md
     xl:bg-amber-100 xl:w-500
     lg:bg-blue-400 lg:w-500
     md:bg-amber-800 md:w-full
     sm:bg-green-300 sm:w-full sm:h-300
     bg-gray-800 w-full h-full
     
     
    "
    >
      {/* Header */}
      {/* Carousel Section */}
      <div className=" bg-green-500 w-full h-full flex flex-col p-1 rounded-md">
        <div className="h-full w-full bg-blue-800 align-center items-start justify-center p-1 flex">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <div className="bg-green-800 flex p-5  w-full flex-col">
              <CarouselContent>
                {announcements.slice(0, 4).map((announcement) => (
                  <CarouselItem key={announcement.id}>
                    <div className="bg-yellow-300 flex h-full w-full p-10"></div>
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

        <div className="h-10 flex justify-center items-center text-center space-x-2 bg-white">
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
