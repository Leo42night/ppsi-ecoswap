import SideBarAdmin from "@/Components/SideBarAdmin";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function KelolaEcodu({ auth }) {
  return (
    <AdminLayout user={auth.user}>
      <Head title="Kelola EcoDu" />
      <div class="flex flex-col justify-center bg-[#EEF0E5]">
        <div class="w-full max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarAdmin user={auth.user}/>

            <div class="flex flex-col grow px-12 pt-12 w-full bg-[#EEF0E5] max-md:px-5 max-md:max-w-full">
              <div class="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
                Kelola EcoDu
              </div>
              <div class="flex gap-5 justify-center py-6 mt-6 text-base leading-4 text-black max-md:flex-wrap">
                <div class="flex-1 my-auto text-2xl font-semibold"></div>
                <div class="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-4">
                  Tambah
                </div>
                <div class="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-4">
                  Edit
                </div>
                <div class="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-5">
                  Hapus
                </div>
              </div>
              <div class="mt-12 text-2xl font-semibold leading-6 text-black max-md:mt-10 max-md:max-w-full">
                Video
              </div>
              <div class="flex flex-col justify-center mt-6 bg-[#304D30] rounded-xl max-md:max-w-full">
                <div class="shrink-0 h-80 bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)] max-md:max-w-full"></div>
              </div>
              <div class="mt-6 text-xl leading-5 text-black max-md:max-w-full">
                Judul Video
              </div>
              <div class="justify-center p-2.5 mt-6 text-base leading-4 text-black bg-white rounded-xl max-md:max-w-full">
                Lorem ipsum dolor sit amet.
              </div>
              <div class="mt-12 text-2xl font-semibold leading-6 text-black max-md:mt-10 max-md:max-w-full">
                Fakta
              </div>
              <div class="justify-center mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch text-xl leading-5 text-black max-md:mt-6">
                      <div class="shrink-0 bg-white rounded-xl aspect-square h-[277px]"></div>
                      <div class="mt-6">Judul</div>
                      <div class="justify-center px-3.5 py-3 mt-6 text-base bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-6">Deskripsi</div>
                      <div class="justify-center px-3.5 py-3 mt-6 text-base leading-4 bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch text-xl leading-5 text-black max-md:mt-6">
                      <div class="shrink-0 bg-white rounded-xl aspect-square h-[277px]"></div>
                      <div class="mt-6">Judul</div>
                      <div class="justify-center px-3.5 py-3 mt-6 text-base bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-6">Deskripsi</div>
                      <div class="justify-center px-3.5 py-3 mt-6 text-base leading-4 bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch text-xl leading-5 text-black max-md:mt-6">
                      <div class="shrink-0 bg-white rounded-xl aspect-square h-[277px]"></div>
                      <div class="mt-6">Judul</div>
                      <div class="justify-center px-3.5 py-3 mt-6 text-base bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-6">Deskripsi</div>
                      <div class="justify-center px-3.5 py-3 mt-6 text-base leading-4 bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-12 text-2xl font-semibold leading-6 text-black max-md:mt-10 max-md:max-w-full">
                Edukasi 2
              </div>
              <div class="justify-center mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow text-black leading-[100%] max-md:mt-6 max-md:max-w-full">
                      <div class="shrink-0 bg-white rounded-xl h-[420px] max-md:max-w-full"></div>
                      <div class="mt-6 text-xl max-md:max-w-full">Judul</div>
                      <div class="justify-center py-2.5 mt-6 text-base bg-white rounded-xl max-md:max-w-full">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch pb-2 text-xl leading-5 text-black max-md:mt-6 max-md:max-w-full">
                      <div class="max-md:max-w-full">SubJudul</div>
                      <div class="justify-center p-2.5 mt-3 text-base bg-white rounded-xl max-md:max-w-full">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-3 max-md:max-w-full">SubDeskripsi</div>
                      <div class="justify-center px-2.5 pt-2.5 pb-7 mt-3 text-base bg-white rounded-xl max-md:max-w-full">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-12 max-md:mt-10 max-md:max-w-full">
                        SubJudul
                      </div>
                      <div class="justify-center p-2.5 mt-3 text-base bg-white rounded-xl max-md:max-w-full">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-3 max-md:max-w-full">SubDeskripsi</div>
                      <div class="justify-center px-2.5 pt-2.5 pb-7 mt-3 text-base bg-white rounded-xl max-md:max-w-full">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-12 text-2xl font-semibold leading-6 text-black max-md:mt-10 max-md:max-w-full">
                Rekomendasi Blog
              </div>
              <div class="justify-center mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow text-xl leading-5 text-black max-md:mt-6">
                      <div>Link Blog</div>
                      <div class="justify-center p-2.5 mt-3 text-base bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-3">Judul Blog</div>
                      <div class="justify-center p-2.5 mt-3 text-base leading-4 bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow text-xl leading-5 text-black max-md:mt-6">
                      <div>Link Blog</div>
                      <div class="justify-center p-2.5 mt-3 text-base bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-3">Judul Blog</div>
                      <div class="justify-center p-2.5 mt-3 text-base leading-4 bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow text-xl leading-5 text-black max-md:mt-6">
                      <div>Link Blog</div>
                      <div class="justify-center p-2.5 mt-3 text-base bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <div class="mt-3">Judul Blog</div>
                      <div class="justify-center p-2.5 mt-3 text-base leading-4 bg-white rounded-xl">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
