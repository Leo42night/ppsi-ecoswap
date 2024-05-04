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
      <div class="flex gap-5 justify-between px-20 py-4 w-full shadow-lg bg-[#EEF0E5] leading-[100%] text-neutral-700 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div class="flex gap-3 my-auto text-2xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/978c1de794aa8f8e7da18c343e08cc01b3b182be3a62608bbc53c363059b3227?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="shrink-0 aspect-[0.73] w-[35px]"
          />
          <div class="my-auto">
            <span class="font-bold">Eco</span>
            Swap
          </div>
        </div>
        <div class="flex gap-5 justify-between items-center text-base whitespace-nowrap">
          <div class="justify-center self-stretch px-6 py-3 my-auto border-2 border-solid border-neutral-700 rounded-[42px] max-md:px-5">
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
              <div class="flex flex-col grow px-6 py-12 w-full text-base leading-4 bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:max-w-full">
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
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8b3fbb1318578db2f4720be6cc52a773b9bc06e6317631a16893db0fc3aee9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Kelola Akun</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0dddfbb41ede7096e3476f9f65f39131bd511aa2ca6b4755f6ad15f859ff116?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Data Pembeli</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e21cd2a5567e5a7e1682685569d5c616361b41be323218cb27ec2ab50988457a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Data Penjual</div>
                </div>
                <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf1c88cbdb4fb172208cbaa546630fc50863cb9b39ae36d440a7b3dd55539694?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-6 aspect-square"
                  />
                  <div class="my-auto">Log Out</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col p-12 max-md:px-5">
              <div class="text-2xl font-semibold leading-6 text-neutral-700 max-md:max-w-full">
                Selamat datang kembali,
                <span class="font-bold"> Admin001</span>
              </div>
              <div class="mt-3 text-base leading-4 text-neutral-700 max-md:max-w-full">
                Ringkasan seluruh toko
              </div>
              <div class="mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow items-start self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#304D30] text-stone-200 max-md:px-5 max-md:mt-6">
                      <div class="flex gap-2.5 self-stretch">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8b06ecae4ab8838c091e0c97ff4edc2b0fb81067d3e53d2511768bfd756101d?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-0 w-6 aspect-square"
                        />
                        <div class="my-auto">Total Profit</div>
                      </div>
                      <div class="mt-6 text-2xl font-semibold">
                        Rp 2.920.000
                      </div>
                      <div class="mt-3">+4.2%</div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch p-6 w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div class="flex gap-5 justify-between max-md:flex-wrap">
                        <div class="font-bold">$ Dana Transaksi</div>
                      </div>
                      <div class="mt-6 text-2xl font-semibold max-md:max-w-full">
                        Rp 5.234.0000
                      </div>
                      <div class="mt-3 max-md:max-w-full">+ Rp 200.000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:mt-6">
                      <div class="flex gap-3 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94a6e7d418d89d4c8a325d0f51071481d605f574a5a702315cc5fc417d8baa2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-0 w-6 aspect-square"
                        />
                        <div class="my-auto">Terjual</div>
                      </div>
                      <div class="mt-6 text-2xl font-semibold">1.020 Kg</div>
                      <div class="mt-6">Jumlah sampah terjual</div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch p-6 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div class="flex gap-3 text-base leading-4 text-neutral-700 max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdfa7859ee3070c18d29deb49cf95deeab56084dcd6cea10183189361001cec?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-0 w-6 aspect-square"
                        />
                        <div class="my-auto max-md:max-w-full">
                          Total transaksi
                        </div>
                      </div>
                      <div class="mt-6 text-2xl font-semibold leading-6 text-neutral-700 max-md:max-w-full">
                        215 Transaksi
                      </div>
                      <div class="mt-6 max-md:max-w-full">
                        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div class="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-700 max-md:mt-6">
                              <div class="text-base">Selesai</div>
                              <div class="mt-3 text-2xl font-semibold">200</div>
                            </div>
                          </div>
                          <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div class="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-700 max-md:mt-6">
                              <div class="text-base">Proses</div>
                              <div class="mt-3 text-2xl font-semibold">15</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div class="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch p-6 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div class="flex gap-3 text-base leading-4 text-neutral-700 max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9dcdee9a1c944a837d2eae5ce1d3499642d3c3ff8e15beba63b86cc639fb2b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-0 w-6 aspect-square"
                        />
                        <div class="my-auto max-md:max-w-full">
                          Jumlah User Website
                        </div>
                      </div>
                      <div class="mt-6 max-md:max-w-full">
                        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div class="flex flex-col grow leading-[100%] text-neutral-700 max-md:mt-6">
                              <div class="flex flex-col justify-center py-6 text-center whitespace-nowrap rounded-xl bg-stone-200">
                                <div class="text-base">Pembeli</div>
                                <div class="mt-3 text-2xl font-semibold">
                                  207
                                </div>
                              </div>
                              <div class="flex gap-3 justify-center px-14 mt-3 text-base max-md:px-5">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ceb0d76128ffcdcdbba8dac18746b1b3ad1bac32b867f86a5617b8c588d9cde?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                  class="shrink-0 aspect-square w-[31px]"
                                />
                                <div class="my-auto">+ 5 Pembeli</div>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div class="flex flex-col grow leading-[100%] text-neutral-700 max-md:mt-6">
                              <div class="flex flex-col justify-center py-6 text-center whitespace-nowrap rounded-xl bg-stone-200">
                                <div class="text-base">Penjual</div>
                                <div class="mt-3 text-2xl font-semibold">
                                  119
                                </div>
                              </div>
                              <div class="flex gap-3 justify-center px-14 mt-3 text-base max-md:px-5">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ceb0d76128ffcdcdbba8dac18746b1b3ad1bac32b867f86a5617b8c588d9cde?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                  class="shrink-0 aspect-square w-[31px]"
                                />
                                <div class="my-auto">+ 1 Penjual</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:mt-6">
                      <div class="flex gap-3 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/563ce8e7fa5d87f05a3b758b3aa90a9724e4cf91707abb75affd30d64557fe4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-0 w-6 aspect-square"
                        />
                        <div class="my-auto">Pengunjung</div>
                      </div>
                      <div class="mt-6 text-2xl font-semibold text-center">
                        207
                      </div>
                      <div class="flex gap-3 justify-center px-20 mt-3 max-md:px-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ceb0d76128ffcdcdbba8dac18746b1b3ad1bac32b867f86a5617b8c588d9cde?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-0 aspect-square w-[31px]"
                        />
                        <div class="my-auto">+ 5 Tamu</div>
                      </div>
                      <div class="mt-3 leading-4 text-center">
                        Lebih banyak orang mengunjungi anda!
                      </div>
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