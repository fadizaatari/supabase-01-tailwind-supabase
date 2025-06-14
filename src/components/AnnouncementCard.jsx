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
      className={`${styles.bg} ${styles.border} grid grid-cols-1 rounded-md p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <IconComponent className={`w-6 h-6 ${styles.iconColor}`} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {announcement.title}
            </h3>
            <div className="flex items-center space-x-4 mt-1">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.badge}`}
              >
                {announcement.priority.charAt(0).toUpperCase() +
                  announcement.priority.slice(1)}{" "}
                Priority
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(announcement.date)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        {announcement.description}
      </p>
    </div>
  );
};

export default AnnouncementCard;
