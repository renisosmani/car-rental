import { PrismaClient } from "@prisma/client";
import { carsData } from "../components/carsData";

const prisma = new PrismaClient();

const FLAGSHIP_LICENSE_PLATE = "AB 051 TK";

async function main() {
  const flagship = carsData.find(
    (car) =>
      car.licensePlate === FLAGSHIP_LICENSE_PLATE &&
      car.make === "Mercedes-Benz" &&
      car.model === "CLS 63 AMG" &&
      car.year === 2013,
  );

  if (!flagship) {
    throw new Error(
      "Flagship Mercedes-Benz CLS 63 AMG not found in carsData.ts.",
    );
  }

  if (flagship.location !== "Tirana" || !flagship.featured || !flagship.premium) {
    throw new Error(
      "Flagship Mercedes-Benz CLS 63 AMG must be featured, premium, and located in Tirana.",
    );
  }

  await prisma.booking.deleteMany();
  await prisma.car.deleteMany();

  await prisma.car.createMany({
    data: carsData.map((car) => ({
      id: car.id,
      make: car.make,
      model: car.model,
      year: car.year,
      category: car.category,
      dailyRate: car.dailyRate,
      weeklyRate: car.weeklyRate ?? null,
      currency: car.currency,
      location: car.location,
      imageUrl: car.imageUrl,
      transmission: car.transmission,
      fuel: car.fuelType,
      seats: car.seats,
      engine: car.engine ?? null,
      horsepower: car.horsepower ?? null,
      licensePlate: car.licensePlate ?? null,
      supplier: car.supplier,
      phone: car.phone,
      whatsapp: car.whatsapp,
      email: car.email,
      rating: car.rating,
      reviewCount: car.reviewCount,
      isFeatured: car.featured ?? false,
      isPremium: car.premium ?? false,
      tags: car.tags ?? [],
    })),
    skipDuplicates: true,
  });
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
