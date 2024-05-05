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
                        <div className="mt-3">
                            Followers <span className="font-bold">2003</span>
                        </div>
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
                                Ganti Kata Sandi
                            </div>
                            <div className="self-start mt-6 ml-16 text-right text-black max-md:ml-2.5">
                                Ubah kata sandi
                            </div>
                            <div className="flex flex-col px-16 py-6 mt-6 w-full text-base max-md:px-5 max-md:max-w-full">
                                <div className="text-black max-md:max-w-full">Kata sandi saat ini</div>
                                <div className="flex gap-3 p-6 mt-3 text-black whitespace-nowrap rounded-md bg-[#D9D9D9] max-md:flex-wrap max-md:px-5">
                                    <div className="flex-1 max-md:max-w-full">
                                        <input
                                            type="password"
                                            placeholder="Kata Sandi Saat Ini"
                                            class="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
                                        />
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f75d412567fbe8ad26a8260cc68778d94b00a2a8b3b399f346f59555f48a2e7b?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-5 aspect-[1.11] fill-[#D9D9D9]"
                                    />
                                </div>
                                <div className="mt-6 text-black max-md:max-w-full">Kata sandi baru</div>
                                <div className="flex gap-3 p-6 mt-3 text-black whitespace-nowrap rounded-md bg-zinc-300 max-md:flex-wrap max-md:px-5">
                                    <div className="flex-1 max-md:max-w-full">
                                        <input
                                            type="password"
                                            placeholder="Kata Sandi Baru"
                                            class="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
                                        />
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a62c478f018e1cdb7a4c13a53d8b2a5226f8bf94e567337ffdd6d3d76d74c535?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-5 aspect-[1.05] fill-slate-950"
                                    />
                                </div>
                                <div className="mt-6 text-black max-md:max-w-full">
                                    Kata sandi harus berisi setidaknya
                                </div>
                                <div className="flex gap-2.5 mt-3 text-black max-md:flex-wrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/be7c6897da87e5cb67d14bb54e78deed60c15da074b485ef0c7a3c8fc5984d9e?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-5 aspect-[1.05] fill-black"
                                    />
                                    <div className="flex-1 max-md:max-w-full">1 huruf</div>
                                </div>
                                <div className="flex gap-2.5 mt-3 text-black max-md:flex-wrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b5f8d681faf3e55eec6f6a6939821b5d52153f47643a37fb07fb6bc5331ab8d?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-5 aspect-square fill-black"
                                    />
                                    <div className="flex-1 my-auto max-md:max-w-full">
                                        1 angka atau karakter khusus (contoh #$@)
                                    </div>
                                </div>
                                <div className="flex gap-2.5 mt-3 text-black max-md:flex-wrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/be7c6897da87e5cb67d14bb54e78deed60c15da074b485ef0c7a3c8fc5984d9e?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-5 aspect-[1.05] fill-black"
                                    />
                                    <div className="flex-1 max-md:max-w-full">10 karakter</div>
                                </div>
                                <div className="mt-6 text-black max-md:max-w-full">
                                    Ulangi kata sandi baru
                                </div>
                                <div className="flex gap-3 p-6 mt-3 text-black whitespace-nowrap rounded-md bg-zinc-300 max-md:flex-wrap max-md:px-5">
                                    <div className="flex-1 max-md:max-w-full">
                                        <input
                                            type="password"
                                            placeholder="Ulangi Kata Sandi Baru"
                                            class="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
                                        />
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e01e71b9d125b7ef147b92203aa43b52761aa62564438b36c75e371c9855f5e?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-5 aspect-[1.05] fill-slate-950"
                                    />
                                </div>
                                <div className="flex justify-end gap-2.5 pr-200 mt-6 max-md:flex-wrap max-md:pr-5">
                                    <div className="px-6 py-3 mt-6 text-base whitespace-nowrap rounded-md text-[#304D30] max-md:px-5 max-md:mr-2.5">Batal atur kata sandi</div>
                                    <div className="px-6 py-3 mt-6 text-base whitespace-nowrap rounded-md bg-[#304D30] text-stone-200 max-md:px-5 max-md:mr-2.5">
                                        Ganti kata sandi
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
