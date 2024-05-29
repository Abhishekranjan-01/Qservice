import React from "react";

const HomeRepair = () => {
  const services = [
    {
      title: "Fan repair",
      image:
        "https://images.unsplash.com/photo-1609519479841-5fd3b2884e17?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: "4.82 (116K)",
      price: "₹109",
    },
    {
      title: "Ceiling fan installation",
      image:
        "https://thumbs.dreamstime.com/b/electrician-changing-light-bulb-ceiling-fan-indoors-216234575.jpg",
      rating: "4.87 (56.4K)",
      price: "₹89",
    },
    {
      title: "Tap repair",
      image:
        "https://media.istockphoto.com/id/970156662/photo/repairing-a-faucet.jpg?s=612x612&w=0&k=20&c=7WXMG0FS1IUuq8eKTTqKkmIkwujPM9pDGombmP71_EE=",
      rating: "4.82 (172.7K)",
      price: "₹49",
    },
    {
      title: "Switch/socket replacement",
      image:
        "https://sewamitra.up.gov.in/Upload/Service/07000a8c-36c1-46b9-97aa-095be5a03886_.jpg",
      rating: "4.87 (37.1K)",
      price: "₹49",
    },
    {
      title: "Drill & hang (wall decor)",
      image:
        "https://cdn.shopify.com/s/files/1/0628/1389/6929/files/Project_Wall_Art_How_to_hang_metal_wall_art_drilling_600x600.png?v=1652694783",
      rating: "4.86 (130.9K)",
      price: "₹49",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Quick home repairs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.951.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.138l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.138-.364l1.07-3.292c.3-.921-.755-1.688-1.539-1.118l-2.8 2.034a1 1 0 00-1.138.364l1.07 3.292c.3.921-1.245 1.37-1.81.588l-3.462-.95-1.07-3.292a1 1 0 00-.951-.69H2.54a1 1 0 00-.588 1.81l2.8 2.034a1 1 0 00.364 1.138l-1.07 3.292c-.3.921.755 1.688 1.54 1.118l2.8-2.034a1 1 0 001.138-.364l1.07 3.292c.3.921 1.245 1.37 1.81.588l3.462-.95 1.07-3.292a1 1 0 00.951-.69h3.462a1 1 0 00.894-1.252l-2.8-2.034a1 1 0 00-.364-1.138l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-gray-700">{service.rating}</span>
            </div>
            <p className="text-lg font-bold mb-2">{service.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See all
        </button>
      </div>
    </div>
  );
};

export default HomeRepair;
