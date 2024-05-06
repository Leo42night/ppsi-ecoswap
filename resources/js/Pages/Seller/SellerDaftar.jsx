import SideBarSeller from "@/Components/SideBarSeller";
import AuthenticatedSeller from "@/Layouts/AuthenticatedSeller";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedSeller
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
      }
    >
      <div className="flex flex-col bg-stone-200">
        <div className="pb-20 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarSeller user={auth.user} />
            <div className="flex flex-col grow pt-12 pb-20 max-md:max-w-full">
              <div className="self-start ml-24 text-5xl font-bold leading-[49px] text-neutral-700 max-md:ml-2.5 max-md:text-4xl">
                Daftar Produk
              </div>
              <div className="px-20 mt-12 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.69]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative gap-5 justify-between">
                          <div className="justify-center p-2.5 text-base leading-4 text-black whitespace-nowrap rounded-xl bg-[#B6C4B6]">
                            Edit
                          </div>
                          <div className="flex justify-center items-center p-2.5 w-11 h-11 bg-rose-500 rounded-xl">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69655a63daed35edd61f88591b26ba4c3cd3dde6b392458db3c80907455c173b?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="w-6 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="relative mt-12 text-xl font-semibold leading-6 text-right text-stone-200 max-md:mt-5">
                          Rp 200.000/40 Kg
                        </div>
                        <div className="relative self-end mt-1.5 text-base font-bold leading-4 text-right text-stone-200">
                          Sisa Stok 120 Kg
                        </div>
                      </div>
                      <div className="mt-3 text-2xl font-bold leading-6 text-neutral-700">
                        Kemasan Sterofoam
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.69]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative gap-5 justify-between">
                          <div className="justify-center p-2.5 text-base leading-4 text-black whitespace-nowrap rounded-xl bg-[#B6C4B6]">
                            Edit
                          </div>
                          <div className="flex justify-center items-center p-2.5 w-11 h-11 bg-rose-500 rounded-xl">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69655a63daed35edd61f88591b26ba4c3cd3dde6b392458db3c80907455c173b?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="w-6 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="relative mt-12 text-xl font-semibold leading-6 text-right text-stone-200 max-md:mt-5">
                          Rp 200.000/40 Kg
                        </div>
                        <div className="relative self-end mt-1.5 text-base font-bold leading-4 text-right text-stone-200">
                          Sisa Stok 120 Kg
                        </div>
                      </div>
                      <div className="mt-3 text-2xl font-bold leading-6 text-neutral-700">
                        Kemasan Kardus
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.69]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0b1b5a35092e86ac0874acde24d249525f1225e2ab5060b972bf52e57d98ffc?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative gap-5 justify-between">
                          <div className="justify-center p-2.5 text-base leading-4 text-black whitespace-nowrap rounded-xl bg-[#B6C4B6]">
                            Edit
                          </div>
                          <div className="flex justify-center items-center p-2.5 w-11 h-11 bg-rose-500 rounded-xl">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69655a63daed35edd61f88591b26ba4c3cd3dde6b392458db3c80907455c173b?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="w-6 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="relative mt-12 text-xl font-semibold leading-6 text-right text-stone-200 max-md:mt-5">
                          Rp 200.000/40 Kg
                        </div>
                        <div className="relative self-end mt-1.5 text-base font-bold leading-4 text-right text-stone-200">
                          Sisa Stok 120 Kg
                        </div>
                      </div>
                      <div className="mt-3 text-2xl font-bold leading-6 text-neutral-700">
                        Kemasan Kaleng
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedSeller>
  );
}
