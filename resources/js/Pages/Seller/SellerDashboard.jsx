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
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-12 w-full text-2xl leading-6 text-black bg-[#DFE4DF] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-center mt-1 text-4xl font-semibold text-neutral-800">
                  EcoSeller’s
                </div>
                <div className="shrink-0 mt-9 h-0.5 rounded-md bg-zinc-400" />
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
                <div className="flex gap-2.5 justify-center self-start px-2 py-2.5 mt-5 font-bold text-right whitespace-nowrap">
                  <div className="shrink-0 w-0.5 rounded-md bg-neutral-800 h-[25px]" />
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
                  <a href={route('seller-tambah')}>Tambah Produk</a>
                </div>
                <div className="flex gap-2.5 justify-center self-center p-2.5 mt-3 max-w-full w-[303px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fb128bd5bdb3f5b2c93d759fff54d43678537018dc149905dec036abef49b4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <a href={route('seller-daftar')} className="flex-1">Daftar Produk</a>
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
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a8629650582e540d21d4f4b35cc750e9da4d6e52537db339e9e88dcc833ebb?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>Settings</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col p-12 max-md:px-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#163020] text-stone-200 max-md:px-5 max-md:mt-6">
                        <div className="flex gap-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd42cd4636ca6ccea880aac59e912130ba7e520fa29606159ea07272a47a8a7f?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="my-auto">Saldo Anda</div>
                        </div>
                        <div className="mt-6 text-2xl font-semibold">
                          Rp 1.000.000
                        </div>
                        <div className="mt-3">+4.2%</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-800 max-md:px-5 max-md:mt-6">
                        <div className="flex gap-3 whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/916ccbc0e0ddce2960b8104bed6e8b537ff11c286e9de016ed5b199b9a653504?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="my-auto">Pengunjung</div>
                        </div>
                        <div className="mt-6 text-2xl font-semibold">+12</div>
                        <div className="mt-6 leading-4">
                          Lebih banyak orang mengunjungi anda!
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch p-6 mx-auto w-full text-base leading-4 rounded-xl bg-[#B6C4B6] text-neutral-800 max-md:px-5 max-md:mt-6">
                        <div className="flex gap-3 whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de8fa053b74c9172031eac78b681e6ec1a703cb019344b3d2faa619875e977aa?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="my-auto">Terjual</div>
                        </div>
                        <div className="mt-6 text-2xl font-semibold">
                          12.5 Kg
                        </div>
                        <div className="mt-6">Jumlah sampah terjual</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch p-6 mx-auto w-full rounded-xl bg-[#B6C4B6] leading-[100%] text-neutral-800 max-md:px-5 max-md:mt-6">
                        <div className="flex gap-3 text-base">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78aa4219a2ca0c8bbb2948b7bad575b25fbc821ccd6096ee603b7969e260b15?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="my-auto">Penjualan Diselesaikan</div>
                        </div>
                        <div className="flex gap-3 mt-6">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b810901e9f154812497ce445f158c5d4745ea3ea8a1eb5c0d2b5d2e5e8772e58?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 w-16 aspect-square"
                          />
                          <div className="flex flex-col pb-3">
                            <div className="text-2xl font-semibold">
                              15 Transaksi
                            </div>
                            <div className="mt-3 text-base">
                              8 dari 10 Pesanan Diproses
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow p-6 mx-auto w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6">
                        <div className="flex gap-3 text-base leading-4 text-neutral-800">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90a81cbdc76d5d86416a229abc4377e83a0cc18c8d2f766248666c7f3e55ea52?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="my-auto">
                            Total postingan produk anda
                          </div>
                        </div>
                        <div className="flex justify-center items-center px-6 mt-6 rounded-md aspect-square bg-[#163020] max-md:px-5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fadfd94afb8731786bf81a7cef0e4c174ff10eaf5311125a6e1e7eff26afbd94?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="mt-24 mb-14 w-6 aspect-square max-md:my-10"
                          />
                        </div>
                        <div className="mt-6 text-2xl font-semibold leading-6 text-neutral-800">
                          9 Postingan
                        </div>
                        <div className="justify-center px-6 py-3 mt-3 text-base leading-4 text-black rounded-md bg-stone-200 max-md:px-5">
                          Tampilkan Semua Postingan
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col p-6 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-3 text-base leading-4 text-neutral-800 max-md:flex-wrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13bf51bc868d045db426d980d4ab843dba326c5c601f4940f211c2f76c43613b?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 w-6 aspect-square"
                          />
                          <div className="my-auto max-md:max-w-full">
                            Ringkasan Pesanan
                          </div>
                        </div>
                        <div className="mt-6 max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-800 max-md:mt-6">
                                <div className="text-base">Baru</div>
                                <div className="mt-3 text-2xl font-semibold">
                                  2
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-800 max-md:mt-6">
                                <div className="text-base">Diproses</div>
                                <div className="mt-3 text-2xl font-semibold">
                                  2
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-800 max-md:mt-6">
                                <div className="text-base">Selesai</div>
                                <div className="mt-3 text-2xl font-semibold">
                                  2
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow justify-center py-6 w-full text-center whitespace-nowrap rounded-xl bg-stone-200 leading-[100%] text-neutral-800 max-md:mt-6">
                                <div className="text-base">Dibatalkan</div>
                                <div className="mt-3 text-2xl font-semibold">
                                  2
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col p-6 mt-6 rounded-xl bg-stone-200 leading-[100%] text-neutral-800 max-md:px-5 max-md:max-w-full">
                          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col">
                              <div className="text-2xl">
                                Nama PT Perusahaan Limbah
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
                            <div className="justify-center px-3 py-1.5 my-auto text-base text-center whitespace-nowrap rounded-xl bg-zinc-400 max-md:px-5">
                              Berhasil
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col">
                              <div className="text-2xl">
                                Nama PT Perusahaan Limbah
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
                            <div className="justify-center px-3 py-1.5 my-auto text-base text-center whitespace-nowrap rounded-xl bg-zinc-400 max-md:px-5">
                              Berhasil
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col">
                              <div className="text-2xl">
                                Nama PT Perusahaan Limbah
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
                            <div className="justify-center px-3 py-1.5 my-auto text-base text-center whitespace-nowrap bg-rose-500 rounded-xl">
                              Dibatalkan
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex flex-col">
                              <div className="text-2xl">
                                Nama PT Perusahaan Limbah
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
                            <div className="justify-center px-3 py-1.5 my-auto text-base text-center whitespace-nowrap bg-amber-300 rounded-xl">
                              Diproses
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 mt-6 rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-3 text-base leading-4 whitespace-nowrap text-neutral-800 max-md:flex-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13f8906f04ce45a418c42b0515507affaa0009351ba94af8287237d6b873c950?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="my-auto max-md:max-w-full">EcoRoom</div>
                    </div>
                    <div className="mt-6 text-2xl font-extrabold leading-6 text-neutral-800 max-md:max-w-full">
                      2 Pesan belum dibaca
                    </div>
                    <div className="flex flex-col p-6 mt-6 rounded-xl bg-stone-200 max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-0 justify-between max-md:flex-wrap">
                        <div className="flex flex-col flex-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                          <div className="text-2xl font-semibold max-md:max-w-full">
                            Pengirim
                          </div>
                          <div className="mt-3 text-base max-md:max-w-full">
                            Isi teks yang dikirimkan oleh pengirim
                          </div>
                        </div>
                        <div className="flex gap-5 my-auto">
                          <div className="shrink-0 my-auto w-2.5 h-2.5 rounded-xl bg-neutral-800" />
                          <div className="flex justify-center items-center p-2.5 bg-zinc-400 h-[41px] rounded-[100px] w-[41px]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be34b30f22362f72a4ea3e7c8cdb832eaeacde221a947271982e4fbc8d0c0a82?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="aspect-square w-[21px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between mt-6 max-md:flex-wrap">
                        <div className="flex flex-col flex-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                          <div className="text-2xl font-semibold max-md:max-w-full">
                            Pengirim
                          </div>
                          <div className="mt-3 text-base max-md:max-w-full">
                            Isi teks yang dikirimkan oleh pengirim
                          </div>
                        </div>
                        <div className="flex justify-center items-center p-2.5 my-auto bg-zinc-400 h-[41px] rounded-[100px] w-[41px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be34b30f22362f72a4ea3e7c8cdb832eaeacde221a947271982e4fbc8d0c0a82?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="aspect-square w-[21px]"
                          />
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between mt-6 max-md:flex-wrap">
                        <div className="flex flex-col flex-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                          <div className="text-2xl font-semibold max-md:max-w-full">
                            Pengirim
                          </div>
                          <div className="mt-3 text-base max-md:max-w-full">
                            Isi teks yang dikirimkan oleh pengirim
                          </div>
                        </div>
                        <div className="flex gap-5 my-auto">
                          <div className="shrink-0 my-auto w-2.5 h-2.5 rounded-xl bg-neutral-800" />
                          <div className="flex justify-center items-center p-2.5 bg-zinc-400 h-[41px] rounded-[100px] w-[41px]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be34b30f22362f72a4ea3e7c8cdb832eaeacde221a947271982e4fbc8d0c0a82?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="aspect-square w-[21px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0 justify-between mt-6 max-md:flex-wrap">
                        <div className="flex flex-col flex-1 leading-[100%] text-neutral-800 max-md:max-w-full">
                          <div className="text-2xl font-semibold max-md:max-w-full">
                            Pengirim
                          </div>
                          <div className="mt-3 text-base max-md:max-w-full">
                            Isi teks yang dikirimkan oleh pengirim
                          </div>
                        </div>
                        <div className="flex justify-center items-center p-2.5 my-auto bg-zinc-400 h-[41px] rounded-[100px] w-[41px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be34b30f22362f72a4ea3e7c8cdb832eaeacde221a947271982e4fbc8d0c0a82?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="aspect-square w-[21px]"
                          />
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
