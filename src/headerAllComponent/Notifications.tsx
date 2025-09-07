// NotificationPanel.tsx
import Modal from "@/modal/Modal";
import { PackageCheck } from "lucide-react";
// import { MdClose } from "react-icons/md";

const notifications = [
  {
    title: "The driver is on the way!",
    message: "We’ve scheduled a pickup for June 24 at 10:00 AM.",
  },
  {
    title: "The driver is on the way!",
    message: "We’ve scheduled a pickup for June 24 at 10:00 AM.",
  },
  {
    title: "The driver is on the way!",
    message: "We’ve scheduled a pickup for June 24 at 10:00 AM.",
  },
  {
    title: "The driver is on the way!",
    message: "We’ve scheduled a pickup for June 24 at 10:00 AM.",
  },
  {
    title: "Delivered successfully!",
    message: "Your parcel was received by Frank at 3:42 PM.",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function Notification({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white max-w-md mx-auto border rounded-lg p-6 space-y-4 font-dm-sans">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-teal-800">Notification</h2>
        </div>

        <div className="space-y-3">
          {notifications.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3  rounded-md">
              <div className="p-2 bg-teal-100 rounded-md">
                <PackageCheck className="w-5 h-5 text-teal-700" />
              </div>
              <div>
                <p className="text text-black">{item.title}</p>
                <p className=" text-gray-400">{item.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-center">
          <button className="text-sm text-gray-700 font-medium  gap-1 hover:underline">
            See All →
          </button>
        </div>
      </div>
    </Modal>
  );
}
