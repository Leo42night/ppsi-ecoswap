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
              <div class="flex gap-3 px-6 py-3 mt-6 font-semibold text-right whitespace-nowrap max-md:px-5">
                <div class="shrink-0 w-0.5 h-6 rounded-md bg-black"></div>
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
          <div class="flex flex-col p-12 max-md:px-5">
            <div class="text-2xl font-semibold leading-6 text-neutral-700 max-md:max-w-full">
              Selamat datang kembali,
              <span class="font-bold"> PT Angkasa Pura</span>
            </div>
            <div class="mt-3 text-base leading-4 text-neutral-700 max-md:max-w-full">
              Ringkasan seluruh toko
            </div>
            <div class="mt-6 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col grow self-stretch w-[64%] p-6 w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-[#304D30] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                  <div class="flex gap-3 whitespace-nowrap max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94a6e7d418d89d4c8a325d0f51071481d605f574a5a702315cc5fc417d8baa2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-6 aspect-square"
                    />
                    <div class="my-auto max-md:max-w-full">Terjual</div>
                  </div>
                  <div class="mt-6 text-2xl font-semibold max-md:max-w-full">
                    12.5 Kg
                  </div>
                  <div class="mt-6 max-md:max-w-full">
                    Jumlah sampah terjual
                  </div>
                </div>
                <div class="flex flex-col grow self-stretch p-6 w-[66%] mx-auto w-full rounded-xl bg-[#B6C4B6]  leading-[100%] text-[#304D30] max-md:px-5 max-md:mt-6">
                  <div class="flex gap-3 text-base">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e20485e325cadaa1f0268a2215ca168ad50ba7d09747b725ba73994e70d6e443?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-6 aspect-square"
                    />
                    <div class="my-auto">Penjualan Diselesaikan</div>
                  </div>
                  <div class="flex gap-3 mt-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d32a1b0ec094b6e3353d88fe783e2674d75985284d04007332d9b12ed441c3e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-16 aspect-square"
                    />
                    <div class="flex flex-col pb-3">
                      <div class="text-2xl font-semibold">15 Transaksi</div>
                      <div class="mt-3 text-base">
                        8 dari 10 Pesanan Diproses
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow items-start px-6 py-3 w-full text-base leading-4 rounded-xl bg-[#304D30] text-stone-200 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                    <div class="flex gap-2.5 self-stretch">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8b06ecae4ab8838c091e0c97ff4edc2b0fb81067d3e53d2511768bfd756101d?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-6 aspect-square"
                      />
                      <div class="my-auto">Total Pemasukkan Anda</div>
                    </div>
                    <div class="mt-6 text-2xl font-semibold">Rp 1.000.000</div>
                    <div class="mt-3">+4.2%</div>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow px-6 py-3 w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-[#304D30] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                    <div class="flex gap-3 whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a36a930ddfe172eb74eb11f60b8f5c07106c10f86fe651c19febd1aa889cc5c6?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-6 aspect-square"
                      />
                      <div class="my-auto">Pengunjung</div>
                    </div>
                    <div class="mt-6 text-2xl font-semibold">+12</div>
                    <div class="mt-3">Lebih banyak orang mengunjungi anda!</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-12 mt-6 w-full max-md:px-5 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow p-6 mx-auto w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6">
                    <div class="flex gap-3 text-base leading-4 text-[#304D30]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3b22093f9a5bafb59388ff910e2834fb0be60911381ed5faca6e70206e0eba0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-6 aspect-square"
                      />
                      <div class="my-auto">Total postingan produk anda</div>
                    </div>
                    <div class="flex justify-center items-center px-6 mt-6 rounded-md aspect-square bg-[#304D30] max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8c388df1d63f71933786c6a16d31a19a0e0fb94a846be145caf7658d6248463?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="mt-5 mb-3.5 w-6 aspect-square"
                      />
                    </div>
                    <div class="mt-6 text-2xl font-semibold leading-6 text-[#304D30]">
                      9 Postingan
                    </div>
                    <div class="justify-center px-6 py-3 mt-3 text-base leading-4 text-black rounded-md bg-stone-200 max-md:px-5">
                      Tampilkan Semua Postingan
                    </div>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow self-stretch p-6 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                    <div class="flex gap-3 text-base leading-4 text-[#304D30] max-md:flex-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b0d5150301b508c7c4385cd2250bc4da0a7d19bd7b699521cfc421b4a81ca2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-6 aspect-square"
                      />
                      <div class="my-auto max-md:max-w-full">
                        Ringkasan Pesanan
                      </div>
                    </div>
                    <div class="mt-6 max-md:max-w-full">
                      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                          <div class="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-[#EEF0E5] leading-[100%] text-neutral-700 max-md:mt-6">
                            <div class="text-base">Baru</div>
                            <div class="mt-3 text-2xl font-semibold">2</div>
                          </div>
                        </div>
                        <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                          <div class="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-[#EEF0E5] leading-[100%] text-neutral-700 max-md:mt-6">
                            <div class="text-base">Diproses</div>
                            <div class="mt-3 text-2xl font-semibold">2</div>
                          </div>
                        </div>
                        <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                          <div class="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-[#EEF0E5] leading-[100%] text-neutral-700 max-md:mt-6">
                            <div class="text-base">Selesai</div>
                            <div class="mt-3 text-2xl font-semibold">2</div>
                          </div>
                        </div>
                        <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                          <div class="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-[#EEF0E5] leading-[100%] text-neutral-700 max-md:mt-6">
                            <div class="text-base">Batal</div>
                            <div class="mt-3 text-2xl font-semibold">2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col px-6 py-6 mt-6 text-base leading-4 rounded-xl bg-[#EEF0E5] text-neutral-700 max-md:px-5 max-md:max-w-full">
                      <div class="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                        <div class="flex gap-5 justify-between">
                          <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="shrink-0 w-12 rounded-full aspect-square"
                          />
                          <div class="flex flex-col my-auto">
                            <div>Nama PT Perusahaan Limbah</div>
                            <div class="mt-1.5">
                              <span class="font-bold text-neutral-700">
                                20 kg
                              </span>
                              <span class="text-neutral-700"> Limbah Kaca</span>
                            </div>
                          </div>
                        </div>
                        <div class="justify-center px-3 py-1.5 my-auto text-center whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-5">
                          Berhasil
                        </div>
                      </div>
                      <div class="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                        <div class="flex gap-5 justify-between">
                          <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="shrink-0 w-12 rounded-full aspect-square"
                          />
                          <div class="flex flex-col my-auto">
                            <div>Nama PT Perusahaan Limbah</div>
                            <div class="mt-1.5">
                              <span class="font-bold text-neutral-700">
                                20 kg
                              </span>
                              <span class="text-neutral-700"> Limbah Kaca</span>
                            </div>
                          </div>
                        </div>
                        <div class="justify-center px-3 py-1.5 my-auto text-center whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-5">
                          Berhasil
                        </div>
                      </div>
                      <div class="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                        <div class="flex gap-5 justify-between">
                          <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0a738f151ba3e15243921c0c8dbce8075f37c14cced2510bc4e5929fe0e3f4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="shrink-0 w-12 rounded-full aspect-square"
                          />
                          <div class="flex flex-col my-auto">
                            <div>Nama PT Perusahaan Limbah</div>
                            <div class="mt-1.5">
                              <span class="font-bold text-neutral-700">
                                20 kg
                              </span>
                              <span class="text-neutral-700"> Limbah Kaca</span>
                            </div>
                          </div>
                        </div>
                        <div class="justify-center px-3 py-1.5 my-auto text-center whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-5">
                          Berhasil
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
    </AuthenticatedSeller>
  );
}
