import React, { Fragment, useEffect, useRef, useState } from "react";

export default function CarInfo(){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();
    }, []);

return(
    <Fragment>
        <div ref={ref} className="mt-10 ml-10 mr-10 flex flex-row p-5 rounded-lg bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] overflow-hidden">
          <div className="fle flex-col ml-5">
              <h1 className="font-bold text-2xl text-white ">Do You Own a Luxury Car?</h1>
              <h2 className=" mt-2 text-lg text-white   ">Monetize your vehicle effortlessly by listing it on CarRental.<br></br>
                We take care of insurance, driver verification, and secure payments<br/> — so you can earn passive income, stress-free.</h2>
            <div>
              <button className="bg-white flex justify-center items-center px-10 py-2 mt-10 rounded-md hover:scale-105 transition-transform">
               <h1 className="font-medium text-lg text-[#0257FF]"> List cars</h1>
              </button>
            </div>
          </div>
          <img className={`h-60 ml-auto ${isVisible ? 'animate-slide-in' : ''}`} src="/bannerCar.png" alt="car owner"/>
        </div>
    </Fragment>
)
}