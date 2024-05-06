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
      <header class="flex justify-center items-center px-16 py-9 shadow-lg bg-[#EEF0E5] max-md:px-5">
        <div class="flex gap-5 justify-between w-full max-w-[1680px] max-md:flex-wrap max-md:max-w-full">
          <div class="flex gap-3 my-auto text-2xl text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3d526be55ebefcf7bf4c9d68d8e340829c0cf581c022ffa7e554f9d802314a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 aspect-[0.73] w-[35px]"
            />
            <div class="my-auto">
              <span class="font-bold">Eco</span>
              Swap
            </div>
          </div>
          <div class="flex gap-5 justify-between items-center text-base text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div class="justify-center self-stretch px-6 py-3 my-auto border-2 border-solid border-neutral-800 rounded-[42px] text-neutral-800 max-md:px-5">
              EcoSell
            </div>
            <div class="self-stretch my-auto">Katalog</div>
            <div class="self-stretch my-auto">Notifikasi</div>
            <img
              loading="lazy"
              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-stretch w-16 aspect-square"
            />
          </div>
        </div>
      </header>
      <div className="flex flex-col bg-[#EEF0E5]">
        <div className="pb-20 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-12 w-full text-2xl leading-6 text-black bg-[#DFE4DF] max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
                <div className="flex gap-2.5 justify-center self-start px-2 py-2.5 mt-5 text-right whitespace-nowrap">
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
                  <div>Tambah Produk</div>
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
                <div className="flex gap-2.5 justify-center self-start px-2 py-2.5 mt-5 font-bold text-right whitespace-nowrap">
                  <div class="shrink-0 w-0.5 rounded-md bg-neutral-800 h-[25px]"></div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8719d13d9310e18e1d875882d8de0c2e8de7473c379ac7f13fdf5385c4e31846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
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
            <div class="flex flex-col pt-8 max-w-[146px] -mr-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9efe9543aa1e1ad48fbc269962df3b6186ce90b188a705aab43c882c1666e76a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="self-end aspect-square w-[104px]"
              />
              <div class="flex flex-col items-end pb-4 mt-12 w-full">
                <div class="flex flex-col justify-center items-start self-start p-2.5 ml-4 rounded-xl bg-[#B6C4B6]">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="rounded-full aspect-w-16 aspect-h-9 w-[70px]"
                  />
                </div>

                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="mt-9 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
              </div>
            </div>
            <div class="flex flex-col ml-1 w-[64%] max-md:ml-0 max-md:w-full h-full">
              <div class="flex flex-col pt-3 py-2 w-full bg-[#B6C4B6] max-md:max-w-full">
                <div class="flex gap-5 justify-between self-center w-full max-w-[850px] max-md:flex-wrap max-md:max-w-full">
                  <div class="flex gap-5 px-px py-3.5 leading-[100%] text-neutral-800 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 rounded-full aspect-square w-[70px]"
                    />
                    <div class="flex flex-col my-auto">
                      <div class="text-2xl font-bold">PT Tanarayan</div>
                      <div class="mt-2.5 text-base">
                        Terakhir dilihat pukul 13:38
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-center items-center px-4 my-auto rounded-xl bg-stone-200 h-[54px] w-[54px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/001e7a75091e6336b7af1388ca529b2067139dcb6bca2bf8cf133acb6d2a41a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-16 pt-12 pb-20 w-full text-base bg-[#DFE4DF] text-neutral-800 max-md:px-5 max-md:max-w-full">
                <div class="justify-center px-5 py-3.5 leading-4 bg-white rounded-xl max-md:mr-2 max-md:max-w-full">
                  Hallo, Selamat siang PT Angkasa Raya saya sedang mencari
                  sampah plastik sebanyak 30kg, Apakah anda
                  <br />
                  memiliki stok limbah tersebut??
                </div>
                <div class="justify-center self-end px-5 py-3.5 mt-6 mb-80 bg-emerald-100 rounded-xl leading-[100%] max-md:mr-2 max-md:mb-10 max-md:max-w-full">
                  Hallo PT Tanarayan, mohon maaf saya tidak memiliki limbah
                  tersebut.
                </div>
              </div>
              <div class="flex flex-col justify-center px-16 py-10 w-full bg-[#DFE4DF] max-md:px-5 max-md:max-w-full">
                <div class="flex gap-2.5 max-md:flex-wrap">
                  <div class="px-5 py-3.5 text-base leading-4 bg-white rounded-xl text-neutral-800 max-md:pr-5 max-md:max-w-full h-[54px] w-[1005px]">
                    Ketikan Pesan Anda...
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="flex justify-center items-center px-3 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fce715b0acabac7b50e3c2e0f3df9272b035e42fb9a9c06c59de7927f065b40?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="w-full aspect-square"
                      />
                    </div>
                    <div class="flex justify-center items-center py-3.5 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a979737f4c29ae13a40dacecb933b4b24fa00194affe56cc6cdfb983074cc797?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="w-6 aspect-square"
                      />
                    </div>
                    <div class="flex justify-center items-center px- py-3.5 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2b8ee04c1c05ede7e98c11486ec405c0e76ff04c4e04578065822b19346f4a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="w-6 aspect-[0.93]"
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
