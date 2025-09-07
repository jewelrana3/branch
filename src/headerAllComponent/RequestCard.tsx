// components/RequestCard.tsx
type RequestCardProps = {
  name: string;
  image: string;
  description: string;
};

export function RequestCard({ name, image, description }: RequestCardProps) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-md shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold">New Rider Approval Request</p>
        <p className="text-sm ">
          Rider <strong>{name}</strong> {description}
        </p>
        <div className="mt-3 flex gap-2 ">
          <button className="bg-teal-600  text-sm px-3 py-1 rounded font-semibold cursor-pointer">
            Accept
          </button>
          <button className="bg-yellow-400  text-sm px-3 py-1 rounded font-semibold cursor-pointer">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
