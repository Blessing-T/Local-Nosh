import { useState } from "react";

const classVideos = [
  {
    id: 1,
    title: "How to Make Sadza",
    url: "https://www.youtube.com/embed/kwXel6xGGww",
    chef: "Chef Tendai Moyo",
  },
  {
    id: 2,
    title: "Cooking Muriwo Unedovi",
    url: "https://www.youtube.com/embed/f4mODRjE1vc",
    chef: "Chef Rutendo Chirwa",
  },
   {
    id: 3,
    title: "Cooking Macimbi",
    url: "https://www.youtube.com/embed/h3bbpAfsUBM",
    chef: "Chef Tariro Musiringofa",
  },
];

const initialDishes = [
  {
    id: 1,
    name: "Sadza ne Nyama yeMombe",
    description:
      "Zimbabwe's staple: thick maize porridge served with beef stew and leafy greens.",
    image: "/sadza-beef-stew-and-local.jpg"
  },
  {
    id: 2,
    name: "Sadza ne Muriwo Unedovi",
    description:
      "Zimbabwe's staple: thick maize porridge served with Leafy greens cooked in a rich peanut butter sauce, a vegetarian favorite.",
    image: "/Sadza-peanut.jpeg"
  },
  {
    id: 3,
    name: "Maputi",
    description: "Popped maize snack, crunchy and enjoyed by all ages.",
    image: "/maputi.jpg"
  },
  {
    id: 4,
    name: "Mazondo",
    description:
      "Slow-cooked cow trotters in a spicy tomato sauce, a delicacy for special occasions.",
    image: "/mazondo.jpg"
  },
  {
    id: 5,
    name: "Kapenta",
    description: "Tiny dried fish fried and served with sadza and vegetables.",
    image: "/kapenta-fish-a-local.jpg"
  },
   {
    id: 6,
    name: "Sadza and Macimbi",
    description: "Mopane worms served with sadza.",
    image: "/Macimbi.jpeg"
  },
];

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={theme === "dark" ? "bg-gray-900 text-white min-h-screen" : "bg-yellow-50 text-gray-800 min-h-screen"}>
     
      <header className="sticky top-0 z-50 shadow-md py-3 px-6 flex justify-between items-center border-b border-orange-200 bg-white dark:bg-gray-800">
        <img src="/Local Nosh Logo.png" alt="Logo" className="w-12 h-12 rounded-full"/>
		<h1 className="text-orange-600 text-3xl text-italic md:text-4xl font-bold mb-1 ">Local Nosh</h1>
        <div className="space-x-3">
          <button onClick={toggleTheme} className="text-sm px-3 py-1 rounded bg-orange-200 dark:bg-gray-700 dark:text-white">{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
        </div>
      </header>

      
      <section
  className="relative bg-cover bg-center h-[300px]"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1280&q=80)",
  }}
>
  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-2 font-mono typing-effect">
      <span className="colorchange">Taste Zimbabwean Cuisine</span>
    </h1>
    <p className="text-white text-lg md:text-xl font-medium">
      Discover, Cook, and Share Our Local Flavors
    </p>
  </div>
</section>


     
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Dishes</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {initialDishes.map((dish) => (
            <div key={dish.id} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition overflow-hidden">
              <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">{dish.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Cooking Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {classVideos.map((vid) => (
            <div key={vid.id} className="rounded-lg overflow-hidden shadow bg-white dark:bg-gray-800">
              <iframe src={vid.url} className="w-full h-40" title={vid.title} allowFullScreen></iframe>
              <div className="p-3">
                <h4 className="text-md font-semibold text-orange-700 dark:text-orange-400">{vid.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">by {vid.chef}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Local Food Explorer. Taste the culture.
      </footer>
    </div>
  );
}

export default App;
