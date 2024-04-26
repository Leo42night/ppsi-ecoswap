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
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-12 w-full text-2xl leading-6 text-black bg-[#DFE4F] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-center mt-1 text-4xl font-semibold text-neutral-800">
                  EcoSeller’s
                </div>
                <div className="shrink-0 mt-9 h-0.5 rounded-md bg-zinc-400" />
                <div className="flex gap-3 mt-6 text-base text-neutral-800">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 w-16 aspect-square rounded-[64px]"
                  />
                  <div className="flex flex-col flex-1 py-1 rounded-md">
                    <div className="flex gap-2.5 justify-center font-bold">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c624cb4cae97b86436251789d80cde4adef0c52b68e698ef953c23e74fbff3?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-6 aspect-[1.09]"
                      />
                      <div className="my-auto">PT Angkasa Raya</div>
                    </div>
                    <div className="flex gap-2.5 justify-center mt-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/389b5a096c5f495314fd3c857473e66785c8f0da2e10973008fbbc964bcaabf6?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-6 aspect-[1.09]"
                      />
                      <div className="my-auto">Pontianak, Kalimantan Barat</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-3 text-base text-neutral-800">
                  <div>Jam Operasional</div>
                  <div className="text-right">09:00-21:00</div>
                </div>
                <div className="flex gap-5 justify-between mt-3 text-base whitespace-nowrap text-neutral-800">
                  <div>Followers</div>
                  <div className="text-right">1000</div>
                </div>
                <div className="shrink-0 mt-6 h-0.5 rounded-md bg-zinc-400" />
                <div className="flex gap-2.5 justify-center self-start px-2 py-2.5 mt-5 font-bold text-right whitespace-nowrap">
                  <div className="shrink-0 w-0.5 rounded-md bg-neutral-800 h-[25px]" />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5ec5c2df37ea96c188ea2b6ad88b22eb37db9ddf6766e15ad15848d8b1c6e3?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <div>Dashboard</div>
                </div>
                <div className="flex gap-5 justify-center pr-20 mt-5 max-w-full text-right whitespace-nowrap w-[359px] max-md:pr-5">
                  <div className="flex gap-2.5 justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6668a8d52cc376ddf73764aa0b953e2b5cb759252dedb405ed0831d9353c5843?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-start aspect-[0.96] w-[23px]"
                    />
                    <div>Ecopost</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d0b42cdae91db9ff8b566619f21ebc48e07027e573c429b3b6041fa57969e4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2.5 justify-center self-center p-2.5 mt-3 max-w-full text-right w-[303px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f346db9e30cdff7bbee120319d025cb710273ec1f4afa0dca81990a7d9c853ad?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <a href="route('ecopost')" className="text-decoration-none"><button className="border-none">Tambah Produk</button></a>
                </div>
                <div className="flex gap-2.5 justify-center self-center p-2.5 mt-3 max-w-full w-[303px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fb128bd5bdb3f5b2c93d759fff54d43678537018dc149905dec036abef49b4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <div className="flex-1">Daftar Produk</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b6f797bd2bdc201b884c9dec56a53f955d841cc94183a1191851dfb13de311a?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>Pengiriman</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/184cc88ace9a940676cd478eeaa19397ae963d34809097a7ff8b62494e21c5a2?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>EcoChat</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46f830c21c383ee12a0e972c18a76c0a6b43807ad1732bf06f46a094152a1251?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>EcoRoom</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/894388a493655926e5b88e7d19c478ed4cb12e2a7467306cbbd3cb7466fef956?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>Ulasan Pembeli</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a8629650582e540d21d4f4b35cc750e9da4d6e52537db339e9e88dcc833ebb?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>Settings</div>
                </div>
              </div>
            </div>
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
