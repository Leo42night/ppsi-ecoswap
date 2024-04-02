import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
        >
            <Head title="Dashboard" />
            <div className="self-stretch px-12 py-3 max-md:px-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow justify-center items-center self-stretch px-16 py-8 w-full text-base leading-4 rounded-xl bg-[#304D30] text-stone-200 max-md:px-5 max-md:mt-9 max-md:max-w-full">
                            <div className="flex flex-col items-center max-w-full w-[324px]">
                                <div className="flex gap-2.5 self-stretch text-4xl font-bold">
                                    <img
                                        loading="lazy"
                                        srcSet="/asset/amelia.png"
                                        className="rounded-full h-20 w-20"
                                    />
                                    <div className="my-auto">Hello, Amelia</div>
                                </div>
                                <div className="mt-3 tracking-tighter">ameliapark@gmail.com</div>
                                <div className="mt-3 tracking-tighter">
                                    Review your personal activity here
                                </div>
                                <div className="justify-center p-3 mt-3 tracking-tighter rounded-xl border-2 border-solid border-stone-200">
                                    Edit Profile
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                        <div className="grow self-stretch pt-12 pr-6 pb-6 pl-12 w-full rounded-xl bg-[#163020] max-md:px-5 max-md:mt-9 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[87%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-4xl font-bold leading-10 text-stone-200 max-md:mt-10">
                                        <div>Saldo Anda</div>
                                        <div className="mt-6">Rp 1.000.000</div>
                                        <div className="mt-3 text-base tracking-tighter">+4.2%</div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[13%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/626cbdeff12c7e80cd7b8cb73762fd889b87d99613f7b57e9f5c8bdeab7a0692?"
                                        className="shrink-0 mt-28 w-12 aspect-square max-md:mt-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch pt-12 pr-3.5 pb-5 pl-12 w-full text-4xl font-bold leading-10 rounded-xl bg-[#B6C4B6] text-neutral-800 max-md:pl-5 max-md:mt-9 max-md:max-w-full">
                            <div className="mr-9 max-md:mr-2.5 text-[#163020]">Total Barang Jualan</div>
                            <div className="mt-6 mr-9 max-md:mr-2.5 text-[#163020]">15 Produk</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e169702e9c7f729aa6c49c4a09ed4d23de1514a8940c9c7ee53e31669704ae1b?"
                                className="self-end mt-4 w-12 aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-stretch px-12 py-3 max-md:px-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-12 w-full rounded-xl bg-[#B6C4B6] max-md:px-5 max-md:mt-9 max-md:max-w-full">
                            <div className="flex gap-5 justify-between self-start leading-[100%] max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2796bff258f9645def434c3060885b2fc748618418bb9a430ca81a42be7e6a01?"
                                    className="shrink-0 w-10 aspect-square"
                                />
                                <div className="text-4xl font-bold text-[#163020]">
                                    Performa Anda
                                </div>
                            </div>
                            <div className="justify-between mt-6 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow text-base leading-4 text-base tracking-tighter max-md:mt-10">
                                            <div className="flex gap-3 pr-10 tracking-tighter whitespace-nowrap max-md:pr-5">
                                                <div className="my-auto">Pengunjung</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                                    className="shrink-0 w-6 aspect-square fill-stone-200"
                                                />
                                            </div>
                                            <div className="mt-6 text-4xl font-bold text-[#163020]">+12</div>
                                            <div className="mt-3 tracking-tighter">
                                                Lebih banyak orang mengunjungi anda!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow text-base leading-4 text-neutral-800 max-md:mt-10">
                                            <div className="flex gap-3 pr-6 tracking-tighter whitespace-nowrap max-md:pr-5">
                                                <div className="my-auto">Terjual</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                                    className="shrink-0 w-6 aspect-square fill-stone-200"
                                                />
                                            </div>
                                            <div className="mt-6 text-4xl font-bold text-[#163020]">12.5 Kg</div>
                                            <div className="mt-3 tracking-tighter">
                                                Jumlah sampah terjual
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow leading-[100%] text-neutral-800 max-md:mt-10">
                                            <div className="flex gap-3 pr-5 text-base tracking-tighter">
                                                <div className="my-auto">Penjualan Diselesaikan</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                                    className="shrink-0 w-6 aspect-square fill-stone-200"
                                                />
                                            </div>
                                            <div className="flex gap-5 justify-between mt-6">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/be33028afc72b7defa18d67f836405691db796be12c903f1169b5d4904fa2091?"
                                                    className="shrink-0 w-16 aspect-square"
                                                />
                                                <div className="self-start text-base tracking-tighter">
                                                    8 dari 10 Pesanan Diproses
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-12 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-5 max-md:mt-9 max-md:max-w-full">
                            <div className="flex gap-5 justify-between text-4xl font-bold text-[#163020]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a264959575f98a2555026108e65f6d6b08f0edd0b35291c65948fb5da62f61cf?"
                                    className="shrink-0 w-10 aspect-square"
                                />
                                <div>Feedback&nbsp;</div>
                            </div>
                            <div className="flex gap-5 mt-6 text-base text-neutral-800">
                                <div className="flex flex-col flex-1">
                                    <div className="flex gap-3 pr-7 tracking-tighter whitespace-nowrap max-md:pr-5">
                                        <div className="my-auto">Positif</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
                                            className="shrink-0 w-6 aspect-square fill-stone-200"
                                        />
                                    </div>
                                    <div className="mt-6 text-4xl font-bold text-[#163020]">13</div>
                                    <div className="mt-3 tracking-tighter leading-4">
                                        Respon Baik dari pelanggan
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 self-start">
                                    <div className="flex gap-3 pr-5 tracking-tighter whitespace-nowrap max-md:pr-5">
                                        <div className="my-auto">Negatif</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c71ec3c222b0393b1a93d5706a69817358580ff48227137841267398b026581?"
                                            className="shrink-0 w-6 aspect-square fill-stone-200"
                                        />
                                    </div>
                                    <div className="mt-6 text-4xl font-bold text-[#163020]">2</div>
                                    <div className="mt-3 tracking-tighter">Kritik dan Saran</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-stretch px-12 py-3 max-md:px-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-12 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-5 max-md:mt-9 max-md:max-w-full">
                            <div className="flex gap-5 justify-between self-start text-4xl font-bold text-[#163020]">
                                <img
                                    loading="lazy"
                                    src="/public/union.png"
                                    className="shrink-0 w-10 aspect-square"
                                />
                                <div>Ringkasan Transaksi</div>
                            </div>
                            <div className="flex gap-5 mt-6 text-black max-md:flex-wrap">
                                <div className="flex flex-col flex-1 justify-center px-20 max-md:px-5">
                                    <div className="text-base tracking-tighter">Pesanan Baru</div>
                                    <div className="self-center mt-3 text-2xl font-bold">2</div>
                                </div>
                                <div className="flex flex-col flex-1 justify-center px-16 max-md:px-5">
                                    <div className="text-base tracking-tighter">
                                        Pesanan Diproses
                                    </div>
                                    <div className="self-center mt-3 text-2xl font-bold">8</div>
                                </div>

                                <div className="flex flex-col flex-1 justify-center px-16 max-md:px-5">
                                    <div className="text-base tracking-tighter">
                                        Pesanan Dibatalkan
                                    </div>
                                    <div className="self-center mt-3 text-2xl font-bold">0</div>
                                </div>

                                <div className="flex flex-col flex-1 justify-center px-14 max-md:px-5" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch p-12 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-5 max-md:mt-9 max-md:max-w-full">
                            <div className="flex gap-5 justify-between self-start text-4xl font-bold text-[#163020]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbda87e5e4cd102627847df7a9261c46bac2a70c12d85eb4c6cff69949656958?"
                                    className="shrink-0 w-10 aspect-square"
                                />
                                <div>Daftar Sampah</div>
                            </div>
                            <div className="flex gap-5 mt-6 text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-1 justify-center items-center px-16 max-md:px-5">
                                    <div className="flex flex-col">
                                        <div className="text-base tracking-tighter">Dijual</div>
                                        <div className="mt-3 text-2xl font-bold">0</div>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-center items-center px-16 max-md:px-5">
                                    <div className="flex flex-col">
                                        <div className="text-base tracking-tighter">Habis</div>
                                        <div className="mt-3 text-2xl font-bold">0</div>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-center items-center px-16 max-md:px-5">
                                    <div className="flex flex-col">
                                        <div className="text-base tracking-tighter">Draft</div>
                                        <div className="mt-3 text-2xl font-bold">0</div>
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