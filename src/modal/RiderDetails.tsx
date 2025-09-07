interface DriverInfo {
  label: string;
  value: string;
}

interface RiderDetailsProps {
  diver: DriverInfo[];
}

export default function RiderDetails({ diver }: RiderDetailsProps) {
  return (
    <div className="bg-white">
      <h3 className="text-2xl font-semibold py-4 text-black">
        Vehicle Information
      </h3>

      {diver.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-2 border-b border-[#096E76]"
        >
          <div className="font-medium text-gray-700 bg-[#E6F1F1] p-2">
            {item.label}
          </div>
          <div className="text-gray-800 bg-[#F5F5F5] p-2">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
