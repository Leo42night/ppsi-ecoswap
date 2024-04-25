import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
      }
    >
      <div class="self-stretch">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <div class="flex grow gap-0 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div class="flex flex-col px-9 pt-9 pb-15 text-lg leading-4 text-black shadow-lg bg-[#EEF0E5] max-md:px-3 max-md:max-w-full">
                <div class="text-3xl font-bold text-[#304D30] max-md:text-3xl ">
                  EcoSeller’s
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/979805acc018763be408bdbf65645d767ad512bbf8519cc23edf79fdb3fe2e1a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="mt-1- w-full border-solid aspect-[100] border-[1px] border-[#B6C4B6] stroke-[1px] stroke-zinc-400 max-md:mt-10"
                />
                <div class="flex flex-col mt-9 w-full text-sm max-md:mt-7">
                  <div class="flex gap-3 justify-between px-px text-sm text-neutral-800">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecfbd54a6bbbe4817ebdc9bccbac08d477a08dc8265bdfdc229429dab3d3d943?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-20 h-20 rounded-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7e20a7baa815598f5221aebd2dd39bd1a83f924e4869e35a3aa6c10eb1c896?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 self-start border-solid aspect-[0.025] border-[1.5px] border-[#B6C4B6] stroke-[1.5px] stroke-[#B6C4B6] w-[1.5px]"
                    />
                    <div class="flex flex-col justify-center py-2 pr-4 rounded-md">
                      <div class="flex gap-1 justify-center font-semibold text-[#163020] text-xs">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d90aa50959a1acd4fe8aed12e86b50ddf42066ebefa6c5ff04514fabb978ac3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-0 w-4 aspect-[0.91]"
                        />
                        <div class="my-auto nowrap text-xs">PT Angkasa Raya</div>
                      </div>
                      <div class="flex gap-1 justify-center text-xs">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe0f071b2360a8f3cda48aa3c38159c99195b3111f9524adfb9a94c3c5af47a4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                          class="shrink-1 w-4 aspect-[0.91]"
                        />
                        <div class="my-auto nowrap">Pontianak, Kalimantan Barat</div>
                      </div>
                    </div>
                  </div>

                  <div class="flex gap-3 justify-between mt-3">
                    <div>Jam Operasional</div>
                    <div class="text-right">09:00-21:00</div>
                  </div>
                  <div class="flex gap-3 justify-between mt-3 whitespace-nowrap">
                    <div>Followers</div>
                    <div class="text-right">1000</div>
                  </div>
                </div>

                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/979805acc018763be408bdbf65645d767ad512bbf8519cc23edf79fdb3fe2e1a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="mt-12 w-full border-solid aspect-[100] border-[3px] border-[#B6C4B6] stroke-[3px] stroke-zinc-400 max-md:mt-10"
                />
                <div class="flex gap-3 mt-12 font-bold whitespace-nowrapmax-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e53af535b463e730dfc353eaa2bcc0b0f62e2fbf576c8fc64372ebc647700fa8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 w-0.5 border-solid aspect-[0.08] border-[3px] border-[#304D30] stroke-[3px] stroke-neutral-700"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f026f5d3b1e46098191549486a7034db4de18b364dc70257f5456d643d1416a3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-10 aspect-none"
                  />
                  <div>Dashboard</div>
                </div>
                <div class="flex gap-5 mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0237884c3c4241ec8b4bb9e9259677eaba70be634d945a76c3c592ab3b96c2af?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
                  />
                  <div class="justify-center">EcoPost</div>
                </div>
                <div class="flex flex-col items-start pr-12 pl-9 mt-5 max-md:px-5">
                  <div class="flex gap-3.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ea68d83838efd99244c5604c21dc9296f6f7e525d44ce4b93aede42329a933?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Tambah Produk</div>
                  </div>
                  <div class="flex gap-3.5 mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b31e0fbc1e40aeb34d6a4aefc64c30b283a871e201abc7b1cb566b6e86a0c30?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Daftar Produk</div>
                  </div>
                </div>
                <div class="flex gap-5 mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/68651086a6b7767644df71db04cb37b2e664e47d97f7472eb3ce45358eb1cee3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
                  />
                  <div class="justify-center">Ecodule</div>
                </div>
                <div class="flex flex-col items-start pr-12 pl-9 mt-5 max-md:px-5">
                  <div class="flex gap-3.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b1b878a2c145fd4fd2a049688b3be996700492438ba0068cef68ee8f573c84?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Status Pesanan</div>
                  </div>
                  <div class="flex gap-3.5 mt-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b31e0fbc1e40aeb34d6a4aefc64c30b283a871e201abc7b1cb566b6e86a0c30?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Daftar Pesanan</div>
                  </div>
                </div>
                <div class="flex gap-3.5 mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/926a56bfddbcdc64502a5274f4d0d6ac2e8602e53b9604f4f1b7cd63c9a54367?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
                  />
                  <div>EcoChat</div>
                </div>
                <div class="flex gap-3.5 mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d714252adb0cbfd7504acdd1d82b2b9ca675e8919188e8dfbc610ad361e628f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
                  />
                  <div>EcoRoom</div>
                </div>

                <div class="flex gap-3.5 mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d960b98cffdc46541f29fee405ccc3ef43c7ac46a2b22d1deaa40107c0106cda?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
                  />
                  <div>Ulasan Pembeli</div>
                </div>

                <div class="flex gap-3.5 mt-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/516c8e44b645fe8e1eb266fc0bb348edc4273b100147473b8c7124e9fe0d3696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
                  />
                  <div>Settings</div>
                </div>
              </div>

              <div class="flex flex-col justify-center p-0.5 bg-white max-md:hidden">
                <div class="shrink-0 rounded-xl bg-neutral-700 h-[195px] max-md:hidden"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <div class="mt-12 text-5xl font-bold leading-[49px] text-[#304D30] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Welcome back, PT Angkasa Raya
            </div>

            <div class="px-12 py-3 mt-6 w-full max-md:px-5 max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow self-stretch pt-12 pr-6 pb-6 pl-12 w-full text-4xl font-bold leading-10 rounded-xl bg-[#163020] text-stone-200 max-md:px-5 max-md:mt-9 max-md:max-w-full">
                    <div>Saldo Anda</div>
                    <div class="mt-6">Rp 1.000.000</div>
                    <div class="mt-3 text-base tracking-tighter">+4.2%</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0dcae1875939d7ff461e63165dd15663cf67bd09fb2e0af8853399565fdf4b8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="self-end mt-6 w-12 aspect-square"
                    />
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow self-stretch px-12 pt-12 pb-8 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-9 max-md:max-w-full">
                    <div class="flex gap-5 justify-between self-start text-4xl font-bold leading-10 text-neutral-700">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c1185c4b88cdbcc0a9631071c07082c3136c6193c0afe7efeeb428238bfbf93?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-10 aspect-square"
                      />
                      <div class="text-[#304D30]">Performa Anda</div>
                    </div>
                    <div class="justify-between mt-6 max-md:max-w-full">
                      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                          <div class="flex flex-col grow text-base leading-4 text-neutral-800 max-md:mt-10">
                            <div class="flex gap-3 pr-2.5 whitespace-nowrap">
                              <div class="my-auto text-[#163020]">
                                Pengunjung
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52659bda24b4615dfe7c732f7c6cec4b3bfb924618e746b1bd3d4a448bac845?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                class="shrink-0 w-6 aspect-square fill-stone-200"
                              />
                            </div>
                            <div class="mt-6 text-4xl font-bold text-[#163020]">
                              +12
                            </div>
                            <div class="mt-3 leading-4 text-[#163020]">
                              Lebih banyak orang mengunjungi anda!
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                          <div class="flex flex-col text-base leading-4 text-neutral-800 max-md:mt-10">
                            <div class="flex gap-3 pr-7 whitespace-nowrap max-md:pr-5">
                              <div class="my-auto text-[#163020]">Terjual</div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52659bda24b4615dfe7c732f7c6cec4b3bfb924618e746b1bd3d4a448bac845?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                class="shrink-0 w-6 aspect-square fill-stone-200"
                              />
                            </div>
                            <div class="mt-6 text-4xl font-bold text-[#163020]">
                              12.5 Kg
                            </div>
                            <div class="mt-3 text-[#163020]">
                              Jumlah sampah terjual
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col ml-5 w-[49%] max-md:ml-0 max-md:w-full">
                          <div class="flex flex-col leading-[100%] text-neutral-800 max-md:mt-10">
                            <div class="flex gap-3 pr-4 text-base">
                              <div class="my-auto text-[#163020]">
                                Penjualan Diselesaikan
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52659bda24b4615dfe7c732f7c6cec4b3bfb924618e746b1bd3d4a448bac845?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                class="shrink-0 w-6 aspect-square fill-stone-200"
                              />
                            </div>
                            <div class="flex gap-5 justify-between mt-6">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de55e79f931df931894a9ad3d2f106362ec4b59ad8dfd38ec0ee7387a16ef56c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                class="shrink-0 w-16 aspect-square"
                              />
                              <div class="flex flex-col self-start">
                                <div class="text-4xl font-bold text-[#163020] ">
                                  15 Transaksi
                                </div>
                                <div class="text-base text-[#163020]">
                                  8 dari 10 Pesanan Diproses
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

            <br></br>

            <div className="px-6 pt-3 w-full max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-9 max-md:max-w-full">
                    <div className="flex flex-col pt-12 pr-4 pb-6 pl-12 text-4xl font-bold leading-10 rounded-xl bg-[#B6C4B6] text-neutral-800 max-md:pl-5 max-md:max-w-full">
                      <div className="justify-center self-start">
                        Total Produk{" "}
                      </div>
                      <div className="mt-6 max-md:max-w-full">9 Post</div>
                      <div className="flex gap-5 justify-between mt-5 text-base text-black max-md:flex-wrap max-md:max-w-full">
                        <div className="justify-center self-start px-5 py-2 rounded-xl bg-stone-200">
                          Tampilkan semua post
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb357f2d0930bf36ced707b8a6f974d53012d4cdabe57dfce4076fa23828769?apiKey=937261aeaab2482b817691a974988cbc&"
                          className="shrink-0 w-12 aspect-square"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col px-12 pt-12 mt-6 rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:max-w-full">
                      <div className="justify-center self-start text-4xl font-bold leading-10 whitespace-nowrap text-neutral-800">
                        EcoRoom
                      </div>
                      <div className="flex flex-col px-10 pt-6 mt-6 bg-white rounded-xl max-md:pl-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                          <div className="flex flex-col max-md:max-w-full">
                            <div className="flex flex-col justify-center max-md:max-w-full">
                              <div className="flex flex-col justify-center max-md:max-w-full">
                                <div className="flex gap-5 justify-center max-md:flex-wrap">
                                  <div className="flex flex-col justify-center leading-[100%] text-neutral-800">
                                    <div className="flex flex-col justify-center p-2.5 w-full bg-white rounded-xl">
                                      <div className="flex gap-5">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&"
                                          className="shrink-0 rounded-full aspect-square w-[70px]"
                                        />
                                        <div className="flex flex-col my-auto">
                                          <div className="text-2xl font-bold">
                                            PT Tanarayan
                                          </div>
                                          <div className="mt-3 text-base">
                                            Hallo, Selamat siang PT Angkasa
                                            Raya...
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-center items-center p-2.5 my-auto bg-[#B6C4B6] h-[42px] rounded-[100px] w-[42px]">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/50dfbb50eda2634e6e8a290f5cad5ce8697c0bb9c62805d1f547459ef01038cc?apiKey=937261aeaab2482b817691a974988cbc&"
                                      className="aspect-square w-[21px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-center mt-3 max-md:max-w-full">
                              <div className="flex flex-col justify-center max-md:max-w-full">
                                <div className="flex gap-5 justify-center max-md:flex-wrap">
                                  <div className="flex flex-col justify-center leading-[100%] text-neutral-800">
                                    <div className="flex flex-col justify-center p-2.5 w-full bg-white rounded-xl">
                                      <div className="flex gap-5">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&"
                                          className="shrink-0 rounded-full aspect-square w-[70px]"
                                        />
                                        <div className="flex flex-col my-auto">
                                          <div className="text-2xl font-bold">
                                            Rinata Fewanda
                                          </div>
                                          <div className="mt-3 text-base">
                                            Hallo, Selamat siang PT Angkasa
                                            Raya...
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-center items-center p-2.5 my-auto bg-[#B6C4B6] h-[42px] rounded-[100px] w-[42px]">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/50dfbb50eda2634e6e8a290f5cad5ce8697c0bb9c62805d1f547459ef01038cc?apiKey=937261aeaab2482b817691a974988cbc&"
                                      className="aspect-square w-[21px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-center mt-3 max-md:max-w-full">
                              <div className="flex flex-col justify-center max-md:max-w-full">
                                <div className="flex gap-5 justify-center max-md:flex-wrap">
                                  <div className="flex flex-col justify-center text-2xl font-bold leading-6 text-neutral-800">
                                    <div className="flex flex-col px-2.5 pt-2.5 w-full bg-white rounded-xl">
                                      <div className="flex gap-5">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6eddadc14d8799fd7e443478bec879c7d4036c3d26d3109ceea3d03f0c0db2b?apiKey=937261aeaab2482b817691a974988cbc&"
                                          className="shrink-0 rounded-full aspect-[1.75] w-[70px]"
                                        />
                                        <div className="self-start pb-2 mt-2.5">
                                          PT Angkasa Raya
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-center items-center self-end p-2.5 mt-6 bg-[#B6C4B6] rounded-[100px]">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4144c19c1e8eaa5bae22dc228ccb1754d64c2b2d26a04ea30e176df6a83a1d07?apiKey=937261aeaab2482b817691a974988cbc&"
                                      className="aspect-[1.41] w-[21px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center self-start px-0.5 bg-white">
                            <div className="shrink-0 rounded-xl bg-neutral-700 h-[88px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-12 pt-12 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-9 max-md:max-w-full">
                    <div className="flex gap-5 justify-between pr-4 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-4xl font-bold leading-10 text-neutral-800">
                        Ringkasan Pesanan
                      </div>
                      <div className="flex justify-center items-center p-2.5 bg-stone-200 h-[41px] rounded-[100px] w-[41px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/648419575008430f41b5d1b9ecc5a272200cdffd5d78a6d871ad0fd807a2b6b4?apiKey=937261aeaab2482b817691a974988cbc&"
                          className="aspect-square w-[21px]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 mt-6 whitespace-nowrap leading-[100%] text-neutral-800 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 justify-center px-11 max-md:px-5">
                        <div className="text-base">Baru</div>
                        <div className="mt-3 text-2xl font-bold">2</div>
                      </div>
                      <div className="flex flex-col flex-1 justify-center px-7 max-md:px-5">
                        <div className="text-base">Diproses</div>
                        <div className="self-center mt-3 text-2xl font-bold">
                          8
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 justify-center px-9 max-md:px-5">
                        <div className="text-base">Selesai</div>
                        <div className="mt-3 text-2xl font-bold">15</div>
                      </div>
                      <div className="flex flex-col flex-1 justify-center px-6 max-md:px-5">
                        <div className="text-base">Dibatalkan</div>
                        <div className="self-center mt-3 text-2xl font-bold">
                          0
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-10 pt-6 mt-6 bg-white rounded-xl max-md:pl-5 max-md:max-w-full">
                      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col leading-[100%] max-md:max-w-full">
                          <div className="flex flex-col justify-center p-2.5 bg-white rounded-xl max-md:max-w-full">
                            <div className="flex gap-5 items-center pr-2 max-md:flex-wrap">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=937261aeaab2482b817691a974988cbc&"
                                className="shrink-0 self-stretch rounded-full aspect-square w-[70px]"
                              />
                              <div className="flex flex-col self-stretch my-auto text-neutral-800">
                                <div className="text-2xl font-bold">
                                  PT Frinora Trimata
                                </div>
                                <div className="mt-3 text-base">
                                  <span className="font-bold text-neutral-800">
                                    20 kg
                                  </span>
                                  <span className="text-neutral-800">
                                    {" "}
                                    Limbah Kaca{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="justify-center self-stretch px-3 py-1.5 my-auto text-base text-center text-black whitespace-nowrap bg-emerald-100 rounded-xl">
                                Selesai
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center p-2.5 mt-3 rounded-xl bg-[#B6C4B6] max-md:max-w-full">
                            <div className="flex gap-5 items-center pr-2 max-md:flex-wrap">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/927677a1c0c910062e8790c74073bb1badfc0c18bc8e99d892115b3885d3493b?apiKey=937261aeaab2482b817691a974988cbc&"
                                className="shrink-0 self-stretch rounded-full aspect-square w-[70px]"
                              />
                              <div className="flex flex-col self-stretch pr-5 my-auto text-neutral-800">
                                <div className="text-2xl font-bold">
                                  Rinasa Company
                                </div>
                                <div className="mt-3 text-base">
                                  <span className="font-bold text-neutral-800">
                                    10 kg{" "}
                                  </span>
                                  <span className="text-neutral-800">
                                    Limbah Kardus{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="justify-center self-stretch px-3 py-1.5 my-auto text-base text-center whitespace-nowrap rounded-xl bg-blue-500 text-stone-200">
                                Baru
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center p-2.5 mt-3 bg-white rounded-xl max-md:max-w-full">
                            <div className="flex gap-5 items-center pr-2 max-md:flex-wrap">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/436d8fb65c296e82c69ae5620892ce1ee8cbaccd599ccb0f4bbf5647fcf05578?apiKey=937261aeaab2482b817691a974988cbc&"
                                className="shrink-0 self-stretch rounded-full aspect-square w-[70px]"
                              />
                              <div className="flex flex-col self-stretch pr-5 my-auto text-neutral-800">
                                <div className="text-2xl font-bold">
                                  Rinasa Company
                                </div>
                                <div className="mt-3 text-base">
                                  <span className="font-bold text-neutral-800">
                                    100 kg{" "}
                                  </span>
                                  <span className="text-neutral-800">
                                    Limbah Kardus{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="justify-center self-stretch px-3 py-1.5 my-auto text-base text-center text-black whitespace-nowrap bg-yellow-200 rounded-xl">
                                Diproses
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center p-2.5 mt-3 bg-white rounded-xl max-md:max-w-full">
                            <div className="flex gap-5 items-center pr-2 max-md:flex-wrap">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/88eb4ce363ff91c6d147add50f3a25b1cd13103c234fae828582d96b91ebac7e?apiKey=937261aeaab2482b817691a974988cbc&"
                                className="shrink-0 self-stretch rounded-full aspect-square w-[70px]"
                              />
                              <div className="flex flex-col self-stretch pr-2 my-auto text-neutral-800">
                                <div className="text-2xl font-bold">
                                  PT Andy Prakarsa
                                </div>
                                <div className="mt-3 text-base">
                                  <span className="font-bold text-neutral-800">
                                    10 kg{" "}
                                  </span>
                                  <span className="text-neutral-800">
                                    Limbah Kaca{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="justify-center self-stretch px-3 py-1.5 my-auto text-base text-center text-black whitespace-nowrap bg-yellow-200 rounded-xl">
                                Diproses
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col px-2.5 pt-2.5 mt-3 text-2xl font-bold bg-white rounded-xl text-neutral-800 max-md:max-w-full">
                            <div className="flex gap-5 pr-2 max-md:flex-wrap">
                              <div className="flex flex-col justify-center self-start mt-2.5" />
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
      </div>
    </AuthenticatedLayout>
  );
}
