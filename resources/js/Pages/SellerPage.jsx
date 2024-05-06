import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
      }
    >
      <div className="flex justify-center items-center px-16 py-7 shadow-lg bg-[#EEF0E5] leading-[100%] text-neutral-800 max-md:px-5">
        <div className="flex gap-5 justify-between w-full max-w-[1680px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3 my-auto text-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/625919fa6486320e528b216851a60e794b27e10df387f3d5df62cee0540ebbc7?apiKey=81aa3398288b425cae501e07d8c56af5&"
              className="shrink-0 aspect-[0.73] w-[35px]"
            />
            <div className="my-auto">
              <span className="font-bold">Eco</span>Swap
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center text-base max-md:flex-wrap max-md:max-w-full">
            <div className="justify-center self-stretch px-6 py-3 my-auto whitespace-nowrap border-2 border-solid border-neutral-800 rounded-[42px] max-md:px-5">
              EcoSell
            </div>
            <div className="self-stretch my-auto">Katalog</div>
            <div className="self-stretch my-auto">Notifikasi</div>
            <div className="self-stretch my-auto">Tentang Kami</div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=81aa3398288b425cae501e07d8c56af5&"
              className="shrink-0 self-stretch w-16 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#DFE4DF]">
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
                <div className="flex gap-2.5 justify-center self-center p-2.5 mt-3 max-w-full w-[303px] ">
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
            <div className="flex flex-col grow pt-12 pb-20 max-md:max-w-full bg-[#EEF0E5]">
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
    </AuthenticatedLayout>
  );
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
    >
<header class="flex justify-center items-center px-16 py-9 shadow-lg bg-[#EEF0E5] max-md:px-5">
    <div class="flex gap-5 justify-between w-full max-w-7xl max-md:flex-wrap"> <div class="flex gap-3 text-2xl text-neutral-800">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef392300638febf15d26999dc681d55ed2439484fdd6947e4d77a448ff60927?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="EcoSwap logo" class="w-9 aspect-square object-contain" /> <h1 class="my-auto">
                <span class="font-bold">Eco</span>Swap
            </h1>
        </div>
        <nav class="flex gap-5 items-center my-auto text-base text-black max-md:flex-wrap"> 
            <a href="#" class="px-6 py-3 whitespace-nowrap border-2 border-[#163020]  rounded-full">EcoSell</a> <a href="#" class="block px-3 py-2">Catalog</a> <a href="#" class="block px-3 py-2">Notification</a>
            <a href="#" class="block px-3 py-2">About Us</a>
            <button class="flex gap-2.5 items-center px-6 py-3 font-bold text-center whitespace-nowrap rounded-md bg-zinc-400 text-neutral-800"> <span class="my-auto">{auth.user.name}</span> 
                <img src={auth.user.avatar_url} alt="User avatar" class="w-4 h-4 rounded-full object-cover" /> 
            </button>
        </nav>
    </div>
</header>

