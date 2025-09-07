import { ModalCard } from "@/adminDashboardPage/vendorManagement/modalDetails/ModalCard";
import Modal from "./Modal";
import VendorInformation from "@/adminDashboardPage/vendorManagement/modalDetails/VendorInformation";
import { ProfileCard } from "@/adminDashboardPage/vendorManagement/modalDetails/ProfileCard";
import DriverDocument from "@/adminDashboardPage/vendorManagement/modalDetails/Document";
import { useLocation } from "react-router-dom";
import { driverInfo } from "@/demoData/rider";
import { vendorData } from "@/demoData/vendor";
import RiderDetails from "./RiderDetails";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const VendorDetails = ({ isOpen, onClose }: Props) => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-9 rounded shadow-md w-[942px]">
        {/* First Row: Profile and Modal */}
        <div className="grid grid-cols-7 gap-5 mb-6">
          <div className="col-span-2">
            <ProfileCard />
          </div>
          <div className="col-span-5">
            <ModalCard />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-3">
            {currentPathname === "/rider-management" ? (
              <RiderDetails diver={driverInfo} />
            ) : (
              <VendorInformation vendorData={vendorData} />
            )}
          </div>
          <div className="col-span-3">
            <DriverDocument />
          </div>
        </div>
      </div>
    </Modal>
  );
};
