interface HeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

import Modal from "@/modal/Modal";
import { RequestCard } from "./RequestCard";

export function RiderRequest({ isOpen, onClose }: HeaderProps) {
  const riderRequests = [
    {
      name: "John Musa",
      image: "https://i.pravatar.cc/48?img=3",
      description:
        "from Dar es Salaam Hub has submitted a registration request. Review and approve the application.",
    },
    {
      name: "John Musa",
      image: "https://i.pravatar.cc/48?img=4",
      description:
        "from Dar es Salaam Hub has submitted a registration request. Review and approve the application.",
    },
  ];

  const withdrawRequests = [
    {
      name: "John Musa",
      image: "https://i.pravatar.cc/48?img=5",
      description:
        "from Dar es Salaam Hub has submitted a registration request. Review and approve the application.",
    },
    {
      name: "John Musa",
      image: "https://i.pravatar.cc/48?img=6",
      description:
        "from Dar es Salaam Hub has submitted a registration request. Review and approve the application.",
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-100 p-6 max-w-xl mx-auto space-y-6 text-black rounded-sm">
        <section>
          <h2 className="text-2xl font-bold mb-4">Rider Request</h2>
          <div className="space-y-4">
            {riderRequests.map((req, i) => (
              <RequestCard key={i} {...req} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Point Withdraw Request</h2>
          <div className="space-y-4">
            {withdrawRequests.map((req, i) => (
              <RequestCard key={i} {...req} />
            ))}
          </div>
        </section>

        <div className="text-center pt-4 flex items-center justify-center">
          <button className="text-sm text-gray-700 font-medium  gap-1 hover:underline cursor-pointer">
            See All →
          </button>
        </div>
      </div>
    </Modal>
  );
}
