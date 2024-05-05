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
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col p-10 text-base leading-4 bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:max-w-full">
              <div class="flex flex-col p-6 font-semibold text-center rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                <div class="text-2xl">EcoSeller</div>
                <div class="shrink-0 self-center mt-3 w-16 h-16 bg-stone-200 rounded-[48px]"></div>
                <div class="mt-3">Teresia Amelia</div>
                <div class="mt-3 font-normal">teresia.amelia@gmail.com</div>
              </div>
              <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea79f5729661446b6f2c0bac78dcfc06fad64dc31a38312a94135a753fc03f72?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Dashboard</div>
              </div>
              <div class="flex gap-3 px-6 py-3 mt-6 font-semibold text-right whitespace-nowrap max-md:px-5">
                <div class="shrink-0 w-0.5 h-6 rounded-md bg-black"></div>
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
              <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
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
              <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cccfa7360479c49113d4fad145c0af4b90c59ec90110505c654e81169fb44bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Ulasan Pembeli</div>
              </div>
              <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0334d131e6f55692ac81c90f0a232e456d1d9369b25ab143c9bbd45c93ff4aaf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Setelan</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col py-6 bg-[#EEF0E5]">
            <div class="flex flex-col px-12 text-black leading-[100%] max-md:px-5 max-md:max-w-full">
              <div class="text-2xl font-semibold max-md:max-w-full">
                Tambah Post
              </div>
              <div class="mt-3 text-base max-md:max-w-full">
                Posting sesuatu untuk toko anda
              </div>
            </div>
            <div class="self-left mt-6 text-2xl leading-6 text-black max-md:max-w-full px-12">
              Informasi Produk
            </div>
            <div class="flex flex-col px-12 mt-6 w-full text-black leading-[100%] max-md:px-5 max-md:max-w-full">
              <div class="text-base max-md:max-w-full">Foto Produk</div>
              <div class="flex gap-3 pr-20 mt-3 text-2xl whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2052d801671f489542cf6eacc6696061fec4bf53b16a7bd71b5cfa37c9b788cf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 max-w-full aspect-square w-[120px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2052d801671f489542cf6eacc6696061fec4bf53b16a7bd71b5cfa37c9b788cf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 max-w-full aspect-square w-[120px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2052d801671f489542cf6eacc6696061fec4bf53b16a7bd71b5cfa37c9b788cf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 max-w-full aspect-square w-[120px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2052d801671f489542cf6eacc6696061fec4bf53b16a7bd71b5cfa37c9b788cf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 max-w-full aspect-square w-[120px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2052d801671f489542cf6eacc6696061fec4bf53b16a7bd71b5cfa37c9b788cf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 max-w-full aspect-square w-[120px]"
                />
                <div class="justify-center items-start px-12 py-12 rounded-md bg-zinc-300 h-[120px] w-[120px] max-md:px-5">
                  +
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start px-12 mt-6 w-full text-base leading-4 max-md:px-5 max-md:max-w-full">
              <div class="self-stretch text-black max-md:max-w-full">
                Kategori Limbah
              </div>
              <div class="justify-center px-3 py-1.5 mt-3 whitespace-nowrap rounded-md border-2 border-solid border-neutral-700 bg-[#304D30] text-stone-200 max-md:px-5">
                Organik
              </div>
              <div class="justify-center px-3 py-1.5 mt-3 whitespace-nowrap rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5">
                Anorganik
              </div>
            </div>
            <div class="flex flex-col px-12 mt-6 w-full text-base leading-4 max-md:px-5 max-md:max-w-full">
              <div class="text-black max-md:max-w-full">Nama Limbah</div>
              <div class="flex gap-3 p-6 mt-3 bg-white rounded-md text-zinc-300 max-md:flex-wrap max-md:px-5">
                <div class="flex-1 max-md:max-w-full">Nama limbah anda</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/17145ca9b72a14886e426dcb729170ffbd3a3bf2fbe84694af7dfec95f2c3e60?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 my-auto aspect-[1.61] fill-black w-[13px]"
                />
              </div>
            </div>
            <div class="flex flex-col px-12 mt-6 w-full text-base leading-4 max-md:px-5 max-md:max-w-full">
              <div class="text-black max-md:max-w-full">Dekripsi Limbah</div>
              <div class="justify-center p-6 mt-3 bg-white rounded-md text-zinc-300 max-md:px-5 max-md:max-w-full">
                Deskripsi limbah
              </div>
            </div>
            <div class="self-left mt-6 text-2xl leading-6 text-black max-md:max-w-full px-12">
              Informasi Penjualan
            </div>
            <div class="flex flex-col px-12 mt-6 w-full text-base leading-4 max-md:px-5 max-md:max-w-full">
              <div class="text-black max-md:max-w-full">Minimal Pemesanan</div>
              <div class="flex gap-5 mt-3 max-md:flex-wrap">
                <div class="flex-1 justify-center p-6 bg-white rounded-md text-zinc-300 max-md:px-5 max-md:max-w-full">
                  Jumlah minimal pesanan
                </div>
                <div class="justify-center p-6 whitespace-nowrap rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                  Kg
                </div>
              </div>
            </div>
            <div class="self-left mt-6 text-2xl leading-6 text-black max-md:max-w-full px-12">
              Stok Produk
            </div>
            <div class="flex flex-col px-12 mt-6 w-full max-md:px-5 max-md:max-w-full">
              <div class="text-base leading-4 text-black max-md:max-w-full">
                Total Produk Dijual
              </div>
              <div class="flex gap-5 mt-3 max-md:flex-wrap">
                <div class="flex-1 justify-center p-6 bg-white rounded-md text-zinc-300 max-md:px-5 max-md:max-w-full">
                  Jumlah Produk dijual
                </div>
                <div class="shrink-0 p-6 h-16 rounded-md bg-[#304D30] text-stone-200 w-[68px]">
                  Kg
                </div>
              </div>
              <br></br>
              Pastikan informasi limbah telah sesuai
            </div>
            <br></br>
            <div class="justify-right flex gap-3 self-stretch px-12 text-base leading-4 whitespace-nowrap max-md:flex-wrap max-md:px-5">
              <div class="justify-right px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5">
                Batal
              </div>
              <div class="justify-right px-6 py-3 rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                Simpan
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedSeller>
  );
}
