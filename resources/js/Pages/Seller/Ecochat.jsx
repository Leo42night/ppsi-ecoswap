import SideBarSeller from "@/Components/SideBarSeller";
import AuthenticatedSeller from "@/Layouts/AuthenticatedSeller";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedSeller
      user={auth.user}
    >
      <div className="flex flex-col bg-[#EEF0E5]">
        <div className="w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarSeller user={auth.user} />
            <div className="flex flex-col pt-8 max-w-[146px] -mr-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9efe9543aa1e1ad48fbc269962df3b6186ce90b188a705aab43c882c1666e76a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                className="self-end aspect-square w-[104px]"
              />
              <div className="flex flex-col items-end pb-4 mt-12 w-full">
                <div className="flex flex-col justify-center items-start self-start p-2.5 ml-4 rounded-xl bg-[#B6C4B6]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    className="rounded-full aspect-w-16 aspect-h-9 w-[70px]"
                  />
                </div>

                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  className="mt-9 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  className="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  className="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  className="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  className="mt-11 mr-5 rounded-full aspect-square w-[70px]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-1 w-[64%] max-md:ml-0 max-md:w-full h-full">
              <div className="flex flex-col pt-3 py-2 w-full bg-[#B6C4B6] max-md:max-w-full">
                <div className="flex gap-5 justify-between self-center w-full max-w-[850px] max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-5 px-px py-3.5 leading-[100%] text-neutral-800 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      className="shrink-0 rounded-full aspect-square w-[70px]"
                    />
                    <div className="flex flex-col my-auto">
                      <div className="text-2xl font-bold">PT Tanarayan</div>
                      <div className="mt-2.5 text-base">
                        Terakhir dilihat pukul 13:38
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center px-4 my-auto rounded-xl bg-stone-200 h-[54px] w-[54px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/001e7a75091e6336b7af1388ca529b2067139dcb6bca2bf8cf133acb6d2a41a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      className="w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-16 pt-12 pb-20 w-full text-base bg-[#DFE4DF] text-neutral-800 max-md:px-5 max-md:max-w-full">
                <div className="justify-center px-5 py-3.5 leading-4 bg-white rounded-xl max-md:mr-2 max-md:max-w-full">
                  Hallo, Selamat siang PT Angkasa Raya saya sedang mencari
                  sampah plastik sebanyak 30kg, Apakah anda
                  <br />
                  memiliki stok limbah tersebut??
                </div>
                <div className="justify-center self-end px-5 py-3.5 mt-6 mb-80 bg-emerald-100 rounded-xl leading-[100%] max-md:mr-2 max-md:mb-10 max-md:max-w-full">
                  Hallo PT Tanarayan, mohon maaf saya tidak memiliki limbah
                  tersebut.
                </div>
              </div>
              <div className="flex flex-col justify-center px-16 py-10 w-full bg-[#DFE4DF] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-2.5 max-md:flex-wrap">
                  <div className="px-5 py-3.5 text-base leading-4 bg-white rounded-xl text-neutral-800 max-md:pr-5 max-md:max-w-full h-[54px] w-[1005px]">
                    Ketikan Pesan Anda...
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex justify-center items-center px-3 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fce715b0acabac7b50e3c2e0f3df9272b035e42fb9a9c06c59de7927f065b40?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="flex justify-center items-center py-3.5 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a979737f4c29ae13a40dacecb933b4b24fa00194affe56cc6cdfb983074cc797?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        className="w-6 aspect-square"
                      />
                    </div>
                    <div className="flex justify-center items-center px- py-3.5 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2b8ee04c1c05ede7e98c11486ec405c0e76ff04c4e04578065822b19346f4a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        className="w-6 aspect-[0.93]"
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
    </AuthenticatedSeller>
  );
}
