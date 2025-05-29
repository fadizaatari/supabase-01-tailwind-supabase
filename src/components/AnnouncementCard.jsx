import { Calendar, AlertCircle, Info, CheckCircle, Clock } from "lucide-react";

const AnnouncementCard = ({ announcement }) => {
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "high":
        return {
          border: "border-red-200",
          bg: "bg-red-50",
          icon: AlertCircle,
          iconColor: "text-red-500",
          badge: "bg-red-100 text-red-800",
        };
      case "medium":
        return {
          border: "border-yellow-200",
          bg: "bg-yellow-50",
          icon: Clock,
          iconColor: "text-yellow-500",
          badge: "bg-yellow-100 text-yellow-800",
        };
      case "low":
        return {
          border: "border-blue-200",
          bg: "bg-blue-50",
          icon: Info,
          iconColor: "text-blue-500",
          badge: "bg-blue-100 text-blue-800",
        };
      default:
        return {
          border: "border-gray-200",
          bg: "bg-gray-50",
          icon: CheckCircle,
          iconColor: "text-gray-500",
          badge: "bg-gray-100 text-gray-800",
        };
    }
  };

  const styles = getPriorityStyles(announcement.priority);
  const IconComponent = styles.icon;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`${styles.bg} ${styles.border}  rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 h-full w-full `}
    >
      <p className="text-gray-700 leading-relaxed mb-4">
        {announcement.description}
      </p>

      {announcement.author && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            By{" "}
            <span className="font-medium text-gray-700">
              {announcement.author}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;
