import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal from "./Modal";
import CustomButton from "@/customButton/Button";

interface Props {
  isOpen: boolean | string;
  onClose: () => void;
}

export function ServiceModal({ isOpen, onClose }: Props) {
  const handleSave = () => {
    console.log("sssss");
    // Add save logic here
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-6 rounded-2xl w-[600px] mx-auto text-black">
        <h2 className="text-2xl font-semibold mb-8">
          {isOpen === "add" ? "Add New Category" : "Edit Category"}
        </h2>
        <form className="space-y-6 " onSubmit={handleSave}>
          <div>
            <Label htmlFor="service-name" className="">
              Service Name
            </Label>
            <select
              name=""
              id=""
              className="w-full p-1 border border-gray-300 rounded"
            >
              <option value="">Parcel Delivery Inside City</option>
              <option value=""> Inside City</option>
            </select>
          </div>

          {/* Base Price */}
          <div>
            <Label htmlFor="base-price" className="">
              Base Price
            </Label>
            <Input id="base-price" type="text" placeholder="TSH 100" />
          </div>

          {/* Rate per Km */}
          <div>
            <Label htmlFor="rate-per-km" className="">
              Rate Per Km
            </Label>
            <Input id="rate-per-km" type="text" placeholder="1km" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <CustomButton
              className="text border border-gray-200"
              onClose={onClose}
            >
              Cancel
            </CustomButton>
            <CustomButton className="bg-[#096E76] text-white">
              Save
            </CustomButton>
          </div>
        </form>
      </div>
    </Modal>
  );
}
