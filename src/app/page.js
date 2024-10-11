import Image from "next/image";

export default function Home() {
  return (
          <div>
          <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6">
          <div class="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2">
              {/* <img class="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Recipe 1"> */}
              <div class="p-4">
                  <h2 class="text-2xl font-semibold mb-2">Recipe 1: Delicious Pasta</h2>
                  <p class="text-gray-600 mb-4">Enjoy a delicious pasta dish with a rich and creamy sauce that’s perfect for any occasion.</p>
                  <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Recipe</a>
              </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2">
              {/* <img class="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Recipe 2"> */}
              <div class="p-4">
                  <h2 class="text-2xl font-semibold mb-2">Recipe 2: Fresh Salad</h2>
                  <p class="text-gray-600 mb-4">A refreshing and healthy salad packed with fresh vegetables and a tangy dressing.</p>
                  <a href="#" class="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">View Recipe</a>
              </div>
          </div>
      </div>
      </div>
  );
}
