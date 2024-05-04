import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AdminLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
      }
    >
    <div class="flex gap-5 justify-between px-20 py-4 w-full shadow-lg bg-[#EEF0E5] leading-[100%] text-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div class="flex gap-3 my-auto text-2xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1723ae908a27f08056c0ef999bc0785cb4b70d4ee43fc1a74ad9d28b11ae4739?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="shrink-0 aspect-[0.73] w-[35px]"
          />
          <div class="my-auto">
            <span class="font-bold">Eco</span>
            Swap
          </div>
        </div>
        <div class="flex gap-5 justify-between items-center text-base whitespace-nowrap">
          <div class="justify-center self-stretch px-6 py-3 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md:px-5">
            Kelola
          </div>
          <div class="self-stretch my-auto">Katalog</div>
          <img
            loading="lazy"
            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/087df69d76b85d7660e571f645e1fd4992b939d4ba5bcb86bbf724ea9f38ed37?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="shrink-0 self-stretch w-16 aspect-square"
          />
        </div>
      </div>

      <div class="flex flex-col justify-center bg-[#EEF0E5]">
        <div class="w-full max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-6 py-12 w-full text-base leading-4 bg-[#B6C4B6] text-black max-md:px-5 max-md:max-w-full">
                <div class="flex flex-col p-6 mx-6 font-semibold text-center rounded-md bg-[#304D30] text-stone-200 max-md:px-5 max-md:mx-2.5">
                  <div class="text-2xl">Admin</div>
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb72d59c98a3563b0d31822092e79da203ffe6c52cf4a0c66d8348874cff0c3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="self-center mt-3 w-16 aspect-square"
                  />
                  <div class="mt-3">Admin 001</div>
                  <div class="mt-3">robert.kenrick@gmail.com</div>
                </div>

                <div class="shrink-0 mx-6 mt-6 max-w-full h-0.5 rounded-md w-[336px] max-md:mx-2.5"></div>
                <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b967836876c407c047fd4ab553d87002e0aece3da713a7d405396f71ac225c2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Dashboard</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7da9cd378f20ceabd904b495c1b18085bcab23f09218536fb91eb5c3e8a13403?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Kelola Akun</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a1d1240863ebef732c04c622519b2956566caa6dd17bd32c658a29ce8368e0?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Data Pembeli</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87c343afe44a981eb4f75b20dfa32174789451e5517d92315b82626254321256?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Data Penjual</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
                  <div class="shrink-0 w-0.5 h-6 rounded-md bg-black"></div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7df35549ebced315d4cd680f31cdc6ea357006de0895dc2acf776a3e12ce0a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Kelola EcoDu</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc39f394c0180402bcfd7e34330714000c3231162e0e1668820c6b7dd4ac30e3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Kelola Harga</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6f411f3f7ecaec38dab484cf73761d2b3b4a8dc49be6fb4dbc9a3f5b1494d03?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Log Out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
