import { useState } from "react";

const initialDishes = [
	{
		id: 1,
		name: "Sadza ne Nyama",
		description:
			"Zimbabwe's staple: thick maize porridge served with beef stew and leafy greens.",
		origin: "Zimbabwe",
		ingredients: [
			"Maize meal",
			"Beef",
			"Tomatoes",
			"Onion",
			"Collard greens",
		],
		image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
		rating: 4.9,
	},
	{
		id: 2,
		name: "Muriwo Unedovi",
		description:
			"Leafy greens cooked in a rich peanut butter sauce, a vegetarian favorite.",
		origin: "Zimbabwe",
		ingredients: ["Collard greens", "Peanut butter", "Tomatoes", "Onion", "Salt"],
		image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
		rating: 4.7,
	},
	{
		id: 3,
		name: "Maputi",
		description: "Popped maize snack, crunchy and enjoyed by all ages.",
		origin: "Zimbabwe",
		ingredients: ["Maize kernels", "Salt"],
		image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
		rating: 4.5,
	},
	{
		id: 4,
		name: "Mazondo",
		description:
			"Slow-cooked cow trotters in a spicy tomato sauce, a delicacy for special occasions.",
		origin: "Zimbabwe",
		ingredients: ["Cow trotters", "Tomatoes", "Onion", "Spices"],
		image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
		rating: 4.6,
	},
	{
		id: 5,
		name: "Kapenta",
		description: "Tiny dried fish fried and served with sadza and vegetables.",
		origin: "Zimbabwe",
		ingredients: ["Kapenta fish", "Tomatoes", "Onion", "Oil", "Salt"],
		image: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c6b?auto=format&fit=crop&w=400&q=80",
		rating: 4.4,
	},
];

