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
      <div className="flex flex-col bg-[#DFE4DF]">
        <div className="pb-20 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarSeller user={auth.user} />
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
                          <div className="p-6 rounded-xl bg-[#B6C4B6] max-w-[941px] max-md:px-5 ">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full ">
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d4a4c4d1f9f02aa1c7c05a38e31a71ef7da327b85ef92f146a55dabf587fdb3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                  className="shrink-0 max-w-full shadow-lg aspect-square rounded-[300px] w-[204px] max-md:mt-10"
                                />
                              </div>
                              <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col items-start pr-20 pb-3 text-4xl font-bold leading-10 text-[#304D30] max-md:mt-10 max-md:max-w-full">
                                  <div>Nama Toko</div>
                                  <div className="mt-3 text-2xl text-black">
                                    PT Angkasa Raya
                                  </div>
                                  <div className="mt-9 max-md:max-w-full">
                                    Domain Toko
                                  </div>
                                  <div className="mt-3 text-2xl text-black max-md:max-w-full">
                                    www.ecoswap.com/PTAngkasaRaya
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <br></br>

                          <div className="flex flex-col items-start p-6 text-4xl font-bold leading-10 rounded-xl bg-[#B6C4B6] max-w-[706px] text-[#304D30]   max-md:px-5">
                            <div>Jam Operasional</div>
                            <div className="mt-3 text-2xl text-black">
                              09:00-21:00
                            </div>
                            <div className="mt-9">Alamat</div>
                            <div className="flex gap-2.5 justify-center mt-3 text-2xl text-neutral-800">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16dcc858fd06ccd0fc4e814ac890c10267f716927f74d7fe99d995f853c6be1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                className="shrink-0 aspect-[1.1] w-[33px]"
                              />
                              <div className="my-auto">
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
                        <div className="justify-center self-start px-6 py-2.5 mt-12 text-white whitespace-nowrap rounded-xl bg-[#163020] max-md:px-5 max-md:mt-10">
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
