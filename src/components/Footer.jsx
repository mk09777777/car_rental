import React, { Fragment } from "react";


export default function Footer() {
    return (
        <Fragment>
            <div className="mt-20 ml-10 mr-10 flex flex-row p-4 border-b border-[#D1D5DC] justify-between items-center">
                <div className="flex flex-col ">
                    <div className="flex flex-row items-center " >
                        <span className="text-2xl">
                            <img src="/logo.jpg" alt="Car Icon" className="w-4 h-4 " />
                        </span>
                        <h1 className="text-xl font-bold text-[#414141] bg-[#414141] ml-2 transition-transform duration-300 bg-clip-text text-transparent ">
                            GoMiles
                        </h1>
                    </div>
                    <span className="mt-2 text-sm text-[#64748B] ">
                        Premium car rental service with a wide selection of <br/>
                        luxury and everyday vehicles for all your driving  <br/>
                        needs.
                    </span>
                    <div className="flex flex-row mt-4 ">
                        <img src="/facebook.png" alt="facebook" className="w-5 h-5 mr-2 cursor-pointer" />
                        <img src="/inst.png" alt="instagram" className="w-5 h-5 mr-2 cursor-pointer" />
                        <img src="/mail.png" alt="mail" className="w-5 h-5 mr-2 cursor-pointer" />
                    </div>
                </div>
               <div className="flex flex-row">
                 <div className="flex flex-col ml-40">
                    <h1 className="text-md font-bold text-[#414141]">QUICK LINKS</h1>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Home</span>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Browse Cars</span>
                     <span className="mt-2  text-sm text-[#64748B] cursor-pointer">List Your Cars</span>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">About Us</span>   
                </div>
                  <div className="flex flex-col ml-20">
                    <h1 className="text-md font-bold text-[#414141]">RESOURCES</h1>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Help Center</span>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Terms of Service</span>
                     <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Privacy Policy</span>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Insurance</span>   
                </div>
                 <div className="flex flex-col ml-20">
                    <h1 className="text-md font-bold text-[#414141]">CONTACT</h1>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">1234 Luxury Drive</span>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">City, State, ZIP</span>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Phone: (123) 456-7890</span>
                    <span className="mt-2  text-sm text-[#64748B] cursor-pointer">Email: info@gomiles.com</span>
                </div>
               </div>
            </div>
            <div className="flex flex-row ml-10 justify-between items-center p-1">
                <span className="text-sm text-[#94A3B8] ">© 2024 GoMiles. All rights reserved.</span>
                <div className="flex flex-row"> 
                     <span className="mt-2 mr-10 text-sm text-[#64748B] cursor-pointer">Terms </span>
                     <span className="mt-2 mr-10 text-sm text-[#64748B] cursor-pointer">Privacy</span>
                    <span className="mt-2 mr-10 text-sm text-[#64748B] cursor-pointer">Cookies</span> </div>
            </div>
        </Fragment>
    )
}