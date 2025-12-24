import React from "react";
import Client1 from "../../assets/Client1.webp";
import Client2 from "../../assets/Client2.webp";
import Client3 from "../../assets/Client3.webp";

const TrustedClient = () => {
  const clients = [
    { name: "Codefficient", logo: Client1 },
    { name: "WedClicks", logo: Client2 },
    { name: "CloudGraphics", logo: Client3 },
    { name: "Codefficient", logo: Client1 },
    { name: "WedClicks", logo: Client2 },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 mb-10 text-sm sm:text-base">
          Powering innovation across industries from startups to global enterprises.
        </p>

        {/* Animated Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 sm:gap-20 items-center">
            {clients.concat(clients).map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-10 sm:h-14 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedClient;
