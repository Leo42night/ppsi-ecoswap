import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="self-stretch px-8 py-2 max-md:px-3">
                <div className="flex gap-3 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[43%] max-md:w-full">
                        <div className="flex grow justify-center items-center self-stretch px-6 py-4 w-full text-xs leading-3 rounded-xl bg-[#304D30] text-stone-200 max-md:px-3 max-md:mt-6 max-md:max-w-full">
                            <div className="flex flex-col items-center max-w-full w-[324px]">
                                <div className="flex gap-2 self-stretch text-base font-bold">
                                    <img
                                        loading="lazy"
                                        srcSet="/asset/amelia.png"
                                        className="rounded-full h-20 w-15"
                                    />
                                    <div className="my-auto text-2xl">
                                        Hello, Amelia
                                    </div>
                                </div>
                                <div className="mt-1 tracking-tighter text-xs">
                                    ameliapark@gmail.com
                                </div>
                                <div className="mt-1 tracking-tighter text-xs">
                                    Review your personal activity here
                                </div>
                                <div className="justify-center p-1 mt-1 tracking-tighter rounded-xl border-2 border-solid border-stone-200 cursor-pointer text-xs">
                                    Edit Profile
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 w-[28%] max-md:ml-0 max-md:w-full">
                        <div className="grow self-stretch pt-6 pr-3 pb-3 pl-6 w-full rounded-xl bg-[#163020] max-md:px-3 max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[87%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-2xl font-bold leading-7 text-stone-200 max-md:mt-7">
                                        <div>Saldo Anda</div>
                                        <div className="mt-3">Rp 1.000.000</div>
                                        <div className="mt-2 text-xs tracking-tighter">
                                            +4.2%
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-1 w-[13%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/626cbdeff12c7e80cd7b8cb73762fd889b87d99613f7b57e9f5c8bdeab7a0692?"
                                        className="shrink-0 mt-16 w-8 aspect-square max-md:mt-7"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 w-[29%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch pt-6 pr-2 pb-2 pl-6 w-full text-2xl font-bold leading-7 rounded-xl bg-[#B6C4B6] text-neutral-800 max-md:pl-3 max-md:mt-6 max-md:max-w-full">
                            <div className="mr-5 max-md:mr-2 text-[#163020]">
                                Total Barang Jualan
                            </div>
                            <div className="mt-3 mr-5 max-md:mr-2 text-[#163020]">
                                15 Produk
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e169702e9c7f729aa6c49c4a09ed4d23de1514a8940c9c7ee53e31669704ae1b?"
                                className="self-end mt-2 w-8 aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-stretch px-8 py-2 max-md:px-3">
                <div className="flex gap-3 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] max-md:px-3 max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-3 justify-between self-start leading-[100%] max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2796bff258f9645def434c3060885b2fc748618418bb9a430ca81a42be7e6a01?"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div className="text-xl font-bold text-[#163020]">
                                    Performa Anda
                                </div>
                            </div>
                            <div className="justify-between mt-4 max-md:max-w-full">
                                <div className="flex gap-3 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow text-sm leading-4 text-sm tracking-tighter max-md:mt-6">
                                            <div className="flex gap-2 pr-7 tracking-tighter whitespace-nowrap max-md:pr-3">
                                                <div className="my-auto">
                                                    Pengunjung
                                                </div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                                    className="shrink-0 w-4 aspect-square fill-stone-200"
                                                />
                                            </div>
                                            <div className="mt-4 text-xl font-bold text-[#163020]">
                                                +12
                                            </div>
                                            <div className="mt-2 tracking-tighter">
                                                Lebih banyak orang mengunjungi
                                                anda!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-3 w-[30%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow text-sm leading-4 text-neutral-800 max-md:mt-6">
                                            <div className="flex gap-2 pr-5 tracking-tighter whitespace-nowrap max-md:pr-3">
                                                <div className="my-auto">
                                                    Terjual
                                                </div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                                    className="shrink-0 w-4 aspect-square fill-stone-200"
                                                />
                                            </div>
                                            <div className="mt-4 text-xl font-bold text-[#163020]">
                                                12.5 Kg
                                            </div>
                                            <div className="mt-2 tracking-tighter">
                                                Jumlah sampah terjual
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-3 w-[30%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow leading-[100%] text-neutral-800 max-md:mt-6">
                                            <div className="flex gap-2 pr-3 text-sm tracking-tighter">
                                                <div className="my-auto">
                                                    Penjualan Diselesaikan
                                                </div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                                    className="shrink-0 w-4 aspect-square fill-stone-200"
                                                />
                                            </div>
                                            <div className="flex gap-3 justify-between mt-4">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/be33028afc72b7defa18d67f836405691db796be12c903f1169b5d4904fa2091?"
                                                    className="shrink-0 w-12 aspect-square"
                                                />
                                                <div className="self-start text-sm tracking-tighter">
                                                    8 dari 10 Pesanan Diproses
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-3 max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-3 justify-between text-xl font-bold text-[#163020]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a264959575f98a2555026108e65f6d6b08f0edd0b35291c65948fb5da62f61cf?"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div>Feedback&nbsp;</div>
                            </div>
                            <div className="flex gap-3 mt-4 text-sm text-neutral-800">
                                <div className="flex flex-col flex-1">
                                    <div className="flex gap-2 pr-5 tracking-tighter whitespace-nowrap max-md:pr-3">
                                        <div className="my-auto">Positif</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                            className="shrink-0 w-4 aspect-square fill-stone-200"
                                        />
                                    </div>
                                    <div className="mt-4 text-xl font-bold text-[#163020]">
                                        13
                                    </div>
                                    <div className="mt-2 tracking-tighter leading-4">
                                        Respon Baik dari pelanggan
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 self-start">
                                    <div className="flex gap-2 pr-3 tracking-tighter whitespace-nowrap max-md:pr-3">
                                        <div className="my-auto">Negatif</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c71ec3c222b0393b1a93d5706a69817358580ff48227137841267398b026581?"
                                            className="shrink-0 w-4 aspect-square fill-stone-200"
                                        />
                                    </div>
                                    <div className="mt-4 text-xl font-bold text-[#163020]">
                                        2
                                    </div>
                                    <div className="mt-2 tracking-tighter">
                                        Kritik dan Saran
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-stretch px-8 py-2 max-md:px-3">
                <div className="flex gap-3 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-3 max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-3 justify-between self-start text-xl font-bold text-[#163020]">
                                <img
                                    loading="lazy"
                                    src="Union.png"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div>Ringkasan Transaksi</div>
                            </div>
                            <div className="flex gap-3 mt-4 text-black max-md:flex-wrap">
                                <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3">
                                    <div className="text-sm tracking-tighter">
                                        Pesanan Baru
                                    </div>
                                    <div className="mt-2 text-xl font-bold">
                                        2
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3">
                                    <div className="text-sm tracking-tighter">
                                        Pesanan Diproses
                                    </div>
                                    <div className="mt-2 text-xl font-bold">
                                        8
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3">
                                    <div className="text-sm tracking-tighter">
                                        Pesanan Dibatalkan
                                    </div>
                                    <div className="mt-2 text-xl font-bold">
                                        0
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-3 max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-3 justify-between self-start text-xl font-bold text-[#163020]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbda87e5e4cd102627847df7a9261c46bac2a70c12d85eb4c6cff69949656958?"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div>Daftar Sampah</div>
                            </div>
                            <div className="flex gap-3 mt-4 text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-1 justify-center items-center px-14 max-md:px-3">
                                    <div className="flex flex-col">
                                        <div className="text-sm tracking-tighter">
                                            Dijual
                                        </div>
                                        <div className="mt-2 text-xl font-bold">
                                            0
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-center items-center px-14 max-md:px-3">
                                    <div className="flex flex-col">
                                        <div className="text-sm tracking-tighter">
                                            Habis
                                        </div>
                                        <div className="mt-2 text-xl font-bold">
                                            0
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-center items-center px-14 max-md:px-3">
                                    <div className="flex flex-col">
                                        <div className="text-sm tracking-tighter">
                                            Draft
                                        </div>
                                        <div className="mt-2 text-xl font-bold">
                                            0
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
