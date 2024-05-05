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
      <div className="flex flex-col bg-[#304D30]">
        <div className="pb-20 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col p-12 text-base leading-4 bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:max-w-full">
                <div class="flex flex-col p-6 font-semibold text-center rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                  <div class="text-2xl">EcoSeller</div>
                  <div class="shrink-0 self-center mt-3 w-16 h-16 bg-stone-200 rounded-[48px]"></div>
                  <div class="mt-3">Teresia Amelia</div>
                  <div class="mt-3 font-normal">teresia.amelia@gmail.com</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap rounded-md max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea79f5729661446b6f2c0bac78dcfc06fad64dc31a38312a94135a753fc03f72?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Dashboard</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf46a9b06dbc34f73f10718605b7f02858349183dee7d9319baf40a98f42b153?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Tambah Produk</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3657ebcccdc29900d3cba7892be478fa5fecae50033793d65626193fe61ca80a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Daftar Produk</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6dd0638f9248570f7926b3dbedcda2e333002353c4e04648bbf265a5b35026?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Pengiriman</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 font-semibold text-right whitespace-nowrap max-md:px-5">
                  <div class="shrink-0 w-0.5 h-6 rounded-md bg-black"></div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dbeefa7c1ff289f06c7609f2148cad26940dfaafb7c3a19a207025f445147fd?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">EcoChat</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07220c021dde5ed2e09e274b943f3d3cfbd6876f3cd264b2c3140c79ac06e151?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">EcoRoom</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 text-right max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cccfa7360479c49113d4fad145c0af4b90c59ec90110505c654e81169fb44bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Ulasan Pembeli</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0334d131e6f55692ac81c90f0a232e456d1d9369b25ab143c9bbd45c93ff4aaf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Setelan</div>
                </div>
              </div>
            </div>
            <div class="flex max-w-[146px] -mr-4">
              <div class="flex flex-col items-end pb-4 w-full">
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
              <div class="pt-3 py-2 px-12 w-full bg-[#B6C4B6] max-md:max-w-full">
                <div class="flex gap-5 justify-between self-center w-full max-w-[850px] max-md:flex-wrap max-md:max-w-full">
                  <div class="flex gap-5 px-px py-3.5 leading-[100%] text-neutral-800 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 rounded-full aspect-square w-[70px]"
                    />
                    <div class="flex flex-col my-auto">
                      <div class="text-2xl font-bold">PT Tanarayan</div>
                    </div>
                  </div>
                  <div class="flex justify-center items-center px-3 w-12 h-12 my-6 rounded-xl bg-[#304D30]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d48efd93cd40420d3c91cb478d3e09d7be5d4ed74d0e825aaf5d44e58803de?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="w-full aspect-square"
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
                <div class="justify-center self-end px-5 py-3.5 mt-6 mb-80 bg-[#304D30] text-white rounded-xl leading-[100%] max-md:mr-2 max-md:mb-10 max-md:max-w-full">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