function App() {
	const [page, setPage] = useState("home");
	const [search, setSearch] = useState("");
	const [selected, setSelected] = useState(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		date: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const filteredDishes = initialDishes.filter(
		(d) =>
			d.name.toLowerCase().includes(search.toLowerCase()) ||
			d.origin.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col items-center font-sans">
			{/* Navigation */}
			<nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 border-t border-yellow-300 flex justify-around items-center py-2 shadow-lg md:max-w-sm md:mx-auto">
				<button
					className={`flex-1 py-2 ${
						page === "home"
							? "text-orange-600 font-bold"
							: "text-gray-500"
					}`}
					onClick={() => setPage("home")}
				>
					Home
				</button>
				<button
					className={`flex-1 py-2 ${
						page === "dishes"
							? "text-orange-600 font-bold"
							: "text-gray-500"
					}`}
					onClick={() => setPage("dishes")}
				>
					Dishes
				</button>
				<button
					className={`flex-1 py-2 ${
						page === "classes"
							? "text-orange-600 font-bold"
							: "text-gray-500"
					}`}
					onClick={() => setPage("classes")}
				>
					Classes
				</button>
				<button
					className={`flex-1 py-2 ${
						page === "proposal"
							? "text-orange-600 font-bold"
							: "text-gray-500"
					}`}
					onClick={() => setPage("proposal")}
				>
					Proposal
				</button>
			</nav>

			{/* App Shell */}
			<div className="w-full max-w-sm mx-auto pb-20 pt-4 px-2">
				{/* Header */}
				<header className="flex items-center justify-between mb-4">
					<img
						src="/Local Nosh Logo.png"
						alt="Logo"
						className="w-14 h-14 rounded-full shadow-md"
					/>
				</header>

				{/* Home Page */}
				{page === "home" && (
					<div className="animate-fadeIn">
						<h1 className="text-2xl font-bold text-orange-700 mb-2">
							Zimbabwean Local Dishes
						</h1>
						<p className="mb-4 text-gray-700">
							Discover, explore, and taste authentic Zimbabwean cuisine. Book a
							cooking class and experience our culture!
						</p>
						<div className="flex flex-col gap-3">
							<button
								className="bg-orange-500 text-white rounded-lg py-3 font-bold shadow-md hover:bg-orange-600 transition"
								onClick={() => setPage("dishes")}
							>
								View Dishes
							</button>
							<button
								className="bg-yellow-400 text-orange-900 rounded-lg py-3 font-bold shadow-md hover:bg-yellow-500 transition"
								onClick={() => setPage("classes")}
							>
								Cooking Classes
							</button>
							<button
								className="bg-orange-100 text-orange-700 rounded-lg py-3 font-bold shadow-md hover:bg-orange-200 transition"
								onClick={() => setPage("proposal")}
							>
								Business Proposal
							</button>
						</div>
					</div>
				)}

				{/* Dishes Page */}
				{page === "dishes" && (
					<div className="animate-fadeIn">
						<h2 className="text-xl font-bold text-orange-700 mb-2">
							Zimbabwean Dishes
						</h2>
						<input
							type="text"
							placeholder="Search by dish or ingredient..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full mb-4 px-4 py-2 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
						/>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[55vh] overflow-y-auto pb-2">
							{filteredDishes.map((dish) => (
								<div
									key={dish.id}
									className="bg-white rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition cursor-pointer flex flex-col items-center p-3"
									onClick={() => setSelected(dish)}
								>
									<img
										src={dish.image}
										alt={dish.name}
										className="w-full h-28 object-cover rounded-lg mb-2"
									/>
									<div className="w-full">
										<h3 className="font-bold text-orange-700">
											{dish.name}
										</h3>
										<p className="text-xs text-gray-500">
											{dish.origin}
										</p>
										<div className="flex items-center gap-1 mt-1">
											<span className="text-yellow-500">★</span>
											<span className="text-sm">{dish.rating}</span>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* Dish Modal */}
						{selected && (
							<div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn" onClick={() => setSelected(null)}>
								<div
									className="bg-white rounded-2xl shadow-2xl max-w-xs w-full p-5 relative animate-popIn"
									onClick={(e) => e.stopPropagation()}
								>
									<button
										className="absolute top-2 right-2 text-orange-600 text-xl font-bold"
										onClick={() => setSelected(null)}
									>
										×
									</button>
									<img
										src={selected.image}
										alt={selected.name}
										className="w-full h-32 object-cover rounded-lg mb-3"
									/>
									<h3 className="text-lg font-bold text-orange-700">
										{selected.name}
									</h3>
									<p className="text-gray-600 mb-2">
										{selected.description}
									</p>
									<h4 className="font-semibold text-orange-600">
										Ingredients:
									</h4>
									<ul className="list-disc list-inside text-sm mb-2">
										{selected.ingredients.map((ing, idx) => (
											<li key={idx}>{ing}</li>
										))}
									</ul>
									<div className="flex items-center gap-1">
										<span className="text-yellow-500">★</span>
										<span className="text-sm">{selected.rating}</span>
									</div>
								</div>
							</div>
						)}
					</div>
				)}

				{/* Cooking Classes Page */}
				{page === "classes" && (
					<div className="animate-fadeIn">
						<h2 className="text-xl font-bold text-orange-700 mb-2">
							Cooking Classes
						</h2>
						<p className="mb-4 text-gray-700">
							Experience Zimbabwean cuisine hands-on! Book a cooking class with
							local chefs and learn to prepare traditional dishes.
						</p>
						{submitted ? (
							<div className="bg-green-100 text-green-800 rounded-lg p-4 text-center animate-popIn">
								<h3 className="font-bold text-lg mb-2">
									Thank you for booking!
								</h3>
								<p>We will contact you soon with more details.</p>
								<button
									className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg"
									onClick={() => setSubmitted(false)}
								>
									Book Another
								</button>
							</div>
						) : (
							<form
								className="flex flex-col gap-3"
								onSubmit={(e) => {
									e.preventDefault();
									setSubmitted(true);
									setForm({ name: "", email: "", date: "", message: "" });
								}}
							>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={form.name}
									onChange={(e) =>
										setForm({ ...form, name: e.target.value })
									}
									required
									className="px-4 py-2 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
								/>
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={form.email}
									onChange={(e) =>
										setForm({ ...form, email: e.target.value })
									}
									required
									className="px-4 py-2 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
								/>
								<input
									type="date"
									name="date"
									value={form.date}
									onChange={(e) =>
										setForm({ ...form, date: e.target.value })
									}
									required
									className="px-4 py-2 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
								/>
								<textarea
									name="message"
									placeholder="Any special requests?"
									value={form.message}
									onChange={(e) =>
										setForm({ ...form, message: e.target.value })
									}
									rows={3}
									className="px-4 py-2 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
								/>
								<button
									type="submit"
									className="bg-orange-500 text-white rounded-lg py-3 font-bold shadow-md hover:bg-orange-600 transition"
								>
									Book Class
								</button>
							</form>
						)}
					</div>
				)}

				
				{page === "proposal" && (
					<div className="animate-fadeIn max-h-[70vh] overflow-y-auto pr-2">
						<h2 className="text-xl font-bold text-orange-700 mb-2">
							Local Food Explorer App Proposal
						</h2>
						<section className="mb-4">
							<h3 className="font-semibold text-orange-600">Problem Statement</h3>
							<p className="text-gray-700 text-sm">
								Tourists often seek authentic cultural experiences, yet they struggle to
								find genuine local food options. Meanwhile, local cooks and vendors lack
								visibility and access to a broader customer base. This disconnect limits
								both tourist satisfaction and economic opportunities for the community.
							</p>
						</section>
						
						<section className="mb-4">
							<h3 className="font-semibold text-orange-600">Conclusion</h3>
							<p className="text-gray-700 text-sm">
								The Local Food Explorer app presents a compelling investment opportunity
								by fostering authentic culinary experiences for tourists while supporting
								local economies. With your investment, we can bring this innovative
								platform to life, enriching the cultural landscape of Victoria Falls and
								enhancing the tourist experience.
							</p>
							<p className="text-gray-700 text-sm mt-2">
								We invite you to join us in this exciting venture to connect cultures
								through cuisine. Thank you for considering this proposal.
							</p>
						</section>
					</div>
				)}
			</div>

			
			<style>
				{`
        .animate-fadeIn { animation: fadeIn 0.7s; }
        .animate-popIn { animation: popIn 0.4s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes popIn { from { opacity: 0; transform: scale(0.9);} to { opacity: 1; transform: scale(1);} }
        `}
			</style>
		</div>
	);
}

export default App;
