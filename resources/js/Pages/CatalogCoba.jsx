import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function CatalogCoba({ auth }) {
    return (
         <div className="flex flex-col pb-20 bg-white">
      <div className="flex justify-center items-center px-16 py-8 w-full bg-stone-200 leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3 text-2xl text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/500ea0c9a2b4a56a0e536c4e07de705cea7b1ae6820e3cd58c985823c23363cc?"
              className="shrink-0 aspect-[0.73] w-[35px]"
            />
            <div className="my-auto">
              <span className="font-bold">Eco</span>Swap
            </div>
          </div>
          <div className="flex gap-5 justify-between my-auto text-base font-bold whitespace-nowrap">
            <div className="justify-center px-6 py-3 rounded-md bg-neutral-800 text-stone-200 max-md:px-5">
              Masuk
            </div>
            <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-800 text-neutral-800 max-md:px-5">
              Daftar
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-start px-20 py-10 max-md:flex-wrap max-md:px-5">
        <div className="flex gap-3 self-stretch px-6 py-3 text-base leading-4 rounded-md bg-neutral-200 text-neutral-800 max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto max-md:max-w-full">
            Mencoba mencari sesuatu?
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-6 py-3 w-16 h-16 rounded-md bg-neutral-200 max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1326360a1da280407f596a5d5c647c2057f9f1408186eea43b511ff3e2c34ecc?"
            className="w-6 aspect-square"
          />
        </div>
        <div className="flex flex-col justify-center items-center px-6 py-3 w-16 h-16 rounded-md bg-neutral-200 max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2586b30d181d792f4d3b197ea90f6b6e9e0719ebe3ef42f286bc9ec062a5eb2?"
            className="w-5 aspect-square"
          />
        </div>
      </div>
      <div className="w-full bg-neutral-200 min-h-[11px] max-md:max-w-full" />
      <div className="flex flex-col justify-center w-full text-right bg-neutral-200 leading-[100%] text-stone-200 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col items-start px-12 pt-20 w-full min-h-[503px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="./Banner.jpg"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col px-12 pt-6 pb-3.5 mt-80 rounded-xl bg-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-semibold max-md:max-w-full">
              EcoDu Headline
            </div>
            <div className="mt-3 text-base max-md:max-w-full">
              Ini adalah subjudul untuk informasi lebih lanjut dan lainnya{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
