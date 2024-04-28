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
      <div className="flex flex-col bg-[#DFE4DF]">
        <div className="pb-20 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full bg-[#DFE4DF]">
              <div className="flex flex-col p-12 w-full text-1xl leading-6 text-black bg-[#DFE4DF] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-center mt-1 text-4xl font-semibold text-[#163020]">
                  EcoSeller’s
                </div>
                <div className="shrink-0 mt-6 h-0.5 rounded-md bg-zinc-400" />
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
                  <a href={route("seller-tambah")}>Tambah Produk</a>
                </div>
                <div className="flex gap-2.5 justify-center self-center p-2.5 mt-3 max-w-full w-[303px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fb128bd5bdb3f5b2c93d759fff54d43678537018dc149905dec036abef49b4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <a href={route("seller-daftar")} className="flex-1">
                    Daftar Produk
                  </a>
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
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right font-bold whitespace-nowrap">
                  <div className="shrink-0 w-0.5 rounded-md bg-neutral-800 h-[25px] " />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a8629650582e540d21d4f4b35cc750e9da4d6e52537db339e9e88dcc833ebb?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    class="shrink-0 self-start aspect-[0.96] w-[23px] font-bold"
                  />

                  <div>Settings</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full bg-[#EEF0E5]">
              <div className="flex flex-col p-12 max-md:px-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex flex-col grow shrink-0 self-end basis-0 w-fit max-md:mt-120 max-md:max-w-full">
                    <div className="text-5xl font-bold leading-[49px] text-[#304D30] max-md:max-w-full max-md:text-4xl">
                      Pengaturan
                    </div>
                    <div className="flex flex-col items-start py-5 pr-20 max-md:pr-5 ">
                      <div className="mt-12 text-2xl font-bold leading-8 text-[#304D30] max-md:mt-10 max-md:ml-2.5 ">
                        Pengaturan Toko
                      </div>
                      <div className="flex justify-center items-center mt-6 max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col w-full max-w-[1074px] max-md:max-w-full">
                          <div class="p-6 rounded-xl bg-[#B6C4B6] max-w-[941px] max-md:px-5 ">
                            <div class="flex gap-5 max-md:flex-col max-md:gap-0 ">
                              <div class="flex flex-col w-[24%] max-md:ml-0 max-md:w-full ">
                                <img
                                  loading="lazy"
                                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                  class="shrink-0 max-w-full shadow-lg aspect-square rounded-[300px] w-[204px] max-md:mt-10"
                                />
                              </div>
                              <div class="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                                <div class="flex flex-col items-start pr-20 pb-3 text-4xl font-bold leading-10 text-[#304D30] max-md:mt-10 max-md:max-w-full">
                                  <div>Nama Toko</div>
                                  <div class="mt-3 text-2xl text-black">
                                    PT Angkasa Raya
                                  </div>
                                  <div class="mt-9 max-md:max-w-full">
                                    Domain Toko
                                  </div>
                                  <div class="mt-3 text-2xl text-black max-md:max-w-full">
                                    www.ecoswap.com/PTAngkasaRaya
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <br></br>

                          <div class="flex flex-col items-start p-6 text-4xl font-bold leading-10 rounded-xl bg-[#B6C4B6] max-w-[706px] text-[#304D30]   max-md:px-5">
                            <div>Jam Operasional</div>
                            <div class="mt-3 text-2xl text-black">
                              09:00-21:00
                            </div>
                            <div class="mt-9">Alamat</div>
                            <div class="flex gap-2.5 justify-center mt-3 text-2xl text-neutral-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16dcc858fd06ccd0fc4e814ac890c10267f716927f74d7fe99d995f853c6be1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                class="shrink-0 aspect-[1.1] w-[33px]"
                              />
                              <div class="my-auto">
                                Pontianak, Kalimantan Barat
                              </div>
                            </div>
                          </div>

                          <div className="justify-center self-start px-6 py-2.5 mt-12 text-white whitespace-nowrap rounded-xl bg-[#163020] max-md:px-5 max-md:mt-10">
                            Ubah
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col self-center p-6 mt-6 w-full text-lg leading-7 rounded-xl bg-[#B6C4B6] max-w-[1198px] text-[#304D30] max-md:px-5 max-md:max-w-full">
                        <div className="text-2xl font-bold max-md:max-w-full">
                          Slogan
                        </div>
                        <div className="justify-center px-4 py-2 mt-3 leading-6 text-black bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                          Lorem ipsum dolor sit amet consectetur adipiscing elit
                          Ut et massa mi..<br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                        </div>
                        <div className="mt-8 text-2xl font-bold max-md:mt-6 max-md:max-w-full">
                          Deskripsi
                        </div>
                        <div className="justify-center px-4 py-2 mt-3 leading-6 text-black bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                          Lorem ipsum dolor sit amet consectetur adipiscing elit
                          Ut et massa mi..<br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                        </div>
                        <div class="justify-center self-start px-6 py-2.5 mt-12 text-white whitespace-nowrap rounded-xl bg-[#163020] max-md:px-5 max-md:mt-10">
                          Simpan
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start py-5 pr-20 max-md:pr-5">
                      <div className="text-xl font-bold text-[#304D30]">
                        Pengaturan Bahasa
                      </div>
                      <div className="flex gap-4 justify-between mt-4 max-w-full text-lg whitespace-nowrap w-[100px]">
                        <div className="justify-center px-4 py-2.5 text-white rounded-xl bg-[#163020] max-md:px-5">
                          Indonesia
                        </div>
                        <div className="justify-center px-4 py-2.5 rounded-xl border-solid border-[3px] border-neutral-800 text-neutral-800 max-md:px-5">
                          Inggris
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start py-5 pr-20 max-md:pr-5">
                      <div className="text-xl font-bold text-[#304D30]">
                        Mode Libur
                      </div>
                      <div className="flex gap-4 justify-between mt-4 max-w-full text-lg whitespace-nowrap w-[100px]">
                        <div className="flex gap-4 justify-between mt-4 max-w-full text-lg w-[150px]">
                          <div className="justify-center px-4 py-2.5 whitespace-nowrap rounded-xl border-solid border-[3px] border-neutral-800 text-neutral-800 max-md:px-5">
                            Aktif
                          </div>
                          <div className="justify-center px-4 py-2.5 rounded-xl border-solid bg-[#163020] border-[3px] border-neutral-800 text-neutral-200 max-md:px-5">
                            Tidak Aktif
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
      </div>
    </AuthenticatedSeller>
  );
}
