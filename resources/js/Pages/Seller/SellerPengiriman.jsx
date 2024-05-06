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
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-12 max-md:px-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex flex-col grow shrink-0 self-end mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
                    <div className="text-5xl font-bold leading-[49px] text-neutral-700 max-md:max-w-full max-md:text-4xl">
                      Pengiriman
                    </div>
                    <div className="flex gap-5 justify-between mt-12 text-base leading-4 text-neutral-800 max-md:flex-wrap max-md:mt-10">
                      <div className="flex flex-col flex-1 justify-center text-base leading-4 text-[color:var(--Dark,#163020)] max-md:max-w-full">
                        <div className="flex gap-3 px-6 py-3 rounded-md bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?placeholderIfAbsent=true"
                            backgroundsize="auto"
                            className="relative shrink-0 w-6"
                            aspectratio={1}
                            nowebp="true"
                          />
                          <input
                            placeholder="Cari Kode/Nama Pelangan"
                            className="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 p-3 rounded-md bg-zinc-400">
                        <div className="my-auto">Tipe </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5a39fc617047c7d7ae84d38129a46fcb5b8cc5ee9f5b4102ae3715009c70375?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="shrink-0 w-5 aspect-square"
                        />
                      </div>
                      <div className="flex gap-3 p-3 rounded-md bg-zinc-400">
                        <div className="my-auto">Status </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5a39fc617047c7d7ae84d38129a46fcb5b8cc5ee9f5b4102ae3715009c70375?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="shrink-0 w-5 aspect-square"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-12 mt-6 bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-5 justify-between w-full text-black leading-[100%] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col">
                          <div className="text-2xl font-bold text-neutral-700">
                            #1002
                          </div>
                          <div className="mt-3 text-3xl">Rinasa Company</div>
                          <div className="mt-3 text-xl">
                            Pesanan masuk pada 12/02/25, 16:04 PM{" "}
                          </div>
                        </div>
                        <div className="flex gap-5 justify-center my-auto text-base">
                          <div className="justify-center p-2.5 rounded-xl bg-zinc-400">
                            Simpan Invoice
                          </div>
                          <div className="justify-center p-2.5 whitespace-nowrap rounded-xl bg-zinc-400">
                            Rincian
                          </div>
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9484f0a1bd15e09a7c1096002431f8b87d788b5f9929d998a27a793bcf9b5999?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="object-contain mt-6 w-full border-solid aspect-[100] border-[5px] border-neutral-200 stroke-[5px] stroke-neutral-200 max-md:max-w-full"
                      />
                      <div className="mt-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="max-md:mt-10 max-md:max-w-full">
                              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                                  <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="shrink-0 max-w-full aspect-square w-[169px] max-md:mt-10"
                                  />
                                </div>
                                <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                                  <div className="flex flex-col text-base leading-4 text-neutral-700 max-md:mt-10">
                                    <div className="text-2xl font-bold">
                                      Limbah Kardus
                                    </div>
                                    <div className="flex gap-3 mt-2.5">
                                      <div className="flex gap-1.5 whitespace-nowrap">
                                        <div>Kuantitas</div>
                                        <div>:</div>
                                      </div>
                                      <div>10 kg</div>
                                    </div>
                                    <div className="flex gap-3 mt-2.5">
                                      <div className="flex gap-1.5 whitespace-nowrap">
                                        <div>Harga</div>
                                        <div>:</div>
                                      </div>
                                      <div>Rp 40.000</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2522db67428519a0e5a52383225c814769d49440f6b8874fede2ec39bc134f36?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="self-center border-solid aspect-[0.06] border-[1.5px] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[2px]"
                                  />
                                </div>
                                <div className="flex flex-col self-start mt-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl">Disiapkan</div>
                                  <div className="mt-1.5 text-sm">
                                    Sedang dilakukan pengemasan pada PT
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2522db67428519a0e5a52383225c814769d49440f6b8874fede2ec39bc134f36?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="self-center border-solid aspect-[0.06] border-[1.5px] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[2px]"
                                  />
                                </div>
                                <div className="flex flex-col self-start mt-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl">Dikirim</div>
                                  <div className="mt-1.5 text-sm">
                                    Sedang dilakukan pengiriman di pusat
                                    penyortitan Pontianak Pusat
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2522db67428519a0e5a52383225c814769d49440f6b8874fede2ec39bc134f36?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="self-center border-solid aspect-[0.06] border-[1.5px] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[2px]"
                                  />
                                </div>
                                <div className="flex flex-col self-start mt-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl max-md:max-w-full">
                                    Dikirim
                                  </div>
                                  <div className="mt-0 text-sm max-md:max-w-full">
                                    Barang telah tiba dilokasi menggunakan
                                    pengangkutan Pick Up
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                </div>
                                <div className="flex flex-col self-start mt-0 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl max-md:max-w-full">
                                    Dikirim
                                  </div>
                                  <div className="mt-0 text-sm max-md:max-w-full">
                                    Barang sedang dilakukan pengantaran menuju
                                    lokasi penerima
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-center self-start p-4 mt-6 text-xl leading-5 rounded-xl bg-neutral-700 text-stone-200">
                        Pengiriman dalam kota
                      </div>
                      <div className="flex gap-1.5 self-start p-4 mt-6 text-xl leading-5 rounded-xl bg-neutral-700 text-stone-200 max-md:flex-wrap">
                        <div>Estimasi waktu pesanan tiba pada</div>
                        <div className="font-bold">15/02/25 16:04 PM </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-12 mt-6 bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-5 justify-between w-full text-black leading-[100%] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col">
                          <div className="text-2xl font-bold text-neutral-700">
                            #1002
                          </div>
                          <div className="mt-3 text-3xl">Rinasa Company</div>
                          <div className="mt-3 text-xl">
                            Pesanan masuk pada 12/02/25, 16:04 PM{" "}
                          </div>
                        </div>
                        <div className="flex gap-5 justify-center my-auto text-base">
                          <div className="justify-center p-2.5 rounded-xl bg-zinc-400">
                            Simpan Invoice
                          </div>
                          <div className="justify-center p-2.5 whitespace-nowrap rounded-xl bg-zinc-400">
                            Rincian
                          </div>
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9484f0a1bd15e09a7c1096002431f8b87d788b5f9929d998a27a793bcf9b5999?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="object-contain mt-6 w-full border-solid aspect-[100] border-[5px] border-neutral-200 stroke-[5px] stroke-neutral-200 max-md:max-w-full"
                      />
                      <div className="mt-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="max-md:mt-10 max-md:max-w-full">
                              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                                  <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f95ba14d93b9107cb46a5eb1ddceb915db7802f9958e64040283ba3db39eabd7?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="shrink-0 max-w-full aspect-square w-[169px] max-md:mt-10"
                                  />
                                </div>
                                <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                                  <div className="flex flex-col text-base leading-4 text-neutral-700 max-md:mt-10">
                                    <div className="text-2xl font-bold">
                                      Limbah Kardus
                                    </div>
                                    <div className="flex gap-3 mt-2.5">
                                      <div className="flex gap-1.5 whitespace-nowrap">
                                        <div>Kuantitas</div>
                                        <div>:</div>
                                      </div>
                                      <div>10 kg</div>
                                    </div>
                                    <div className="flex gap-3 mt-2.5">
                                      <div className="flex gap-1.5 whitespace-nowrap">
                                        <div>Harga</div>
                                        <div>:</div>
                                      </div>
                                      <div>Rp 40.000</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2522db67428519a0e5a52383225c814769d49440f6b8874fede2ec39bc134f36?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="self-center border-solid aspect-[0.06] border-[1.5px] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[2px]"
                                  />
                                </div>
                                <div className="flex flex-col self-start mt-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl">Disiapkan</div>
                                  <div className="mt-1.5 text-sm">
                                    Sedang dilakukan pengemasan pada PT
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2522db67428519a0e5a52383225c814769d49440f6b8874fede2ec39bc134f36?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="self-center border-solid aspect-[0.06] border-[1.5px] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[2px]"
                                  />
                                </div>
                                <div className="flex flex-col self-start mt-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl">Dikirim</div>
                                  <div className="mt-1.5 text-sm">
                                    Sedang dilakukan pengiriman di pusat
                                    penyortitan Pontianak Pusat
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2522db67428519a0e5a52383225c814769d49440f6b8874fede2ec39bc134f36?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    className="self-center border-solid aspect-[0.06] border-[1.5px] border-neutral-700 stroke-[2px] stroke-neutral-700 w-[2px]"
                                  />
                                </div>
                                <div className="flex flex-col self-start mt-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl max-md:max-w-full">
                                    Dikirim
                                  </div>
                                  <div className="mt-0 text-sm max-md:max-w-full">
                                    Barang telah tiba dilokasi menggunakan
                                    pengangkutan Pick Up
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col max-w-[27px]">
                                  <div className="shrink-0 rounded-full border-solid bg-zinc-400 border-[5px] border-neutral-700 h-[27px] w-[27px]" />
                                </div>
                                <div className="flex flex-col self-start mt-0 leading-[100%] text-neutral-800 max-md:max-w-full">
                                  <div className="text-xl max-md:max-w-full">
                                    Dikirim
                                  </div>
                                  <div className="mt-0 text-sm max-md:max-w-full">
                                    Barang sedang dilakukan pengantaran menuju
                                    lokasi penerima
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-center self-start p-4 mt-6 text-xl leading-5 rounded-xl bg-neutral-700 text-stone-200">
                        Pengiriman dalam kota
                      </div>
                      <div className="flex gap-1.5 self-start p-4 mt-6 text-xl leading-5 rounded-xl bg-neutral-700 text-stone-200 max-md:flex-wrap">
                        <div>Estimasi waktu pesanan tiba pada</div>
                        <div className="font-bold">15/02/25 16:04 PM </div>
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
