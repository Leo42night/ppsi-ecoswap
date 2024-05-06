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
      <div className="flex flex-col bg-stone-200">
        <div className="w-fullmax-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarSeller user={auth.user}/>
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
