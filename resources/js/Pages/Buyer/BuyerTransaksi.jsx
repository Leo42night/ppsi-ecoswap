import AuthenticatedBuyer from "@/Layouts/AuthenticatedBuyer";
import AuthenticatedSeller from "@/Layouts/AuthenticatedBuyer";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedBuyer
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
            }
        >
            <header class="flex justify-center items-center px-16 py-9 shadow-lg bg-[#EEF0E5] max-md:px-5">
                <div class="flex gap-5 justify-between w-full max-w-[1680px] max-md:flex-wrap max-md:max-w-full">
                    <div class="flex gap-3 my-auto text-2xl text-neutral-800">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3d526be55ebefcf7bf4c9d68d8e340829c0cf581c022ffa7e554f9d802314a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="shrink-0 aspect-[0.73] w-[35px]"
                        />
                        <div class="my-auto">
                            <span class="font-bold">Eco</span>
                            Swap
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between items-center text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                        <div className="self-stretch my-auto text-[#304D30]">EcoSell</div>
                        <div className="self-stretch my-auto text-[#304D30]">Katalog</div>
                        <div className="self-stretch my-auto text-[#304D30]">Notifikasi</div>
                        <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d75f80013d0bb7c2af990e0258f961b145f80bc843d01e9a7b78c870695c7b50?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            class="shrink-0 self-stretch w-16 aspect-square"
                        />
                    </div>
                </div>
            </header>
            <div className="flex flex-col bg-[#EEF0E5]">
                <div className="flex max-md:flex-col max-md:gap-max">
                    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                        <div class="flex flex-col p-10 text-base leading-4 bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:max-w-full">
                            <div class="flex flex-col p-6 font-semibold text-center rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                                <div class="text-2xl">EcoSeller</div>
                                <div class="shrink-0 self-center mt-3 w-16 h-16 bg-stone-200 rounded-[48px]"></div>
                                <div class="mt-3">Teresia Amelia</div>
                                <div class="mt-3 font-normal">teresia.amelia@gmail.com</div>
                                <div className="mt-3">
                                    Followers <span className="font-bold">2003</span>
                                </div>
                            </div>
                            <div class="flex gap-3 px-6 py-3 mt-6 font-semibold text-right whitespace-nowrap max-md:px-5">
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
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf46a9b06dbc34f73f10718605b7f02858349183dee7d9319baf40a98f42b153?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                    class="shrink-0 w-6 aspect-square"
                                />
                                <div class="my-auto">Tambah Produk</div>
                            </div>
                            <div class="flex gap-3 px-6 py-3 mt-6 max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3657ebcccdc29900d3cba7892be478fa5fecae50033793d65626193fe61ca80a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                    class="shrink-0 w-6 aspect-square"
                                />
                                <div class="my-auto">Daftar Produk</div>
                            </div>
                            <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6dd0638f9248570f7926b3dbedcda2e333002353c4e04648bbf265a5b35026?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                    class="shrink-0 w-6 aspect-square"
                                />
                                <div class="my-auto">Pengiriman</div>
                            </div>
                            <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dbeefa7c1ff289f06c7609f2148cad26940dfaafb7c3a19a207025f445147fd?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                    class="shrink-0 w-6 aspect-square"
                                />
                                <div class="my-auto">EcoChat</div>
                            </div>
                            <div class="flex gap-3 px-6 py-3 mt-6 text-right whitespace-nowrap max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07220c021dde5ed2e09e274b943f3d3cfbd6876f3cd264b2c3140c79ac06e151?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                    class="shrink-0 w-6 aspect-square"
                                />
                                <div class="my-auto">EcoRoom</div>
                            </div>
                            <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cccfa7360479c49113d4fad145c0af4b90c59ec90110505c654e81169fb44bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                    class="shrink-0 w-6 aspect-square"
                                />
                                <div class="my-auto">Ulasan Pembeli</div>
                            </div>
                            <div class="flex gap-3 px-6 py-3 mt-6 font-normal text-right whitespace-nowrap max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0334d131e6f55692ac81c90f0a232e456d1d9369b25ab143c9bbd45c93ff4aaf?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                    class="shrink-0 w-6 aspect-square"
                                />
                                <div class="my-auto">Setelan</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-left p-max max-md:px-max w-full text-base leading-4 text-neutral-700 max-md:px-5 max-md:max-w-full">
                        <div class="flex flex-col max-md:max-w-full">
                            <div class="justify-center items-start px-16 py-16 text-2xl font-semibold leading-6 text-left bg-[#304D30] text-stone-200 max-md:pr-5 max-md:pl-6 max-md:max-w-full">
                                Daftar Transaksi
                            </div>
                            <div className="self-left mt-6 ml-16 text-left text-black max-md:ml-2.5 text-2xl">
                                Ubah Kata Sandi
                            </div>
                            <div className="flex flex-col px-16 py-6 mt-6 w-full text-base max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-3 self-stretch p-6 text-base leading-4 text-black rounded-md bg-zinc-300 max-md:flex-wrap max-md:px-5">
                                    <div className="flex-1 my-auto max-md:max-w-full">
                                        <input
                                            placeholder="Mencari sesuatu..."
                                            class="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
                                        />
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bb7213c4452bcc08f312a219e353fa6247acc54acf227a3026663fd8cd4fad3?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-6 aspect-square"
                                    />
                                </div>
                                <div class="flex gap-3 px-200 py-12 max-md:flex-wrap max-md:px-5 bg-[#EEF0E5]">
                                    <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full ">
                                        <div className="justify-center px-6 py-3 rounded-md border-2 border-solid bg-[#304D30] border-neutral-700 text-white max-md:px-5 ">
                                            Semua
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                        <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                                            Baru
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                        <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                                            Disiapkan
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                        <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                                            Ambil
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                        <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                                            Selesai
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                        <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                                            Selesai
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-1 px-200 max-md:flex-wrap max-md:px-5">
                                    <div class="flex flex-col grow items-center pt-6 w-full bg-[#EEF0E5] max-md:max-w-full">
                                        <div class="flex flex-col p-6 mt-6 w-full bg-white rounded-md max-w-[912px] max-md:px-5 max-md:max-w-full">
                                            <div class="text-base font-semibold leading-4 text-black max-md:max-w-full">
                                                #1002
                                            </div>
                                            <div class="flex gap-3 mt-3 text-black leading-[100%] max-md:flex-wrap">
                                                <div class="flex-1 text-2xl font-semibold max-md:max-w-full">
                                                    Rinasa Company
                                                </div>
                                                <div class="flex gap-1.5 self-start mt-2 text-base">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a016a16f63e3898ab824d7e2cae4c15a275fef3651fda99af27a2d248aa55b20?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                        class="shrink-0 w-3.5 aspect-[0.83] fill-black"
                                                    />
                                                    <div>Purnama Pontianak</div>
                                                </div>
                                            </div>
                                            <div class="shrink-0 mt-3 h-0.5 rounded-md bg-zinc-300 max-md:max-w-full"></div>
                                            <div class="mt-3 max-md:max-w-full">
                                                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                                                    <div class="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                                                        <div class="shrink-0 self-stretch mx-auto rounded-md bg-[#304D30] h-[142px] w-[142px] max-md:mt-3"></div>
                                                    </div>
                                                    <div class="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
                                                        <div class="flex flex-col grow max-md:mt-3 max-md:max-w-full">
                                                            <div class="max-md:max-w-full">
                                                                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                                                                    <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                                                        <div class="flex flex-col grow justify-center text-base leading-4 text-neutral-700 max-md:mt-3">
                                                                            <div>Total Harga 100 Kg</div>
                                                                            <div class="mt-3">Biaya Layanan</div>
                                                                            <div class="mt-3">Biaya Aplikasi</div>
                                                                            <div class="mt-3">Biaya Penjemputan (7Km)</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                                                        <div class="flex flex-col grow justify-center text-base font-semibold leading-4 text-neutral-700 max-md:mt-3">
                                                                            <div>Rp 70.000</div>
                                                                            <div class="mt-3">Rp 1.000</div>
                                                                            <div class="mt-3">Rp 6.000</div>
                                                                            <div class="mt-3">- Rp 7.000</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="shrink-0 mt-3 h-0.5 rounded-xl bg-zinc-300 max-md:max-w-full"></div>
                                                            <div class="flex gap-5 self-start mt-3 text-base leading-4 text-neutral-700">
                                                                <div>Total Transaksi</div>
                                                                <div class="font-semibold">Rp 70.000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex gap-3 mt-3 max-md:flex-auto max-md:pl-5 justify-end items-end">
                                                <div class="flex flex-col pb-11 text-xs text-black whitespace-nowrap">
                                                    <div>22/02/24</div>
                                                    <div class="mt-3">06:45</div>
                                                    <div class="mt-3">22/02/24</div>
                                                    <div class="mt-3">08:00</div>
                                                    <div class="mt-3">22/02/24</div>
                                                    <div class="mt-3">15:00</div>
                                                    <div class="mt-3">22/02/24</div>
                                                    <div class="mt-3">16:00</div>
                                                </div>
                                                <div class="flex flex-col self-start text-neutral-700">
                                                    <div class="flex gap-2.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4587b8c2d3bc94f919d208788a05b4a2ab2de21d790f9b89bbf4af667801d79c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                            class="shrink-0 aspect-[0.53] w-[27px]"
                                                        />
                                                        <div class="flex flex-col self-start">
                                                            <div class="text-sm">Pesanan Masuk</div>
                                                            <div class="mt-2 text-xs">
                                                                Pelanggan ingin melakukan pembelian 100 kg Limbah
                                                                Kardus
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex gap-2.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4587b8c2d3bc94f919d208788a05b4a2ab2de21d790f9b89bbf4af667801d79c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                            class="shrink-0 aspect-[0.53] w-[27px]"
                                                        />
                                                        <div class="flex flex-col self-start">
                                                            <div class="text-sm">Pesanan Sedang Disiapkan</div>
                                                            <div class="mt-2 text-xs">Pesanan sedang dikemas</div>
                                                        </div>
                                                    </div>
                                                    <div class="flex gap-2.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4587b8c2d3bc94f919d208788a05b4a2ab2de21d790f9b89bbf4af667801d79c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                            class="shrink-0 aspect-[0.53] w-[27px]"
                                                        />
                                                        <div class="flex flex-col self-start">
                                                            <div class="text-sm">Pesanan Sudah Siap Diambil</div>
                                                            <div class="mt-2 text-xs">
                                                                Pesanan telah siap diambil oleh pelanggan
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex gap-2.5 text-sm text-stone-200">
                                                        <div class="shrink-0 self-start rounded-full border-solid bg-[#B6C4B6] border-[5px] border-neutral-700 h-[27px] stroke-[5px] w-[27px]"></div>
                                                        <div class="justify-center p-2.5 rounded-md bg-[#304D30]">
                                                            Pesanan Sudah Diambil
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="justify-center self-start px-6 py-3 mt-3 text-base leading-4 rounded-md bg-[#304D30] text-stone-200 max-md:px-5 max-md:max-w-full">
                                                Estimasi waktu pesanan tiba pada
                                                <span class="font-semibold"> 22/02/2024 17:00</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col p-6 mt-6 w-full bg-white rounded-md max-w-[912px] max-md:px-5 max-md:max-w-full">
                                            <div class="text-base font-semibold leading-4 text-black max-md:max-w-full">
                                                #1002
                                            </div>
                                            <div class="flex gap-3 mt-3 text-black leading-[100%] max-md:flex-wrap">
                                                <div class="flex-1 text-2xl font-semibold max-md:max-w-full">
                                                    Rinasa Company
                                                </div>
                                                <div class="flex gap-1.5 self-start mt-2 text-base">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a016a16f63e3898ab824d7e2cae4c15a275fef3651fda99af27a2d248aa55b20?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                        class="shrink-0 w-3.5 aspect-[0.83] fill-black"
                                                    />
                                                    <div>Purnama Pontianak</div>
                                                </div>
                                            </div>
                                            <div class="shrink-0 mt-3 h-0.5 rounded-md bg-zinc-300 max-md:max-w-full"></div>
                                            <div class="mt-3 max-md:max-w-full">
                                                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                                                    <div class="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                                                        <div class="shrink-0 self-stretch mx-auto rounded-md bg-[#304D30] h-[142px] w-[142px] max-md:mt-3"></div>
                                                    </div>
                                                    <div class="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
                                                        <div class="flex flex-col grow max-md:mt-3 max-md:max-w-full">
                                                            <div class="max-md:max-w-full">
                                                                <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                                                                    <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                                                        <div class="flex flex-col grow justify-center text-base leading-4 text-neutral-700 max-md:mt-3">
                                                                            <div>Total Harga 100 Kg</div>
                                                                            <div class="mt-3">Biaya Layanan</div>
                                                                            <div class="mt-3">Biaya Aplikasi</div>
                                                                            <div class="mt-3">Biaya Penjemputan (7Km)</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                                                        <div class="flex flex-col grow justify-center text-base font-semibold leading-4 text-neutral-700 max-md:mt-3">
                                                                            <div>Rp 70.000</div>
                                                                            <div class="mt-3">Rp 1.000</div>
                                                                            <div class="mt-3">Rp 6.000</div>
                                                                            <div class="mt-3">- Rp 7.000</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="shrink-0 mt-3 h-0.5 rounded-xl bg-zinc-300 max-md:max-w-full"></div>
                                                            <div class="flex gap-5 self-start mt-3 text-base leading-4 text-neutral-700">
                                                                <div>Total Transaksi</div>
                                                                <div class="font-semibold">Rp 70.000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex gap-3 mt-3 max-md:flex-auto max-md:pl-5 justify-end items-end">
                                                <div class="flex flex-col pb-11 text-xs text-black whitespace-nowrap">
                                                    <div>22/02/24</div>
                                                    <div class="mt-3">06:45</div>
                                                    <div class="mt-3">22/02/24</div>
                                                    <div class="mt-3">08:00</div>
                                                    <div class="mt-3">22/02/24</div>
                                                    <div class="mt-3">15:00</div>
                                                    <div class="mt-3">22/02/24</div>
                                                    <div class="mt-3">16:00</div>
                                                </div>
                                                <div class="flex flex-col self-start text-neutral-700">
                                                    <div class="flex gap-2.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4587b8c2d3bc94f919d208788a05b4a2ab2de21d790f9b89bbf4af667801d79c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                            class="shrink-0 aspect-[0.53] w-[27px]"
                                                        />
                                                        <div class="flex flex-col self-start">
                                                            <div class="text-sm">Pesanan Masuk</div>
                                                            <div class="mt-2 text-xs">
                                                                Pelanggan ingin melakukan pembelian 100 kg Limbah
                                                                Kardus
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex gap-2.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4587b8c2d3bc94f919d208788a05b4a2ab2de21d790f9b89bbf4af667801d79c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                            class="shrink-0 aspect-[0.53] w-[27px]"
                                                        />
                                                        <div class="flex flex-col self-start">
                                                            <div class="text-sm">Pesanan Sedang Disiapkan</div>
                                                            <div class="mt-2 text-xs">Pesanan sedang dikemas</div>
                                                        </div>
                                                    </div>
                                                    <div class="flex gap-2.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4587b8c2d3bc94f919d208788a05b4a2ab2de21d790f9b89bbf4af667801d79c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                                            class="shrink-0 aspect-[0.53] w-[27px]"
                                                        />
                                                        <div class="flex flex-col self-start">
                                                            <div class="text-sm">Pesanan Sudah Siap Diambil</div>
                                                            <div class="mt-2 text-xs">
                                                                Pesanan telah siap diambil oleh pelanggan
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex gap-2.5 text-sm text-stone-200">
                                                        <div class="shrink-0 self-start rounded-full border-solid bg-[#B6C4B6] border-[5px] border-neutral-700 h-[27px] stroke-[5px] w-[27px]"></div>
                                                        <div class="justify-center p-2.5 rounded-md bg-[#304D30]">
                                                            Pesanan Sudah Diambil
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="justify-center self-start px-6 py-3 mt-3 text-base leading-4 rounded-md bg-[#304D30] text-stone-200 max-md:px-5 max-md:max-w-full">
                                                Estimasi waktu pesanan tiba pada
                                                <span class="font-semibold"> 22/02/2024 17:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedBuyer>
    );
}
