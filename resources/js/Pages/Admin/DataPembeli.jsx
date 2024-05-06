import SideBarAdmin from "@/Components/SideBarAdmin";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function DataPembeli({ auth }) {
  return (
    <AdminLayout user={auth.user}>
      <Head title="Data Pembeli" />
      <div class="flex flex-col justify-center bg-[#EEF0E5]">
        <div class="w-full max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarAdmin user={auth.user}/>

            <div class="flex flex-col grow px-12 pt-12 w-full bg-[#EEF0E5] max-md:px-5 max-md:max-w-full">
              <div class="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
                Data Pembeli
              </div>
              <div class="mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow justify-center py-6 w-full text-center rounded-xl bg-[#B6C4B6] leading-[100%] text-neutral-700 max-md:mt-3 max-md:max-w-full">
                      <div class="text-base max-md:max-w-full">Pembeli</div>
                      <div class="mt-3 text-2xl font-semibold max-md:max-w-full">
                        207 Akun
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex grow justify-center items-center self-stretch p-6 w-full text-center rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-5 max-md:mt-3 max-md:max-w-full">
                      <div class="flex gap-3">
                        <div class="text-2xl font-semibold text-neutral-700">
                          50
                        </div>
                        <div class="my-auto text-base text-neutral-700">
                          Pengguna Sedang
                          <span class="font-bold text-neutral-700"> Aktif</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-5 justify-center py-6 mt-6 text-base leading-4 text-black max-md:flex-wrap">
                <div class="flex-1 my-auto text-2xl font-semibold">
                  Semua Pembeli
                </div>
                <div class="flex gap-3 px-6 py-3 rounded-md bg-zinc-300 text-neutral-700 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/36453ad7aef429aee4cfdc88ba850d2bc02211edbb301984462cba102ec9f66d?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto text-left px-36">Cari Pembeli</div>
                </div>
                <div class="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-4">
                  Edit
                </div>
                <div class="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-5">
                  Hapus
                </div>
              </div>

              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Nama
                      </th>
                      <th class="px-8 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Telepon
                      </th>
                      <th class="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Followers
                      </th>
                      <th class="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Status
                      </th>
                      <th class="px-8 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Terdaftar
                      </th>
                      <th class="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Alamat
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div class="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div class="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div class="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div class="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>

                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Sedang Aktif
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Penjual
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                    <tr>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div class="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div class="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div class="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div class="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md text-black text-center">
                          Offline
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Penjual
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                    <tr>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div class="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div class="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div class="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div class="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Sedang Aktif
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Penjual
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                    <tr>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div class="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div class="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div class="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div class="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Sedang Aktif
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>

                    <tr>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div class="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div class="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div class="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div class="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md text-black text-center">
                          Offline
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                      <div class="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                        <div class="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                          <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="object-cover absolute inset-0 size-full"
                          />
                          <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="z-10 -mt-2 w-full aspect-square"
                          />
                        </div>
                        <div class="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                          <div class="font-normal">Teresia Amelia</div>
                          <div>teresia.amelia@gmail.com</div>
                        </div>
                      </div>
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                      0812345678910
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                      2003
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md text-black text-center">
                        Offline
                      </div>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                        Penjual
                      </div>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                      Jl. Prof. M. Yamin No. 30K
                    </td>
                    <tr>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div class="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div class="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              class="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div class="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div class="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Sedang Aktif
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