<div class="self-stretch">
  <div class="flex gap-5 max-md:flex-col max-md:gap-0">
    <div class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
      <div
        class="flex grow gap-0 max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
      >
        <div
          class="flex flex-col px-12 pt-12 pb-20 text-2xl leading-6 text-black shadow-lg bg-[#EEF0E5] max-md:px-5 max-md:max-w-full"
        >
          <div class="text-5xl font-bold text-[#304D30] max-md:text-4xl ">
            EcoSeller’s
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/979805acc018763be408bdbf65645d767ad512bbf8519cc23edf79fdb3fe2e1a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="mt-12 w-full border-solid aspect-[100] border-[3px] border-zinc-400 stroke-[3px] stroke-zinc-400 max-md:mt-10"
          />
          <div
            class="flex flex-col mt-12 w-full text-base bg-stone-200 max-md:mt-10"
          >
            <div class="flex gap-5 justify-between px-px text-neutral-800">
              <img
                loading="lazy"
                srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="shrink-0 w-16 aspect-square rounded-[64px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7e20a7baa815598f5221aebd2dd39bd1a83f924e4869e35a3aa6c10eb1c896?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="shrink-0 self-start border-solid aspect-[0.05] border-[3px] border-zinc-400 stroke-[3px] stroke-zinc-400 w-[3px]"
              />
              <div
                class="flex flex-col justify-center py-3 pr-6 rounded-md bg-stone-200"
              >
                <div class="flex gap-2.5 justify-center font-bold">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d90aa50959a1acd4fe8aed12e86b50ddf42066ebefa6c5ff04514fabb978ac3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-[1.09]"
                  />
                  <div class="my-auto">PT Angkasa Raya</div>
                </div>
                <div class="flex gap-2.5 justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe0f071b2360a8f3cda48aa3c38159c99195b3111f9524adfb9a94c3c5af47a4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-[1.09]"
                  />
                  <div class="my-auto">Pontianak, Kalimantan Barat</div>
                </div>
              </div>
            </div>
            <div class="flex gap-5 justify-between mt-4">
              <div>Jam Operasional</div>
              <div class="text-right">09:00-21:00</div>
            </div>
            <div class="flex gap-5 justify-between mt-4 whitespace-nowrap">
              <div>Followers</div>
              <div class="text-right">1000</div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/979805acc018763be408bdbf65645d767ad512bbf8519cc23edf79fdb3fe2e1a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="mt-12 w-full border-solid aspect-[100] border-[3px] border-zinc-400 stroke-[3px] stroke-zinc-400 max-md:mt-10"
          />
          <div
            class="flex gap-3 mt-12 font-bold whitespace-nowrap bg-stone-200 max-md:mt-10"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e53af535b463e730dfc353eaa2bcc0b0f62e2fbf576c8fc64372ebc647700fa8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 w-0.5 border-solid aspect-[0.08] border-[3px] border-neutral-700 stroke-[3px] stroke-neutral-700"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f026f5d3b1e46098191549486a7034db4de18b364dc70257f5456d643d1416a3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-10 aspect-none"
            />
            <div>Dashboard</div>
          </div>
          <div class="flex gap-5 mt-8 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0237884c3c4241ec8b4bb9e9259677eaba70be634d945a76c3c592ab3b96c2af?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-6 aspect-square"
            />
            <div class="justify-center bg-stone-200">EcoPost</div>
          </div>
          <div class="flex flex-col items-start pr-12 pl-9 mt-5 max-md:px-5">
            <div class="flex gap-3.5 bg-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ea68d83838efd99244c5604c21dc9296f6f7e525d44ce4b93aede42329a933?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="shrink-0 self-start w-6 aspect-square"
              />
              <div>Tambah Produk</div>
            </div>
            <div class="flex gap-3.5 mt-5 bg-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b31e0fbc1e40aeb34d6a4aefc64c30b283a871e201abc7b1cb566b6e86a0c30?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="shrink-0 self-start w-6 aspect-square"
              />
              <div>Daftar Produk</div>
            </div>
          </div>
          <div class="flex gap-5 mt-8 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/68651086a6b7767644df71db04cb37b2e664e47d97f7472eb3ce45358eb1cee3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-6 aspect-square"
            />
            <div class="justify-center bg-stone-200">Ecodule</div>
          </div>
          <div class="flex flex-col items-start pr-12 pl-9 mt-5 max-md:px-5">
            <div class="flex gap-3.5 bg-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b1b878a2c145fd4fd2a049688b3be996700492438ba0068cef68ee8f573c84?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="shrink-0 self-start w-6 aspect-square"
              />
              <div>Status Pesanan</div>
            </div>
            <div class="flex gap-3.5 mt-5 bg-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b31e0fbc1e40aeb34d6a4aefc64c30b283a871e201abc7b1cb566b6e86a0c30?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="shrink-0 self-start w-6 aspect-square"
              />
              <div>Daftar Pesanan</div>
            </div>
          </div>
          <div class="flex gap-3.5 mt-8 whitespace-nowrap bg-stone-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/926a56bfddbcdc64502a5274f4d0d6ac2e8602e53b9604f4f1b7cd63c9a54367?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-6 aspect-square"
            />
            <div>EcoChat</div>
          </div>
          <div class="flex gap-3.5 mt-8 whitespace-nowrap bg-stone-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d714252adb0cbfd7504acdd1d82b2b9ca675e8919188e8dfbc610ad361e628f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-6 aspect-square"
            />
            <div>EcoRoom</div>
          </div>
          
          <div class="flex gap-3.5 mt-8 whitespace-nowrap bg-stone-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d960b98cffdc46541f29fee405ccc3ef43c7ac46a2b22d1deaa40107c0106cda?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-6 aspect-square"
            />
            <div>Ulasan Pembeli</div>
          </div>
          
          <div class="flex gap-3.5 mt-8 whitespace-nowrap bg-stone-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/516c8e44b645fe8e1eb266fc0bb348edc4273b100147473b8c7124e9fe0d3696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-6 aspect-square"
            />
            <div>Settings</div>
          </div>

        </div>
        
        <div class="flex flex-col justify-center p-0.5 bg-white max-md:hidden">
          <div
            class="shrink-0 rounded-xl bg-neutral-700 h-[195px] max-md:hidden"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
      <div
        class="mt-12 text-5xl font-bold leading-[49px] text-[#304D30] max-md:mt-10 max-md:max-w-full max-md:text-4xl"
      >
        Welcome back, PT Angkasa Raya
      </div>
      <div class="px-12 py-3 mt-6 w-full max-md:px-5 max-md:max-w-full">
  <div class="flex gap-5 max-md:flex-col max-md:gap-0">
    <div class="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
      <div
        class="flex flex-col grow self-stretch pt-12 pr-6 pb-6 pl-12 w-full text-4xl font-bold leading-10 rounded-xl bg-neutral-800 text-stone-200 max-md:px-5 max-md:mt-9 max-md:max-w-full"
      >
        <div>Saldo Anda</div>
        <div class="mt-6">Rp 1.000.000</div>
        <div class="mt-3 text-base tracking-tighter">+4.2%</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0dcae1875939d7ff461e63165dd15663cf67bd09fb2e0af8853399565fdf4b8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          class="self-end mt-6 w-12 aspect-square"
        />
      </div>
    </div>
    <div class="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
      <div
        class="flex flex-col grow self-stretch px-12 pt-12 pb-8 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-9 max-md:max-w-full"
      >
        <div
          class="flex gap-5 justify-between self-start text-4xl font-bold leading-10 text-neutral-700"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c1185c4b88cdbcc0a9631071c07082c3136c6193c0afe7efeeb428238bfbf93?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="shrink-0 w-10 aspect-square"
          />
          <div>Performa Anda</div>
        </div>
        <div class="justify-between mt-6 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col grow text-base leading-4 text-neutral-800 max-md:mt-10"
              >
                <div class="flex gap-3 pr-2.5 whitespace-nowrap">
                  <div class="my-auto">Pengunjung</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52659bda24b4615dfe7c732f7c6cec4b3bfb924618e746b1bd3d4a448bac845?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square fill-stone-200"
                  />
                </div>
                <div class="mt-6 text-4xl font-bold">+12</div>
                <div class="mt-3 leading-4">
                  Lebih banyak orang mengunjungi anda!
                </div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col text-base leading-4 text-neutral-800 max-md:mt-10"
              >
                <div class="flex gap-3 pr-7 whitespace-nowrap max-md:pr-5">
                  <div class="my-auto">Terjual</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52659bda24b4615dfe7c732f7c6cec4b3bfb924618e746b1bd3d4a448bac845?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square fill-stone-200"
                  />
                </div>
                <div class="mt-6 text-4xl font-bold">12.5 Kg</div>
                <div class="mt-3">Jumlah sampah terjual</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[49%] max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col leading-[100%] text-neutral-800 max-md:mt-10"
              >
                <div class="flex gap-3 pr-4 text-base">
                  <div class="my-auto">Penjualan Diselesaikan</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52659bda24b4615dfe7c732f7c6cec4b3bfb924618e746b1bd3d4a448bac845?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square fill-stone-200"
                  />
                </div>
                <div class="flex gap-5 justify-between mt-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/de55e79f931df931894a9ad3d2f106362ec4b59ad8dfd38ec0ee7387a16ef56c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-16 aspect-square"
                  />
                  <div class="flex flex-col self-start">
                    <div class="text-4xl font-bold">15 Transaksi</div>
                    <div class="text-base">8 dari 10 Pesanan Diproses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="flex flex-col pt-12 pr-4 pb-6 pl-12 text-4xl font-bold leading-10 rounded-xl bg-zinc-400 text-neutral-800 max-md:pl-5 max-md:max-w-full"
>
  <div class="max-md:max-w-full">Total Produk</div>
  <div class="mt-6 max-md:max-w-full">9 Post</div>
  <div
    class="flex gap-5 justify-between mt-5 text-base text-black max-md:flex-wrap max-md:max-w-full"
  >
    <div class="justify-center self-start px-5 py-2 rounded-xl bg-stone-200">
      Tampilkan semua post
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb357f2d0930bf36ced707b8a6f974d53012d4cdabe57dfce4076fa23828769?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
      class="shrink-0 w-12 aspect-square"
    />
  </div>
</div>

    </div>
  </div>
</div>



    </AuthenticatedLayout>
  );
}
