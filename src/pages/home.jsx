import { Link } from "react-router-dom";

const demoCards = [
  {
    title: "Change Color",
    description: "Interactive color changing component",
    link: "/change-color",
  },
  {
    title: "Counter",
    description: "Increment and decrement counter",
    link: "/counter",
  },
  {
    title: "Password Generator",
    description: "Generate secure passwords",
    link: "/password-generator",
  },
  {
    title: "Money Converter",
    description: "Currency conversion tool",
    link: "/money-converter",
  },
];

const Home = () => (
  <>
  <div className="flex items-center justify-center min-h-screen">
    <div className="min-h-screen flex items-center justify-center">
      <div className="  p-6 bg-neutral-400 rounded-xl border-2 border-blue-300 m-10  border-r-8  border-b-8 ">
        <h1 className="text-xl font-bold mb-6 text-white text-center">
          React Basics Demo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoCards.map((cards, index) => (
            <div
              key={index}
              className="flex flex-col bg-neutral-50 p-3 rounded-lg shadow-md  border-r-8 border-b-8 transition"
            >
              <h2 className="text-lg font-semibold mb-2 pr-2">{cards.title}</h2>
              <p className="text-gray-600 mb-4 text-base pr-2">
                {cards.description}
              </p>
              <Link
                to={cards.link}
                className="mt-auto text-blue-600 hover:underline"
              >
                View →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  </>
);
export default Home;
