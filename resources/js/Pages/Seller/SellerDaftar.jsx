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

      <div class="w-full max-md:max-w-full bg-[#EEF0E5]">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-[30%] max-md:ml-0 max-md:w-full ">
            <div class="flex flex-col grow p-12 w-full text-base leading-4 bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:max-w-full">
              <div class="flex flex-col p-6 font-semibold text-center rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                <div class="text-2xl">EcoSeller</div>
                <div class="shrink-0 self-center mt-3 w-16 h-16 bg-stone-200 rounded-[48px]"></div>
                <div class="mt-3">Teresia Amelia</div>
                <div class="mt-3">teresia.amelia@gmail.com</div>
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
              <div class="flex gap-3 px-6 py-3 mt-6 font-semibold text-right whitespace-nowrap max-md:px-5">
                <div class="shrink-0 w-0.5 h-6 rounded-md bg-black"></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3657ebcccdc29900d3cba7892be478fa5fecae50033793d65626193fe61ca80a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Daftar Produk</div>
              </div>
              <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6dd0638f9248570f7926b3dbedcda2e333002353c4e04648bbf265a5b35026?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Pengiriman</div>
              </div>
              <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93e3ff9724e119c6aa19f8661313f51a9d0f724c4e900dc43a4304e1afb0955?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea70550547e92a5210a32500732db0fc563c9f4675fce09c3f6a72e292b507a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-6 aspect-square"
                />
                <div class="my-auto">Setelan</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-[70%] max-md:ml-0 max-md:w-full ">
            <div class="flex flex-col grow items-center pt-6 w-full bg-[#EEF0E5] max-md:max-w-full">
              <div class="px-12 mt-6 w-full max-md:px-5 max-md:max-w-full">
                <div class="flex flex-col text-black leading-[100%] max-md:px-5 max-md:max-w-full">
                  <div class="text-2xl font-semibold max-md:max-w-full">
                    Daftar Produk
                  </div>
                  <div class="mt-3 text-base max-md:max-w-full">
                    Periksa daftar produk toko anda
                  </div>
                </div>
                <br></br>
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow pb-6 mx-auto w-full rounded-md bg-zinc-300 max-md:mt-3">
                      <div class="flex gap-40 justify-center items-start px-6 pt-6 pb-60 bg-[#304D30] max-md:px-5">
                        <div class="justify-center px-6 py-3 text-base leading-4 whitespace-nowrap rounded-md bg-stone-200 text-neutral-700 max-md:px-5">
                          Edit
                        </div>
                        <div class="flex justify-center items-center px-3.5 w-10 h-10 bg-rose-500 rounded-md">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861fde276557caea425732aa9e4813b9bc97f12aabda0e425f8433f84c98c0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="w-3.5 aspect-[0.88] fill-stone-200"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col px-6 mt-3 leading-[100%] text-neutral-700 max-md:px-5">
                        <div class="text-base">Kemasan Styrofoam</div>
                        <div class="mt-3 text-2xl font-semibold">
                          Rp 200.000/4Kg
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedSeller>
  );
}
