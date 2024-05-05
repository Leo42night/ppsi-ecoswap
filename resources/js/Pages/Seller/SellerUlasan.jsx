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
              <div class="flex gap-3 px-6 py-3 mt-6 text-right max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cccfa7360479c49113d4fad145c0af4b90c59ec90110505c654e81169fb44bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Ulasan Pembeli</div>
              </div>
              <div class="flex gap-3 px-6 py-3 mt-6 font-semibold text-right whitespace-nowrap max-md:px-5">
                <div class="shrink-0 w-0.5 h-6 rounded-md bg-black"></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0334d131e6f55692ac81c90f0a232e456d1d9369b25ab143c9bbd45c93ff4aaf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Setelan</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col py-11 px-12 bg-[#EEF0E5]">
            <div class="flex flex-col px-2 text-black leading-[100%] max-md:px-5 max-md:max-w-full">
              <div class="text-2xl font-semibold max-md:max-w-full">
                Ulasan Pembeli
              </div>
              <div class="mt-3 text-base max-md:max-w-full">
                Dengarkan Ulasan para pembeli anda
              </div>
            </div>
            <div class="mt-3 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-base font-semibold leading-4 max-md:mt-3 max-md:max-w-full"></div>
                </div>
              </div>
              <div class="flex gap-3 px-6 py-3 mt-6 w-full text-base leading-4 bg-white rounded-xl max-w-[912px] text-zinc-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/36453ad7aef429aee4cfdc88ba850d2bc02211edbb301984462cba102ec9f66d?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto max-md:max-w-full">
                  Cari Kode/Nama Pelangan
                </div>
              </div>
              <div class="flex flex-col px-12 py-6 mt-6 w-full max-md:px-5 max-md:max-w-full"></div>
              <div class="flex flex-col self-stretch px-12 py-6 bg-white rounded-xl leading-[100%] max-w-[912px] max-md:px-5">
                <div class="flex gap-5 justify-between w-full text-neutral-700 max-md:flex-wrap max-md:max-w-full">
                  <div class="flex gap-5 justify-between max-md:flex-wrap">
                    <div class="flex gap-3 my-auto text-base font-semibold whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6ac43349933c57fb0d8ddf67d20291cadba4921db14651265aef95668d8def?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-6 aspect-square"
                      />
                      <div class="my-auto">4.9/5.0</div>
                    </div>
                    <div class="flex flex-col">
                      <div class="text-2xl font-semibold">
                        Kemasan Sterofoam
                      </div>
                      <div class="text-base">Rp 200.000/40 Kg</div>
                    </div>
                  </div>
                  <div class="my-auto text-base text-right">
                    Menampilkan 2 dari 5 ulasan
                  </div>
                </div>
                <div class="shrink-0 mt-6 h-0.5 rounded-md bg-zinc-300 max-md:max-w-full"></div>
                <div class="flex gap-5 justify-between mt-6 w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div class="flex gap-3 text-base font-semibold text-neutral-700">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a977272b5be160b074f9d3f03e4b6fdd2e8d5c66d5466a4ae41356ac8ff2ba34?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-6 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                    />
                    <div class="my-auto">Charistheo</div>
                  </div>
                  <div class="justify-center px-6 py-1 text-xs rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                    Balas
                  </div>
                </div>
                <div class="mt-3 text-base text-neutral-700 max-md:max-w-full">
                  Pembelian 25 Kg
                </div>
                <div class="flex gap-1.5 mt-3 text-base text-neutral-700 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="flex-1 my-auto max-md:max-w-full">
                    26/9/2024 11:45
                  </div>
                </div>
                <div class="mt-6 text-base leading-4 text-neutral-700 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </div>
                <div class="flex flex-col px-6 py-3 mt-6 rounded-xl bg-[#304D30] max-md:px-5 max-md:max-w-full">
                  <div class="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div class="flex gap-3 text-base font-semibold text-stone-200">
                      <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-6 aspect-square"
                      />
                      <div class="my-auto">PT Angkasa Raya</div>
                    </div>
                    <div class="justify-center px-6 py-1 text-xs whitespace-nowrap rounded-md bg-[#B6C4B6] text-neutral-700 max-md:px-5">
                      Seller
                    </div>
                  </div>
                  <div class="mt-3 text-base text-stone-200 max-md:max-w-full">
                    Terima kasih telah berbelanja di toko kami!
                  </div>
                </div>
                <div class="shrink-0 mt-6 h-0.5 rounded-md bg-zinc-300 max-md:max-w-full"></div>
                <div class="flex gap-5 justify-between mt-6 w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div class="flex gap-3 text-base font-semibold text-neutral-700">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a977272b5be160b074f9d3f03e4b6fdd2e8d5c66d5466a4ae41356ac8ff2ba34?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-6 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                    />
                    <div class="my-auto">Charistheo</div>
                  </div>
                  <div class="justify-center px-6 py-1 text-xs rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                    Balas
                  </div>
                </div>
                <div class="mt-3 text-base text-neutral-700 max-md:max-w-full">
                  Pembelian 25 Kg
                </div>
                <div class="flex gap-1.5 mt-3 text-base text-neutral-700 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="flex-1 my-auto max-md:max-w-full">
                    26/9/2024 11:45
                  </div>
                </div>
                <div class="mt-6 text-base leading-4 text-neutral-700 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </div>
                <div class="flex flex-col px-6 py-3 mt-6 rounded-xl bg-[#304D30] max-md:px-5 max-md:max-w-full">
                  <div class="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div class="flex gap-3 text-base font-semibold text-stone-200">
                      <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22977e9a753bb1268bacb1b22ed2de90c5e6651961c7e62d93131b5702602a05?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-6 aspect-square"
                      />
                      <div class="my-auto">PT Angkasa Raya</div>
                    </div>
                    <div class="justify-center px-6 py-1 text-xs whitespace-nowrap rounded-md bg-[#B6C4B6] text-neutral-700 max-md:px-5">
                      Seller
                    </div>
                  </div>
                  <div class="mt-3 text-base text-stone-200 max-md:max-w-full">
                    Terima kasih telah berbelanja di toko kami!
                  </div>
                </div>
                <div class="shrink-0 mt-6 h-0.5 rounded-md bg-zinc-300 max-md:max-w-full"></div>
                <div class="flex flex-col justify-center self-start px-6 py-3 mt-6 text-xs rounded-md bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)] text-stone-200 max-md:px-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedSeller>
  );
}
