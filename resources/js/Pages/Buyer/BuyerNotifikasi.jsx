import AuthenticatedBuyer from "@/Layouts/AuthenticatedBuyer";
import { Head, Link } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedBuyer
            user={auth.user}
        >
            <div className="flex flex-col justify-center bg-[#EEF0E5]">
                <div className="flex flex-col items-center px-5 pt-12 w-full bg-[#EEF0E5] max-md:max-w-full">
                    <div className="flex gap-5 justify-between w-full max-w-[1290px] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-5 justify-between w-full text-2xl font-semibold leading-6 max-w-[1248px] text-neutral-700 max-md:flex-wrap max-md:max-w-full">
                            <div class="flex flex-row items-center px-39 mt-18 w-full max-md:flex-col max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dacd6a9a7b3c3da2aa8cbe3c61842936b413bf911eb3e09e563283b6b24ee778?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    class="shrink-0 w-10 aspect-square"
                                />
                                <div class="mx-4 text-2xl font-semibold leading-6 text-black max-md:mr-2.5 max-md:max-w-full">
                                    Notifikasi
                                </div>
                                <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                    <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                                        Pilih
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-20 pt-12 mt-6 w-full text-base leading-4 text-neutral-700 max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 pr-20 max-w-full whitespace-nowrap w-[1248px] max-md:flex-wrap max-md:pr-5">
                            <div className="justify-center px-2 py-1 rounded-2xl border border-solid border-neutral-700">
                                Semua
                            </div>
                            <div className="justify-center px-2 py-1 rounded-2xl border border-solid border-neutral-700">
                                Transaksi
                            </div>
                            <div className="justify-center px-2 py-1 rounded-2xl border border-solid border-neutral-700">
                                EcoChat
                            </div>
                        </div>
                        <div className="flex flex-col px-12 py-6 mt-6 w-full rounded-md bg-zinc-300 max-w-[1248px] max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-2.5 max-md:flex-wrap">
                                <div className="flex-1 max-md:max-w-full">
                                    Pesananmu{" "}
                                    <span className="font-semibold">XX1234CC</span>{" "}
                                    telah disiapkan oleh penjual
                                </div>
                                <div className="shrink-0 self-start w-3 h-3 bg-rose-500 rounded-full" />
                            </div>
                            <div className="mt-3 max-md:max-w-full">26/09/2024 11:45</div>
                        </div>
                        <div className="flex flex-col justify-center px-12 py-6 mt-6 w-full rounded-md bg-[#304D30] max-w-[1248px] text-stone-200 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-3 max-md:flex-wrap">
                                <div className="flex gap-5 justify-between font-semibold whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0137b900daf30d15459722100110fc05f994da4ce4762a6bec121899adf22783?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-6 aspect-square fill-stone-200"
                                    />
                                    <div className="my-auto">PT Angkasa Raya</div>
                                </div>
                                <div className="flex-1 my-auto max-md:max-w-full">
                                    Halo, saya memiliki limbah kardus sesuai permintaan Anda
                                </div>
                            </div>
                            <div className="mt-3 max-md:max-w-full">26/09/2024 11:45</div>
                        </div>
                        <div className="flex flex-col px-12 py-6 mt-6 w-full rounded-md bg-zinc-300 max-w-[1248px] max-md:px-5 max-md:max-w-full">
                            <div className="max-md:max-w-full">
                                Pesananmu <span className="font-semibold">XX1234CC</span> telah
                                telah disiapkan oleh penjual{" "}
                            </div>
                            <div className="mt-3 max-md:max-w-full">26/09/2024 11:45</div>
                        </div>
                        <div className="flex flex-col justify-center px-12 py-6 mt-6 w-full rounded-md bg-[#304D30] max-w-[1248px] text-stone-200 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-3 items-center max-md:flex-wrap">
                                <div className="flex gap-5 justify-between self-stretch font-semibold whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0137b900daf30d15459722100110fc05f994da4ce4762a6bec121899adf22783?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-6 aspect-square fill-stone-200"
                                    />
                                    <div className="my-auto">PT Angkasa Raya</div>
                                </div>
                                <div className="flex-1 self-stretch my-auto max-md:max-w-full">
                                    Halo, saya memiliki limbah kardus sesuai permintaan Anda
                                </div>
                                <div className="shrink-0 self-stretch my-auto w-3 h-3 bg-rose-500 rounded-full" />
                            </div>
                            <div className="mt-3 max-md:max-w-full">26/09/2024 11:45</div>
                        </div>
                        <div className="flex flex-col px-12 py-6 mt-6 w-full rounded-md bg-zinc-300 max-w-[1248px] max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-2.5 max-md:flex-wrap">
                                <div className="flex-1 max-md:max-w-full">
                                    Pesananmu{" "}
                                    <span className="font-semibold">XX1234CC</span>{" "}
                                    telah disiapkan oleh penjual
                                </div>
                                <div className="shrink-0 self-start w-3 h-3 bg-rose-500 rounded-full" />
                            </div>
                            <div className="mt-3 max-md:max-w-full">26/09/2024 11:45</div>
                        </div>
                        <div className="flex flex-col px-12 py-6 mt-6 w-full rounded-md bg-zinc-300 max-w-[1248px] max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-2.5 max-md:flex-wrap">
                                <div className="flex-1 max-md:max-w-full">
                                    Pesananmu{" "}
                                    <span className="font-semibold">XX1234CC</span>{" "}
                                    telah disiapkan oleh penjual
                                </div>
                                <div className="shrink-0 self-start w-3 h-3 bg-rose-500 rounded-full" />
                            </div>
                            <div className="mt-3 max-md:max-w-full">26/09/2024 11:45</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedBuyer>
    );
}
