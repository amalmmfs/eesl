import Image from "next/image";
import { equipments } from "../data/equipments";

export default function EquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Laboratory Equipment
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipments.map((equipment) => (
          <div
            key={equipment.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64 w-full">
              <Image
                src={equipment.image}
                alt={equipment.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {equipment.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {equipment.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
