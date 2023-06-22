import Image from "next/image";
import React from "react";
import { useState } from "react";

const HomeScreenDashboard = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.pexels.com/photos/15894508/pexels-photo-15894508/free-photo-of-clouds-above-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  return (
    <div className="relative h-screen">
      <div className="absolute left-0 top-0 h-full bg-emerald-500 z-10">
        <div className="py-4 px-10 bg-emerald-400">
          <h4 className="text-white uppercase">Mapping</h4>
        </div>
      </div>
      <div className="absolute h-full top-0 left-0 w-full">
        <Image
          src={selectedImage}
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default HomeScreenDashboard;
