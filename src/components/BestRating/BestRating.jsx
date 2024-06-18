import React from "react";
import { Shirts } from "../../Data/data";
import OrderButton from "../OrderButton/OrderButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../../assets/women/women2.jpg";
import { GrDeliver, GrSecure } from "react-icons/gr";
import { MdLocalOffer, MdPayment } from "react-icons/md";

const BestRating = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white mt-20">
      {/* section title  */}
      <SectionTitle
        title="Top Rating Products"
        subTitle="Products"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ab sed?"
      />

      {/* section content  */}
      <div className="flex justify-center pt-20" data-aos="fade-down">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[200px]">
          {Shirts.map((shirt, i) => {
            return (
              <div
                key={i + 1}
                className="w-[300px] flex flex-col justify-center items-center shadow-md py-4 px-3 relative group hover:cursor-pointer hover:bg-gray-950 hover:text-white rounded-lg transition-all durationn-300 dark:bg-gray-900 dark:hover:bg-primary"
              >
                <img
                  src={shirt.img}
                  alt="this is card image"
                  className="w-[150px] object-cover absolute bottom-48 group-hover:scale-110 transition-all duration-300"
                />
                <h2 className="font-bold text-1xl sm:text-2xl pt-32">
                  {shirt.title}
                </h2>
                <p className="text-gray-500 group-hover:text-white text-center py-4">
                  {shirt.description}
                </p>

                <OrderButton className="group-hover:text-primary group-hover:bg-white" />
              </div>
            );
          })}
        </div>
      </div>

      {/* discount section  */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 py-24 px-20 dark:bg-gray-950 dark:text-white">
        <div className="img px-20" data-aos="flip-down">
          <img
            src={img}
            alt="discount image"
            className="rounded-lg shadow-xl shadow-slate-500 w-[450px] h-[400px] object-cover"
          />
        </div>
        <div className="content">
          <h1 className="font-bold text-3xl sm:text-4xl py-4" data-aos="fade-right">Winter Sale upto 50% Off</h1>
          <p className="text-gray-400 pb-4" data-aos="fade-right">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            placeat expedita eos!lorem56. Lorem ipsum dolor sit.
          </p>

          <ul className="flex flex-col  justify-between min-h-72 py-5 ">
            <li className="flex gap-3 items-center" data-aos="fade-up">
                <div className="bg-purple-100 p-4 rounded-full">
                <GrSecure className="dark:text-black"/>

                </div>
              Quality Products
            </li>
            <li className="flex gap-3 items-center" data-aos="fade-up">
              <div className="bg-orange-100 p-4 rounded-full ">
              <GrDeliver className="dark:text-black" />
              </div>
              Fast Delivery
            </li>
            <li className="flex gap-3 items-center" data-aos="fade-up">
                <div className="bg-green-100 p-4 rounded-full">
              <MdPayment className="dark:text-black"/>

                </div>
              Easy Payment method
            </li>
            <li className="flex gap-3 items-center" data-aos="fade-up">
                <div className="bg-yellow-100 p-4 rounded-full">

              <MdLocalOffer className="dark:text-black"/>
                </div>
              Get Offer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BestRating;
