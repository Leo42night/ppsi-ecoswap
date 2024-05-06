import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";
import SideBarAdmin from "@/Components/SideBarAdmin";

export default function Dashboard({ auth }) {
  return (
    <AdminLayout
      user={auth.user}
      // header={
      //   <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
      // }
    >
      <Head title="Admin Dashboard" />
      <div className="flex flex-col justify-center bg-[#EEF0E5]">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {/* Side bar Untuk Admin */}
            <SideBarAdmin user={auth.user}/>
            <div className="flex flex-col p-12 max-md:px-5">
              <div className="text-2xl font-semibold leading-6 text-neutral-700 max-md:max-w-full">
                Selamat datang kembali,
                <span className="font-bold"> {auth.user.name}</span>
              </div>
              <div className="mt-3 text-base leading-4 text-neutral-700 max-md:max-w-full">
                Ringkasan seluruh toko
              </div>
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#304D30] text-stone-200 max-md:px-5 max-md:mt-6">
                      <div className="flex gap-2.5 self-stretch">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8b06ecae4ab8838c091e0c97ff4edc2b0fb81067d3e53d2511768bfd756101d?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Total Profit</div>
                      </div>
                      <div className="mt-6 text-2xl font-semibold">
                        Rp 2.920.000
                      </div>
                      <div className="mt-3">+4.2%</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch p-6 w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div className="flex gap-5 justify-between max-md:flex-wrap">
                        <div className="font-bold">$ Dana Transaksi</div>
                      </div>
                      <div className="mt-6 text-2xl font-semibold max-md:max-w-full">
                        Rp 5.234.0000
                      </div>
                      <div className="mt-3 max-md:max-w-full">+ Rp 200.000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:mt-6">
                      <div className="flex gap-3 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94a6e7d418d89d4c8a325d0f51071481d605f574a5a702315cc5fc417d8baa2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Terjual</div>
                      </div>
                      <div className="mt-6 text-2xl font-semibold">1.020 Kg</div>
                      <div className="mt-6">Jumlah sampah terjual</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch p-6 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div className="flex gap-3 text-base leading-4 text-neutral-700 max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdfa7859ee3070c18d29deb49cf95deeab56084dcd6cea10183189361001cec?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto max-md:max-w-full">
                          Total transaksi
                        </div>
                      </div>
                      <div className="mt-6 text-2xl font-semibold leading-6 text-neutral-700 max-md:max-w-full">
                        215 Transaksi
                      </div>
                      <div className="mt-6 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-700 max-md:mt-6">
                              <div className="text-base">Selesai</div>
                              <div className="mt-3 text-2xl font-semibold">200</div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-700 max-md:mt-6">
                              <div className="text-base">Proses</div>
                              <div className="mt-3 text-2xl font-semibold">15</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch p-6 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div className="flex gap-3 text-base leading-4 text-neutral-700 max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9dcdee9a1c944a837d2eae5ce1d3499642d3c3ff8e15beba63b86cc639fb2b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto max-md:max-w-full">
                          Jumlah User Website
                        </div>
                      </div>
                      <div className="mt-6 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow leading-[100%] text-neutral-700 max-md:mt-6">
                              <div className="flex flex-col justify-center py-6 text-center whitespace-nowrap rounded-xl bg-stone-200">
                                <div className="text-base">Pembeli</div>
                                <div className="mt-3 text-2xl font-semibold">
                                  207
                                </div>
                              </div>
                              <div className="flex gap-3 justify-center px-14 mt-3 text-base max-md:px-5">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ceb0d76128ffcdcdbba8dac18746b1b3ad1bac32b867f86a5617b8c588d9cde?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                  className="shrink-0 aspect-square w-[31px]"
                                />
                                <div className="my-auto">+ 5 Pembeli</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow leading-[100%] text-neutral-700 max-md:mt-6">
                              <div className="flex flex-col justify-center py-6 text-center whitespace-nowrap rounded-xl bg-stone-200">
                                <div className="text-base">Penjual</div>
                                <div className="mt-3 text-2xl font-semibold">
                                  119
                                </div>
                              </div>
                              <div className="flex gap-3 justify-center px-14 mt-3 text-base max-md:px-5">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ceb0d76128ffcdcdbba8dac18746b1b3ad1bac32b867f86a5617b8c588d9cde?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                  className="shrink-0 aspect-square w-[31px]"
                                />
                                <div className="my-auto">+ 1 Penjual</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:mt-6">
                      <div className="flex gap-3 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/563ce8e7fa5d87f05a3b758b3aa90a9724e4cf91707abb75affd30d64557fe4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Pengunjung</div>
                      </div>
                      <div className="mt-6 text-2xl font-semibold text-center">
                        207
                      </div>
                      <div className="flex gap-3 justify-center px-20 mt-3 max-md:px-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ceb0d76128ffcdcdbba8dac18746b1b3ad1bac32b867f86a5617b8c588d9cde?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          className="shrink-0 aspect-square w-[31px]"
                        />
                        <div className="my-auto">+ 5 Tamu</div>
                      </div>
                      <div className="mt-3 leading-4 text-center">
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