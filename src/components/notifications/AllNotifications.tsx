import { FiPackage } from "react-icons/fi"; // You can replace this with your own icon
import { Checkbox } from "../ui/checkbox";

const notifications = {
  Today: [
    {
      id: 1,
      title: "Complaint Acknowledged – Pickup Scheduled",
      message:
        "Dear Customer, Your product complaint has been accepted. Our rider will collect the item tomorrow at 10:00 AM. The replacement or resolved product will be provided within 3 working days. Thank you for your patience and for choosing BIA Serve.",
    },
    {
      id: 2,
      title: "Complaint Acknowledged – Pickup Scheduled",
      message:
        "Dear Customer, Your product complaint has been accepted. Our rider will collect the item tomorrow at 10:00 AM. The replacement or resolved product will be provided within 3 working days. Thank you for your patience and for choosing BIA Serve.",
    },
  ],
  Yesterday: [
    {
      id: 3,
      title: "Complaint Acknowledged – Pickup Scheduled",
      message:
        "Dear Customer, Your product complaint has been accepted. Our rider will collect the item tomorrow at 10:00 AM. The replacement or resolved product will be provided within 3 working days. Thank you for your patience and for choosing BIA Serve.",
    },
    {
      id: 4,
      title: "Complaint Acknowledged – Pickup Scheduled",
      message:
        "Dear Customer, Your product complaint has been accepted. Our rider will collect the item tomorrow at 10:00 AM. The replacement or resolved product will be provided within 3 working days. Thank you for your patience and for choosing BIA Serve.",
    },
    {
      id: 5,
      title: "Complaint Acknowledged – Pickup Scheduled",
      message:
        "Dear Customer, Your product complaint has been accepted. Our rider will collect the item tomorrow at 10:00 AM. The replacement or resolved product will be provided within 3 working days. Thank you for your patience and for choosing BIA Serve.",
    },
    {
      id: 6,
      title: "Complaint Acknowledged – Pickup Scheduled",
      message:
        "Dear Customer, Your product complaint has been accepted. Our rider will collect the item tomorrow at 10:00 AM. The replacement or resolved product will be provided within 3 working days. Thank you for your patience and for choosing BIA Serve.",
    },
  ],
};

const AllNotificationList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-center mb-8">Notification</h1>

      {/* Sections */}
      {Object.entries(notifications).map(([section, items]) => (
        <div key={section} className="mb-6">
          <section className="flex items-center gap-4 my-3">
            <h2 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
              {section}
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </section>

          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 border rounded-md bg-white shadow-sm"
              >
                <div>
                  <Checkbox id="terms-2" className="w-7 h-7" />
                </div>
                {/* Icon */}
                <div className="mt-1 bg-[#E6F1F1] w-20 h-12 grid place-items-center text-teal-500">
                  <FiPackage size={24} />
                </div>

                {/* Text */}
                <div>
                  <p className="font-medium text-2xl text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-md my-2">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNotificationList;
