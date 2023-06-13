import React from "react";
import adp from "../../assets/adopt.jpg";
import search from "../../assets/search.png";
import connect from "../../assets/connect.png";
import home from "../../assets/home.png";
import vet from "../../assets/vet.png";

function Journey() {
  return (
    <div className="pt-8 bg-white pb-8 xl:pl-24 xl:pr-24 lg:pl-20 lg:pr-20 md:pl-12 md:pr-12 sm:pl-5 sm:pr-5 pl-2 pr-2">
      <div className="flex flex-row w-full justify-center">
        <div className="md:text-4xl sm:text-3xl text-xl text-center sm:font-normal font-semibold text-slate-600">
          Your Pet Adoption Journey With PetNation
        </div>
      </div>
      <div className="mt-4 flex flex-row">
        <img src={adp} className="h-102 sm:block hidden w-1/2" />
        <div className="sm:w-5/12 w-full">
          <div className="w-full mt-5">
            <div className="flex flex-row">
              <img src={search} className="h-16 mt-1 w-16" />
              <div className="pl-4">
                <div className="font-semibold sm:text-lg">Search Pet</div>
                <div className="leading-5 text-sm font-semibold text-slate-600">
                  Adopt a pet who's right for you. Simply enter your city
                  above to start your search.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="flex flex-row">
              <img src={connect} className="h-16 mt-1 w-16" />
              <div className="pl-4">
                <div className="font-semibold sm:text-lg">Connect</div>
                <div className="leading-5 text-sm font-semibold text-slate-600">
                  Once you find a pet, get contact info
                  for their pet parents or rescuers. Contact them to learn more
                  about how to meet and adopt the pet.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="flex flex-row">
              <img src={home} className="h-16 mt-1 w-16" />
              <div className="pl-4">
                <div className="font-semibold sm:text-lg">Adoption Process</div>
                <div className="leading-5 text-sm font-semibold text-slate-600">
                  The rescue or pet parents will walk you through their adoption
                  process. Prepare your home for the arrival of your pet to
                  help them adjust to their new family.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <div className="flex flex-row">
              <img src={vet} className="h-16 mt-1 w-16" />
              <div className="pl-4">
                <div className="font-semibold sm:text-lg">Consult a Vet</div>
                <div className="leading-5 text-sm font-semibold text-slate-600">
                  Your new pet might be in need of some medical attention.
                  So it is always advisible to contact a vet after adopting 
                  a pet as a safety measure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
