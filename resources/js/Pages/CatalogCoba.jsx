import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function CatalogCoba({ auth }) {
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={
        //         <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        //             Dashboard
        //         </h2>
        //     }
        // >
        //     <Head title="Dashboard" />
        //     <div className="self-stretch px-8 py-2 max-md:px-3">
        //         <div className="flex gap-3 max-md:flex-col max-md:gap-0">
        //             <div className="flex flex-col w-[43%] max-md:w-full">
        //                 <div className="flex grow justify-center items-center self-stretch px-6 py-4 w-full text-xs leading-3 rounded-xl bg-[#304D30] text-stone-200 max-md:px-3 max-md:mt-6 max-md:max-w-full">
        //                     <div className="flex flex-col items-center max-w-full w-[324px]">
        //                         <div className="flex gap-2 self-stretch text-base font-bold">
        //                             <img
        //                                 loading="lazy"
        //                                 srcSet="/asset/amelia.png"
        //                                 className="rounded-full h-20 w-15"
        //                             />
        //                             <div className="my-auto text-2xl">
        //                                 Hello, Amelia
        //                             </div>
        //                         </div>
        //                         <div className="mt-1 tracking-tighter text-xs">
        //                             ameliapark@gmail.com
        //                         </div>
        //                         <div className="mt-1 tracking-tighter text-xs">
        //                             Review your personal activity here
        //                         </div>
        //                         <div className="justify-center p-1 mt-1 tracking-tighter rounded-xl border-2 border-solid border-stone-200 cursor-pointer text-xs">
        //                             Edit Profile
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-col ml-3 w-[28%] max-md:ml-0 max-md:w-full">
        //                 <div className="grow self-stretch pt-6 pr-3 pb-3 pl-6 w-full rounded-xl bg-[#163020] max-md:px-3 max-md:mt-6 max-md:max-w-full">
        //                     <div className="flex gap-2 max-md:flex-col max-md:gap-0">
        //                         <div className="flex flex-col w-[87%] max-md:ml-0 max-md:w-full">
        //                             <div className="flex flex-col text-2xl font-bold leading-7 text-stone-200 max-md:mt-7">
        //                                 <div>Saldo Anda</div>
        //                                 <div className="mt-3">Rp 1.000.000</div>
        //                                 <div className="mt-2 text-xs tracking-tighter">
        //                                     +4.2%
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-col ml-1 w-[13%] max-md:ml-0 max-md:w-full">
        //                             <img
        //                                 loading="lazy"
        //                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/626cbdeff12c7e80cd7b8cb73762fd889b87d99613f7b57e9f5c8bdeab7a0692?"
        //                                 className="shrink-0 mt-16 w-8 aspect-square max-md:mt-7"
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-col ml-3 w-[29%] max-md:ml-0 max-md:w-full">
        //                 <div className="flex flex-col grow self-stretch pt-6 pr-2 pb-2 pl-6 w-full text-2xl font-bold leading-7 rounded-xl bg-[#B6C4B6] text-neutral-800 max-md:pl-3 max-md:mt-6 max-md:max-w-full">
        //                     <div className="mr-5 max-md:mr-2 text-[#163020]">
        //                         Total Barang Jualan
        //                     </div>
        //                     <div className="mt-3 mr-5 max-md:mr-2 text-[#163020]">
        //                         15 Produk
        //                     </div>
        //                     <img
        //                         loading="lazy"
        //                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e169702e9c7f729aa6c49c4a09ed4d23de1514a8940c9c7ee53e31669704ae1b?"
        //                         className="self-end mt-2 w-8 aspect-square"
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="self-stretch px-8 py-2 max-md:px-3">
        //         <div className="flex gap-3 max-md:flex-col max-md:gap-0">
        //             <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
        //                 <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] max-md:px-3 max-md:mt-6 max-md:max-w-full">
        //                     <div className="flex gap-3 justify-between self-start leading-[100%] max-md:flex-wrap">
        //                         <img
        //                             loading="lazy"
        //                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/2796bff258f9645def434c3060885b2fc748618418bb9a430ca81a42be7e6a01?"
        //                             className="shrink-0 w-8 aspect-square"
        //                         />
        //                         <div className="text-xl font-bold text-[#163020]">
        //                             Performa Anda
        //                         </div>
        //                     </div>
        //                     <div className="justify-between mt-4 max-md:max-w-full">
        //                         <div className="flex gap-3 max-md:flex-col max-md:gap-0">
        //                             <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
        //                                 <div className="flex flex-col grow text-sm leading-4 text-sm tracking-tighter max-md:mt-6">
        //                                     <div className="flex gap-2 pr-7 tracking-tighter whitespace-nowrap max-md:pr-3">
        //                                         <div className="my-auto">
        //                                             Pengunjung
        //                                         </div>
        //                                         <img
        //                                             loading="lazy"
        //                                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
        //                                             className="shrink-0 w-4 aspect-square fill-stone-200"
        //                                         />
        //                                     </div>
        //                                     <div className="mt-4 text-xl font-bold text-[#163020]">
        //                                         +12
        //                                     </div>
        //                                     <div className="mt-2 tracking-tighter">
        //                                         Lebih banyak orang mengunjungi
        //                                         anda!
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-col ml-3 w-[30%] max-md:ml-0 max-md:w-full">
        //                                 <div className="flex flex-col grow text-sm leading-4 text-neutral-800 max-md:mt-6">
        //                                     <div className="flex gap-2 pr-5 tracking-tighter whitespace-nowrap max-md:pr-3">
        //                                         <div className="my-auto">
        //                                             Terjual
        //                                         </div>
        //                                         <img
        //                                             loading="lazy"
        //                                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
        //                                             className="shrink-0 w-4 aspect-square fill-stone-200"
        //                                         />
        //                                     </div>
        //                                     <div className="mt-4 text-xl font-bold text-[#163020]">
        //                                         12.5 Kg
        //                                     </div>
        //                                     <div className="mt-2 tracking-tighter">
        //                                         Jumlah sampah terjual
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-col ml-3 w-[30%] max-md:ml-0 max-md:w-full">
        //                                 <div className="flex flex-col grow leading-[100%] text-neutral-800 max-md:mt-6">
        //                                     <div className="flex gap-2 pr-3 text-sm tracking-tighter">
        //                                         <div className="my-auto">
        //                                             Penjualan Diselesaikan
        //                                         </div>
        //                                         <img
        //                                             loading="lazy"
        //                                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
        //                                             className="shrink-0 w-4 aspect-square fill-stone-200"
        //                                         />
        //                                     </div>
        //                                     <div className="flex gap-3 justify-between mt-4">
        //                                         <img
        //                                             loading="lazy"
        //                                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/be33028afc72b7defa18d67f836405691db796be12c903f1169b5d4904fa2091?"
        //                                             className="shrink-0 w-12 aspect-square"
        //                                         />
        //                                         <div className="self-start text-sm tracking-tighter">
        //                                             8 dari 10 Pesanan Diproses
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-col ml-3 w-3/12 max-md:ml-0 max-md:w-full">
        //                 <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-3 max-md:mt-6 max-md:max-w-full">
        //                     <div className="flex gap-3 justify-between text-xl font-bold text-[#163020]">
        //                         <img
        //                             loading="lazy"
        //                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a264959575f98a2555026108e65f6d6b08f0edd0b35291c65948fb5da62f61cf?"
        //                             className="shrink-0 w-8 aspect-square"
        //                         />
        //                         <div>Feedback&nbsp;</div>
        //                     </div>
        //                     <div className="flex gap-3 mt-4 text-sm text-neutral-800">
        //                         <div className="flex flex-col flex-1">
        //                             <div className="flex gap-2 pr-5 tracking-tighter whitespace-nowrap max-md:pr-3">
        //                                 <div className="my-auto">Positif</div>
        //                                 <img
        //                                     loading="lazy"
        //                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?"
        //                                     className="shrink-0 w-4 aspect-square fill-stone-200"
        //                                 />
        //                             </div>
        //                             <div className="mt-4 text-xl font-bold text-[#163020]">
        //                                 13
        //                             </div>
        //                             <div className="mt-2 tracking-tighter leading-4">
        //                                 Respon Baik dari pelanggan
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-col flex-1 self-start">
        //                             <div className="flex gap-2 pr-3 tracking-tighter whitespace-nowrap max-md:pr-3">
        //                                 <div className="my-auto">Negatif</div>
        //                                 <img
        //                                     loading="lazy"
        //                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c71ec3c222b0393b1a93d5706a69817358580ff48227137841267398b026581?"
        //                                     className="shrink-0 w-4 aspect-square fill-stone-200"
        //                                 />
        //                             </div>
        //                             <div className="mt-4 text-xl font-bold text-[#163020]">
        //                                 2
        //                             </div>
        //                             <div className="mt-2 tracking-tighter">
        //                                 Kritik dan Saran
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="self-stretch px-8 py-2 max-md:px-3">
        //         <div className="flex gap-3 max-md:flex-col max-md:gap-0">
        //             <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        //                 <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-3 max-md:mt-6 max-md:max-w-full">
        //                     <div className="flex gap-3 justify-between self-start text-xl font-bold text-[#163020]">
        //                         <img
        //                             loading="lazy"
        //                             src="Union.png"
        //                             className="shrink-0 w-8 aspect-square"
        //                         />
        //                         <div>Ringkasan Transaksi</div>
        //                     </div>
        //                     <div className="flex gap-3 mt-4 text-black max-md:flex-wrap">
        //                         <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3">
        //                             <div className="text-sm tracking-tighter">
        //                                 Pesanan Baru
        //                             </div>
        //                             <div className="mt-2 text-xl font-bold">
        //                                 2
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3">
        //                             <div className="text-sm tracking-tighter">
        //                                 Pesanan Diproses
        //                             </div>
        //                             <div className="mt-2 text-xl font-bold">
        //                                 8
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3">
        //                             <div className="text-sm tracking-tighter">
        //                                 Pesanan Dibatalkan
        //                             </div>
        //                             <div className="mt-2 text-xl font-bold">
        //                                 0
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-col flex-1 justify-center items-center px-14 max-md:px-3" />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-col ml-3 w-6/12 max-md:ml-0 max-md:w-full">
        //                 <div className="flex flex-col grow self-stretch p-8 w-full rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-3 max-md:mt-6 max-md:max-w-full">
        //                     <div className="flex gap-3 justify-between self-start text-xl font-bold text-[#163020]">
        //                         <img
        //                             loading="lazy"
        //                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbda87e5e4cd102627847df7a9261c46bac2a70c12d85eb4c6cff69949656958?"
        //                             className="shrink-0 w-8 aspect-square"
        //                         />
        //                         <div>Daftar Sampah</div>
        //                     </div>
        //                     <div className="flex gap-3 mt-4 text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        //                         <div className="flex flex-1 justify-center items-center px-14 max-md:px-3">
        //                             <div className="flex flex-col">
        //                                 <div className="text-sm tracking-tighter">
        //                                     Dijual
        //                                 </div>
        //                                 <div className="mt-2 text-xl font-bold">
        //                                     0
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-1 justify-center items-center px-14 max-md:px-3">
        //                             <div className="flex flex-col">
        //                                 <div className="text-sm tracking-tighter">
        //                                     Habis
        //                                 </div>
        //                                 <div className="mt-2 text-xl font-bold">
        //                                     0
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-1 justify-center items-center px-14 max-md:px-3">
        //                             <div className="flex flex-col">
        //                                 <div className="text-sm tracking-tighter">
        //                                     Draft
        //                                 </div>
        //                                 <div className="mt-2 text-xl font-bold">
        //                                     0
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
            }
        >
            <Head title="Dashboard" />
            {/* <div>
                Hallo
            </div> */}
            <div className="flex flex-col">
                <div className="flex justify-center items-center px-16 py-9 w-full bg-[color:var(--Neat,#EEF0E5)] leading-[100%] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between w-full max-w-[1680px] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-3 text-2xl text-[color:var(--Dark,#163020)]">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e70435f3e3695b3c3f62416688b123bcd50de9aaf5173cb11e29efd2786d9d8?placeholderIfAbsent=true"
                                backgroundSize="auto"
                                className="relative shrink-0 w-[35px]"
                                aspectRatio={1.37}
                                noWebp={true}
                            />
                            <div className="my-auto not-italic">
                                <span className="font-bold">Eco</span>Swap
                            </div>
                            {/* <div></div> */}
                        </div>
                        <div className="flex gap-5 justify-between my-auto text-base font-bold whitespace-nowrap">
                            <div className="flex flex-col justify-center px-6 py-3 not-italic rounded-md bg-[color:var(--Dark,#163020)] text-[color:var(--Neat,#EEF0E5)] max-md:px-5">
                                Masuk
                            </div>
                            <div className="flex flex-col justify-center px-6 py-3 not-italic rounded-md border-2 border-solid border-neutral-800 text-[color:var(--Dark,#163020)] max-md:px-5">
                                Daftar
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 px-20 py-12 max-md:flex-wrap max-md:px-5">
                    <div className="flex flex-col flex-1 justify-center text-base leading-4 text-[color:var(--Dark,#163020)] max-md:max-w-full">
                        <div className="flex gap-3 px-6 py-3 rounded-md bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?placeholderIfAbsent=true"
                                backgroundSize="auto"
                                className="relative shrink-0 w-6"
                                aspectRatio={1}
                                noWebp={true}
                            />
                            <div className="my-auto not-italic max-md:max-w-full">
                                Mencoba mencari sesuatu?
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col justify-center items-center px-6 w-16 h-16 rounded-md bg-[color:var(--More-Muted,#DFE4DF)] max-md:pl-5">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1326360a1da280407f596a5d5c647c2057f9f1408186eea43b511ff3e2c34ecc?placeholderIfAbsent=true"
                                backgroundSize="auto"
                                className="relative w-6"
                                aspectRatio={1}
                                noWebp={true}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col justify-center items-center px-6 w-16 h-16 rounded-md bg-[color:var(--More-Muted,#DFE4DF)] max-md:pl-5">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2586b30d181d792f4d3b197ea90f6b6e9e0719ebe3ef42f286bc9ec062a5eb2?placeholderIfAbsent=true"
                                backgroundSize="auto"
                                className="relative w-5"
                                aspectRatio={1}
                                noWebp={true}
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="w-full bg-[color:var(--More-Muted,#DFE4DF)] min-h-[12px] max-md:max-w-full" /> */}
                <div className="flex flex-col justify-center w-full text-right leading-[100%] text-[color:var(--Neat,#EEF0E5)] max-md:max-w-full">
                    <div className="flex flex-col justify-center w-full bg-[color:var(--More-Muted,#DFE4DF)] max-md:max-w-full">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc60f2149a8e8393aee9dc17c93ecc274409ebf32c1084c932891d8030d73fd3?placeholderIfAbsent=true"
                            backgroundSize="cover"
                            className="flex overflow-hidden relative flex-col items-start px-12 pt-20 pb-12 w-full min-h-[560px] max-md:px-5 max-md:max-w-full"
                            aspectRatio={0.29}
                            noWebp={false}
                            fitContent={true}
                        >
                            {/* <div className="flex relative flex-col px-12 py-6 mt-80 rounded-xl bg-[color:var(--Dark,#163020)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <div className="text-4xl not-italic font-semibold max-md:max-w-full">
                                    EcoDu Headline
                                </div>
                                <div className="mt-3 text-base not-italic max-md:max-w-full">
                                    Ini adalah subjudul untuk informasi lebih lanjut dan lainnya{" "}
                                </div>
                            </div> */}
                        </img>
                    </div>
                </div>
                <div className="w-full bg-[color:var(--More-Muted,#DFE4DF)] min-h-[12px] max-md:max-w-full" />
                <div className="flex flex-col px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
                    <div className="mx-4 text-4xl not-italic font-semibold leading-10 text-[color:var(--Dark,#163020)] max-md:mr-2.5 max-md:ml-0 max-md:max-w-full">
                        Limbah Organik
                    </div>
                    <div
                        className="mx-4 mt-6 max-md:mr-2.5 max-md:ml-0 max-md:max-w-full"
                        space={19}
                    >
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/360273999fe1d0a8169b5527b3becd18efce8a75c39f8e5899202939546bb958?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    {/* <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        PT Agantaratel
                                    </div> */}
                                    {/* <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 10.000/5 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <Image
                                                image="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Sanggau, Kalimantan Barat</div>
                                        </div>
                                    </div> */}
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kulit Telur
                                </div>
                            </div>
                        </div>
                        {/* <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d248686faca1f80164674e3801ee0702f63cd6b7b7892840f6bf3792fdbd253?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Sawit Maju Jaya
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 1.000.000/15 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Sanggau, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Limbah Sawit
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4fe87d76adb3a900b4acb45000431cc185751b2f1cc5731f30909a31af8128f?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Haditan Wood Company
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 100.000/5 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <Image
                                                image="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Ketapang, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Serpihan Kayu
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af5386b6b06c0647cbb028a6efccea443889bed17ad82a615bdfa2f10d43d53?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Mama Super Market
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">Rp 5.000/1 Kg</div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Sayuran
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div
                        className="mx-4 mt-6 max-md:mr-2.5 max-md:ml-0 max-md:max-w-full"
                        space={19}
                    >
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/56dee6b0b1bc25db14f170ed6848ecde20dcbfad81ccd97a9a17266df966ca1e?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        AkTaja Industry
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 100.000/5 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Landak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kelapa Kering
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e52e03cfc926142a1a7d9418035244965f4c826dac1b0ee28495eb75a25e526?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Arina Trinala
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 20.000/3 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <imh
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kulit Jeruk
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Lenn Tanuwijaya
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 50.000/3 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kulit Manggis
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/efd329b1eb2cc949bd83fc25a5a3f4e3933df2043628445b2e3b7e6d80b47982?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        PT Sawit Dermaga
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 1.500.000/10 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Ketapang, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Limbah Sawit
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="w-full bg-[color:var(--More-Muted,#DFE4DF)] min-h-[12px] max-md:max-w-full" />
                <div
                    $name="Box"
                    className="flex flex-col px-20 py-12 w-full max-md:px-5 max-md:max-w-full"
                >
                    <div className="mx-4 text-4xl not-italic font-semibold leading-10 text-[color:var(--Dark,#163020)] max-md:mr-2.5 max-md:ml-0 max-md:max-w-full">
                        Limbah Anorganik
                    </div>
                    <div
                        className="mx-4 mt-6 max-md:mr-2.5 max-md:ml-0 max-md:max-w-full"
                        space={19}
                    >
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        PT Sintaralewi
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 200.000/40 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Ketapang, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kemasan Sterofoam
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Glass Corporate Company
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 100.000/10 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <Iimg
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Botol Kaca
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        PT Cermin Raya
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 1.000.000/15 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Cermin rusak
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Rinata Swinary
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">Rp 5.000/1 Kg</div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Botol Plastik{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mx-4 mt-6 max-md:mr-2.5 max-md:ml-0 max-md:max-w-full"
                        space={19}
                    >
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Steam Steel Company
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 1.000.000/15 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Landak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Scrap Besi
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        PT Produta Jaya
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 10.000/2 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Ketapang, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Potongan Kayu
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Lalina Kain
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 50.000/1 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kain Perca
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Harina Rumah Produksi
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 1.000.000/15 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Landak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kaleng Kemasan
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="w-full bg-[color:var(--More-Muted,#DFE4DF)] min-h-[12px] max-md:max-w-full" />
                <div className="flex flex-col px-20 py-12 w-full bg-[color:var(--Dark,#163020)] leading-[100%] max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col justify-center py-6 mx-4 text-[color:var(--Neat,#EEF0E5)] max-md:mr-2.5 max-md:ml-0 max-md:max-w-full">
                        <div className="flex gap-3 max-md:flex-wrap">
                            <div className="flex-1 my-auto text-2xl not-italic font-semibold max-md:max-w-full">
                                Seseorang Mencari Limbah
                            </div>
                            <div className="flex flex-col justify-center px-6 py-3 text-base not-italic rounded-xl border-2 border-solid border-neutral-200 max-md:px-5">
                                Mari Diskusikan Pencarian
                            </div>
                        </div>
                        <div className="mt-3 text-base not-italic max-md:max-w-full">
                            Mari kita lihat apa yang dapat Anda lakukan!
                        </div>
                    </div>
                    <div className="flex overflow-x-auto flex-col justify-center mx-4 mb-12 text-base font-semibold text-[color:var(--Dark,#163020)] max-md:mr-2.5 max-md:mb-10 max-md:ml-0 max-md:max-w-full">
                        <div className="flex z-10 gap-5 justify-between -mb-32 max-md:flex-wrap max-md:mb-2.5">
                            <div className="flex gap-5 p-6 rounded-xl bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?placeholderIfAbsent=true"
                                    backgroundSize="auto"
                                    className="relative shrink-0 self-start w-12"
                                    aspectRatio={1}
                                    noWebp={false}
                                />
                                <div className="flex flex-col flex-1 max-md:max-w-full">
                                    <div className="not-italic max-md:max-w-full">Rina Akrina</div>
                                    <div className="mt-3 text-2xl not-italic max-md:max-w-full">
                                        Kardus Bekas
                                    </div>
                                    <div className="mt-3 not-italic max-md:max-w-full">
                                        Dicari kardus bekas dari industry rumahan atau pabrik...
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 p-6 rounded-xl bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?placeholderIfAbsent=true"
                                    backgroundSize="auto"
                                    className="relative shrink-0 self-start w-12"
                                    aspectRatio={1}
                                    noWebp={false}
                                />
                                <div className="flex flex-col flex-1 max-md:max-w-full">
                                    <div className="not-italic max-md:max-w-full">Amely11</div>
                                    <div className="mt-3 text-2xl not-italic max-md:max-w-full">
                                        Kantong Plastik
                                    </div>
                                    <div className="mt-3 not-italic max-md:max-w-full">
                                        Dibutuhkan kantong plastik kemasan sisa produksi ata...
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 p-6 rounded-xl bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?placeholderIfAbsent=true"
                                    backgroundSize="auto"
                                    className="relative shrink-0 self-start w-12"
                                    aspectRatio={1}
                                    noWebp={false}
                                />
                                <div className="flex flex-col flex-1 max-md:max-w-full">
                                    <div className="not-italic max-md:max-w-full">Wiry Agustin</div>
                                    <div className="mt-3 text-2xl not-italic max-md:max-w-full">
                                        Tutup Botol Kaleng
                                    </div>
                                    <div className="mt-3 not-italic max-md:max-w-full">
                                        Dibutuhkan tutup botol kaleng bekas sisa pemakaian...
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 p-6 rounded-xl bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/773446575f44502adc191d732fe36edbce3bc9221b9d153fb4d59ecb116641f2?placeholderIfAbsent=true"
                                    backgroundSize="auto"
                                    className="relative shrink-0 self-start w-12"
                                    aspectRatio={1}
                                    noWebp={false}
                                />
                                <div className="flex flex-col flex-1 max-md:max-w-full">
                                    <div className="not-italic max-md:max-w-full">User Name</div>
                                    <div className="mt-3 text-2xl not-italic max-md:max-w-full">
                                        Waste Name
                                    </div>
                                    <div className="mt-3 not-italic max-md:max-w-full">
                                        User story about waste they need
                                    </div>
                                </div>
                            </div>
                            <div className="flex z-10 gap-5 p-6 rounded-xl bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true"
                                    backgroundSize="auto"
                                    className="relative shrink-0 self-start w-12"
                                    aspectRatio={1}
                                    noWebp={false}
                                />
                                <div className="flex flex-col flex-1 max-md:max-w-full">
                                    <div className="not-italic max-md:max-w-full">User Name</div>
                                    <div className="mt-3 text-2xl not-italic max-md:max-w-full">
                                        Waste Name
                                    </div>
                                    <div className="mt-3 not-italic max-md:max-w-full">
                                        User story about waste they need
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[color:var(--More-Muted,#DFE4DF)] min-h-[12px] max-md:max-w-full" />
                <div className="flex flex-col px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
                    <div className="mx-4 text-4xl not-italic font-semibold leading-10 text-[color:var(--Dark,#163020)] max-md:mr-2.5 max-md:ml-0 max-md:max-w-full">
                        Mencari Limbah Lainnya?
                    </div>
                    <div
                        className="mx-4 mt-6 max-md:mr-2.5 max-md:ml-0 max-md:max-w-full"
                        space={19}
                    >
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Es Jeruk Lala
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 15.000/1 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Ketapang, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kulit Jeruk{" "}
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        PT Rey Jaganda
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 200.000/40 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Sanggau, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kemasan Produksi
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Rumah Makan Hi Geprek
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 200.000/40 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Landak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kemasan Sterofoam
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Ptk Mineral Water Company
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 100.000/10 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Botol Plastik
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mx-4 mt-6 max-md:mr-2.5 max-md:ml-0 max-md:max-w-full"
                        space={19}
                    >
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Amora Beauty
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">Rp 5.000/1 Kg</div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Sanggau, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kardus Bekas
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Han Battery Industry
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 20.000/10 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Sanggau, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Baterai Bekas
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        NataCoco Production
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 100.000/5 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Landak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Serabut Kelapa
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        PT Ternak Tumbuh
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 200.000/5 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Sanggau, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kotoran Sapi
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mx-4 mt-6 max-md:mr-2.5 max-md:ml-0 max-md:max-w-full"
                        space={19}
                    >
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Lenn Tanuwijaya
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 50.000/3 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kulit Manggis
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Goga Mineral
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">Rp 5.000/1 Kg</div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Botol Plastik
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Miror Industry
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 1.000.000/15 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Ketapang, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Cermin Reject
                                </div>
                            </div>
                        </div>
                        <div width={25}>
                            <div className="flex flex-col grow leading-[100%] max-md:mt-6">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?placeholderIfAbsent=true"
                                    backgroundSize="cover"
                                    className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full rounded-xl aspect-[1.78] text-[color:var(--Neat,#EEF0E5)]"
                                    aspectRatio={0.56}
                                    noWebp={false}
                                    fitContent={true}
                                >
                                    <div className="relative text-2xl not-italic font-semibold backdrop-blur-[2px]">
                                        Jus Remina
                                    </div>
                                    <div className="flex relative flex-col mt-28 text-right backdrop-blur-[2px] max-md:mt-10">
                                        <div className="text-2xl not-italic font-semibold">
                                            Rp 10.000/1 Kg
                                        </div>
                                        <div className="flex gap-1.5 px-20 mt-1.5 text-base max-md:px-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?placeholderIfAbsent=true"
                                                backgroundSize="auto"
                                                className="relative shrink-0 w-4"
                                                aspectRatio={1}
                                                noWebp={true}
                                            />
                                            <div className="not-italic">Pontianak, Kalimantan Barat</div>
                                        </div>
                                    </div>
                                </img>
                                <div className="mt-3 text-2xl not-italic font-bold text-[color:var(--Dark-Shade,#304D30)]">
                                    Kulit Buah-Buahan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[color:var(--More-Muted,#DFE4DF)] min-h-[12px] max-md:max-w-full" />
                <div className="px-20 py-12 w-full max-md:px-5 max-md:max-w-full" space={38}>
                    <div width={31.801909307875896}>
                        <div className="flex flex-col self-stretch my-auto leading-[100%] max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-3 font-semibold text-[color:var(--Dark,#163020)] max-md:flex-wrap">
                                <div className="text-2xl not-italic">EcoSeller’s</div>
                                <div className="flex-1 text-base not-italic">
                                    Tertarik untuk berjualan? Jadilah Penjual
                                </div>
                            </div>
                            <div className="mt-6 text-base not-italic text-[color:var(--Dark,#163020)] max-md:max-w-full">
                                Cara mudah untuk menyalurkan sampah Anda ke tempat yang tepat
                            </div>
                            <div className="flex gap-5 justify-between mt-6 text-base max-md:flex-wrap">
                                <div className="flex flex-col justify-center px-6 py-3 not-italic font-semibold text-white rounded-xl bg-[color:var(--Dark,#163020)] max-md:px-5">
                                    Daftar Sekarang
                                </div>
                                <div className="my-auto not-italic text-[color:var(--Dark,#163020)]">
                                    Selengkapnya
                                </div>
                            </div>
                        </div>
                    </div>
                    <div width={68.1980906921241}>
                        <div className="flex flex-col grow justify-center w-full text-2xl font-bold leading-6 whitespace-nowrap rounded-xl bg-[color:var(--Muted,#B6C4B6)] text-stone-200 max-md:mt-10 max-md:max-w-full">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?placeholderIfAbsent=true"
                                backgroundSize="cover"
                                className="flex overflow-hidden relative justify-center items-center px-16 py-20 w-full min-h-[265px] max-md:px-5 max-md:max-w-full"
                                aspectRatio={0.23}
                                noWebp={false}
                                fitContent={true}
                            >
                                <div className="flex relative gap-3 mt-5 mb-5">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6754c44e546baaabbaa83581a5b704e87ab67d60826ac8af9324107734ceb63?placeholderIfAbsent=true"
                                        backgroundSize="auto"
                                        className="relative shrink-0 w-[46px]"
                                        aspectRatio={1.39}
                                        noWebp={true}
                                    />
                                    <div className="my-auto not-italic">EcoSell</div>
                                </div>
                            </img>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[color:var(--More-Muted,#DFE4DF)] min-h-[12px] max-md:max-w-full" />
                <div className="flex gap-0 justify-between items-start px-20 py-12 text-base leading-4 bg-[color:var(--Neat,#EEF0E5)] text-neutral-600 max-md:flex-wrap max-md:px-5">
                    <div className="flex flex-col flex-1 self-stretch">
                        <div className="text-2xl not-italic font-semibold text-[color:var(--Dark,#272727)]">
                            Kategori
                        </div>
                        <div className="mt-3 not-italic">Limbah Kulit Buah</div>
                        <div className="mt-3 not-italic">Limbah Elektronik</div>
                        <div className="mt-3 not-italic">Limbah Plastik</div>
                        <div className="mt-3 not-italic">Limbah Kain</div>
                        <div className="mt-3 not-italic">Limbah Kaca</div>
                        <div className="mt-3 not-italic">Limbah Minyak Jelatah</div>
                        <div className="mt-3 not-italic">Limbah Kayu</div>
                        <div className="mt-3 not-italic">Limbah Styrofoam</div>
                        <div className="mt-3 not-italic">Limbah Besi</div>
                        <div className="mt-3 not-italic">Kompos</div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="text-2xl not-italic font-semibold text-[color:var(--Dark,#272727)]">
                            Tentang
                        </div>
                        <div className="mt-3 not-italic">Cerita Kami</div>
                        <div className="mt-3 not-italic">Pers & Berita</div>
                        <div className="mt-3 not-italic">Mitra</div>
                        <div className="mt-3 not-italic">Kebijakan Privasi</div>
                        <div className="mt-3 not-italic">Relasi Investor</div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="text-2xl not-italic font-semibold text-[color:var(--Dark,#272727)]">
                            Dukungan
                        </div>
                        <div className="mt-3 not-italic">Bantuan & Dukungan</div>
                        <div className="mt-3 not-italic">Kepercayaan & Keamanan</div>
                        <div className="mt-3 not-italic">Menjual di EcoSwap</div>
                        <div className="mt-3 not-italic">Pembelian di EcoSwap</div>
                    </div>
                    <div className="flex flex-col flex-1 self-stretch">
                        <div className="text-2xl not-italic font-semibold text-[color:var(--Dark,#272727)]">
                            Komunitas
                        </div>
                        <div className="mt-3 not-italic">Kisah Sukses Pelanggan</div>
                        <div className="mt-3 not-italic">Pusat Komunitas</div>
                        <div className="mt-3 not-italic">Forum</div>
                        <div className="mt-3 not-italic">Acara</div>
                        <div className="mt-3 not-italic">Blog</div>
                        <div className="mt-3 not-italic">Pemberi pengaruh</div>
                        <div className="mt-3 not-italic">Afiliasi</div>
                        <div className="mt-3 not-italic">Podcast</div>
                        <div className="mt-3 not-italic">Menjadi Penjual</div>
                        <div className="mt-3 not-italic">Standar Komunitas</div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="text-2xl not-italic font-semibold text-[color:var(--Dark,#272727)]">
                            Lainnya dari EcoSwap
                        </div>
                        <div className="mt-3 not-italic">Pendidikan EcoSwap</div>
                        <div className="mt-3 not-italic">Postingan EcoSwap</div>
                        <div className="mt-3 not-italic">Dapatkan Inspirasi</div>
                    </div>
                </div>
                <div className="flex justify-center items-center px-16 py-12 w-full text-base leading-4 text-black bg-[color:var(--Neat,#EEF0E5)] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f5f49d282f4fcec13579ff9e9be34ce95d8956d247de0ece932a12015704491?placeholderIfAbsent=true"
                            backgroundSize="auto"
                            className="relative shrink-0 w-[47px]"
                            aspectRatio={1.36}
                            noWebp={true}
                        />
                        <div className="my-auto not-italic">EcoSwap Copyright 2024</div>
                    </div>
                </div> */}
            </div>
        </AuthenticatedLayout>
    );
}
