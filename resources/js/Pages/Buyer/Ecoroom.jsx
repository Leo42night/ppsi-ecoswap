import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
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
                                Detail Produk
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-3 px-20 py-12 max-md:flex-wrap max-md:px-5 bg-[#EEF0E5]">
                <div class="flex flex-col flex-1 justify-center text-base leading-4 text-[color:var(--Dark,#163020)] max-md:max-w-full">
                    <div class="flex gap-3 px-6 py-3 rounded-md bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?placeholderIfAbsent=true"
                            backgroundSize="auto"
                            class="relative shrink-0 w-6"
                            aspectRatio={1}
                            noWebp={true}
                        />
                        <input
                            placeholder="Coba cari sesuatu?"
                            class="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full ">
                    <div className="justify-center px-6 py-3 rounded-md border-2 border-solid bg-[#304D30] border-neutral-700 text-white max-md:px-5 ">
                        Tambah Request
                    </div>
                </div>
                <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                        Mengikuti
                    </div>
                </div>
                <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                        Lokasi
                    </div>
                </div>
                <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-neutral-700 max-md:px-5 ">
                        Kuantitas
                    </div>
                </div>
                <div className="flex gap-5 justify-between my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full ">
                    <div className="justify-center px-6 py-3 rounded-md border-2 border-solid bg-[#B6C4B6] border-neutral-700 text-neutral-700 max-md:px-5">
                        Semua
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center px-5 pt-12 w-full bg-[#EEF0E5] max-md:max-w-full">
                <div className="w-full max-w-[1248px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                                            <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                    className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                />
                                                <div className="flex flex-col justify-center my-auto">
                                                    <div className="text-base font-semibold">Charistheo</div>
                                                    <div className="text-xs">Jl. Purnama, No.10 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                                            <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-white max-md:mt-10 bg-[#304D30]">
                                                Follow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start px-7 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                    <div>Kardus Bekas </div>
                                    <div className="mt-3 leading-4">
                                        Dicari kardus bekas dari industry rumahan atau pabrik yang
                                        bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                        purnama
                                    </div>
                                    <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                        10 Kg
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                    className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                />
                                                <div className="flex flex-col justify-center my-auto">
                                                    <div className="text-base font-semibold">Charistheo</div>
                                                    <div className="text-xs">Jl. Purnama, No.10 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-neutral-700 max-md:mt-10">
                                                Unfollow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start px-7 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                    <div>Kardus Bekas </div>
                                    <div className="mt-3 leading-4">
                                        Dicari kardus bekas dari industry rumahan atau pabrik yang
                                        bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                        purnama
                                    </div>
                                    <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                        20 Kg
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                    className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                />
                                                <div className="flex flex-col justify-center my-auto">
                                                    <div className="text-base font-semibold">Charistheo</div>
                                                    <div className="text-xs">Jl. Purnama, No.10 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-neutral-700 max-md:mt-10">
                                                Unfollow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start px-7 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                    <div>Kardus Bekas </div>
                                    <div className="mt-3 leading-4">
                                        Dicari kardus bekas dari industry rumahan atau pabrik yang
                                        bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                        purnama
                                    </div>
                                    <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                        25 Kg
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full max-w-[1248px] max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                    <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                                                <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                        className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                    />
                                                    <div className="flex flex-col justify-center my-auto">
                                                        <div className="text-base font-semibold">Charistheo</div>
                                                        <div className="text-xs">Jl. Purnama, No.10 </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                                <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-neutral-700 max-md:mt-10">
                                                    Unfollow
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start px-7 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                        <div>Kardus Bekas </div>
                                        <div className="mt-3 leading-4">
                                            Dicari kardus bekas dari industry rumahan atau pabrik yang
                                            bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                            purnama
                                        </div>
                                        <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                            20 Kg
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                    <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                                                <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                        className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                    />
                                                    <div className="flex flex-col justify-center my-auto">
                                                        <div className="text-base font-semibold">Charistheo</div>
                                                        <div className="text-xs">Jl. Purnama, No.10 </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                                                <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-white max-md:mt-10 bg-[#304D30]">
                                                    Follow
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start px-6 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                        <div>Kemasan Sterofoam</div>
                                        <div className="mt-3 leading-4">
                                            Dicari kardus bekas dari industry rumahan atau pabrik yang
                                            bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                            purnama
                                        </div>
                                        <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                            49 Kg
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                    <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                                                <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                        className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                    />
                                                    <div className="flex flex-col justify-center my-auto">
                                                        <div className="text-base font-semibold">Charistheo</div>
                                                        <div className="text-xs">Jl. Purnama, No.10 </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                                <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-neutral-700 max-md:mt-10">
                                                    Unfollow
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start px-7 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                        <div>Kardus Bekas </div>
                                        <div className="mt-3 leading-4">
                                            Dicari kardus bekas dari industry rumahan atau pabrik yang
                                            bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                            purnama
                                        </div>
                                        <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                            15 Kg
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full max-w-[1248px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                                            <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                    className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                />
                                                <div className="flex flex-col justify-center my-auto">
                                                    <div className="text-base font-semibold">Charistheo</div>
                                                    <div className="text-xs">Jl. Purnama, No.10 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                                            <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-white max-md:mt-10 bg-[#304D30]">
                                                Follow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start px-6 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                    <div>Botol Mineral</div>
                                    <div className="mt-3 leading-4">
                                        Dicari kardus bekas dari industry rumahan atau pabrik yang
                                        bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                        purnama
                                    </div>
                                    <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                        60 Kg
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                    className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                />
                                                <div className="flex flex-col justify-center my-auto">
                                                    <div className="text-base font-semibold">Charistheo</div>
                                                    <div className="text-xs">Jl. Purnama, No.10 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-neutral-700 max-md:mt-10">
                                                Unfollow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start px-6 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                    <div>Kardus Bekas </div>
                                    <div className="mt-3 leading-4">
                                        Dicari kardus bekas dari industry rumahan atau pabrik yang
                                        bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                        purnama
                                    </div>
                                    <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                        90 Kg
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow pb-6 mx-auto w-full bg-white rounded-md max-md:mt-6">
                                <div className="justify-between px-6 py-3 w-full bg-[#B6C4B6] max-md:px-5">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex grow gap-3 leading-[100%] text-neutral-700 max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                                    className="shrink-0 w-9 aspect-square fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                                                />
                                                <div className="flex flex-col justify-center my-auto">
                                                    <div className="text-base font-semibold">Charistheo</div>
                                                    <div className="text-xs">Jl. Purnama, No.10 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                            <div className="justify-center self-stretch px-3 py-1.5 my-auto text-sm leading-3 whitespace-nowrap rounded-md border-2 border-black border-solid text-neutral-700 max-md:mt-10">
                                                Unfollow
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start px-7 mt-6 text-base font-semibold leading-4 text-neutral-700 max-md:px-5">
                                    <div>Kulit Manggis</div>
                                    <div className="mt-3 leading-4">
                                        Dicari kardus bekas dari industry rumahan atau pabrik yang
                                        bersedia menjual limbahnya kepada saya sebagai umkm di wilayah
                                        purnama
                                    </div>
                                    <div className="self-end mt-20 text-2xl text-black max-md:mt-10">
                                        89 Kg
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            &nbsp;
            <div class="self-stretch bg-neutral-200 min-h-[12px]"></div>
            <div class="flex gap-0 justify-between items-start self-stretch px-20 py-12 text-base leading-4 bg-[#EEF0E5] text-neutral-600 max-md:flex-wrap max-md:px-5">
                <div class="flex flex-col flex-1 self-stretch">
                    <div class="text-2xl font-semibold text-[#163020]">Kategori</div>
                    <div class="mt-3 ">Limbah Kulit Buah</div>
                    <div class="mt-3">Limbah Elektronik</div>
                    <div class="mt-3">Limbah Plastik</div>
                    <div class="mt-3">Limbah Kain</div>
                    <div class="mt-3">Limbah Kaca</div>
                    <div class="mt-3">Limbah Minyak Jelatah</div>
                    <div class="mt-3">Limbah Kayu</div>
                    <div class="mt-3">Limbah Styrofoam</div>
                    <div class="mt-3">Limbah Besi</div>
                    <div class="mt-3">Kompos</div>
                </div>
                <div class="flex flex-col flex-1">
                    <div class="text-2xl font-semibold text-[#163020]">Tentang</div>
                    <div class="mt-3">Cerita Kami</div>
                    <div class="mt-3">Pers & Berita</div>
                    <div class="mt-3">Mitra</div>
                    <div class="mt-3">Kebijakan Privasi</div>
                    <div class="mt-3">Relasi Investor</div>
                </div>
                <div class="flex flex-col flex-1">
                    <div class="text-2xl font-semibold text-[#163020]">Dukungan</div>
                    <div class="mt-3">Bantuan & Dukungan</div>
                    <div class="mt-3">Kepercayaan & Keamanan</div>
                    <div class="mt-3">Menjual di EcoSwap</div>
                    <div class="mt-3">Pembelian di EcoSwap</div>
                </div>
                <div class="flex flex-col flex-1 self-stretch">
                    <div class="text-2xl font-semibold text-[#163020]">Komunitas</div>
                    <div class="mt-3">Kisah Sukses Pelanggan</div>
                    <div class="mt-3">Pusat Komunitas</div>
                    <div class="mt-3">Forum</div>
                    <div class="mt-3">Acara</div>
                    <div class="mt-3">Blog</div>
                    <div class="mt-3">Pemberi pengaruh</div>
                    <div class="mt-3">Afiliasi</div>
                    <div class="mt-3">Podcast</div>
                    <div class="mt-3">Menjadi Penjual</div>
                    <div class="mt-3">Standar Komunitas</div>
                </div>
                <div class="flex flex-col flex-1">
                    <div class="text-2xl font-semibold text-[#163020]">
                        Lainnya dari EcoSwap
                    </div>
                    <div class="mt-3">Pendidikan EcoSwap</div>
                    <div class="mt-3">Postingan EcoSwap</div>
                    <div class="mt-3">Dapatkan Inspirasi</div>
                </div>
            </div>
            <footer className="flex justify-center items-center self-stretch px-16 py-12 text-base leading-4 text-[#EEF0E5] bg-black max-md:px-5">
                <div className="flex gap-4 justify-between">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/202a164e4dabb13b721b1acecea6c903dccdbef7e0d75c284c1955662fdc8722?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 aspect-[0.71] w-[50x]"
                    />
                    <div className="my-auto text-2xl">
                        <span className="font-extrabold">Eco</span>Swap
                    </div>
                    <div className="my-auto text-basbe">EcoSwap Copyright 2024</div>
                </div>
            </footer>
        </div>
    );
}