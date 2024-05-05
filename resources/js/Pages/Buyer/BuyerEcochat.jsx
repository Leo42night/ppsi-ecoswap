import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
        <div className="flex flex-col bg-[#EEF0E5]">
            <div className="pb-20 w-full max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="self-stretch px-0 py-12 w-full max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                                <div className="flex justify-center items-center px-5 mx-auto w-12 h-12 bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)] rounded-[72px] max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb3cf0547027ec4b552cf5517df5cf75857370f77046d61683ed86ecf77b994?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="w-3 aspect-[0.6] fill-stone-200"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between w-full max-w-[1290px] max-md:flex-wrap max-md:max-w-full">
                                <div className="flex gap-5 justify-between w-full text-2xl font-semibold leading-6 max-w-[1248px] text-neutral-700 max-md:flex-wrap max-md:max-w-full">
                                    <div class="flex flex-row items-center px-39 mt-18 w-full max-md:flex-col max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dacd6a9a7b3c3da2aa8cbe3c61842936b413bf911eb3e09e563283b6b24ee778?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                            class="shrink-0 w-10 aspect-square"
                                        />
                                        <div class="mx-4 text-2xl font-semibold leading-6 text-black max-md:mr-2.5 max-md:max-w-full">
                                            Ecochat
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center self-stretch bg-[#EEF0E5] max-w-[2000px]">
                            <div className="self-stretch px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-2.5 self-stretch px-6 mt-6 max-md:flex-wrap max-md:px-5">
                                    <div className="flex flex-3 gap-3 px-6 py-3 text-base leading-4 rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d5931ffe2fce8444b9d9dd9d0328e031761df9d9b1e76698a347910551a4a91?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                     <input type="text" className="my-auto bg-[#304D30] border border-[#304D30]  rounded-md px-3 py-2 w-full focus:outline-none" placeholder="Mencoba mencari sesuatu?" />

                                    </div>
                                    <div className="flex justify-center items-center px-6 py-3 w-16 h-16 rounded-md bg-[#304D30]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20c00500c45db8eab113d3dcf36bf055d988e758aa2b05619410b37d018978f7?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                            className="w-6 aspect-square"
                                        />
                                    </div>
                                </div>


                                <div className="flex gap-3 px-6 py-3 mt-6 w-full rounded-md border border-solid border-zinc-400 leading-[100%] max-w-[452px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ff96136d49503f515d7e675c940d9a91ed2e7641bb5e62b14aff312979e038?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-9 aspect-square"
                                    />
                                    <div className="flex flex-col flex-1 justify-center pr-7 my-auto">
                                        <div className="text-xl text-black">PT Tanarayan</div>
                                        <div className="text-sm text-neutral-700">
                                            Hallo, Selamat siang PT Angkasa Raya saya sedang....
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 px-6 py-3 mt-6 w-full rounded-md border border-solid border-zinc-400 leading-[100%] max-w-[452px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ff96136d49503f515d7e675c940d9a91ed2e7641bb5e62b14aff312979e038?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-9 aspect-square"
                                    />
                                    <div className="flex flex-col flex-1 justify-center pr-7 my-auto">
                                        <div className="text-xl text-black">PT Tanarayan</div>
                                        <div className="text-sm text-neutral-700">
                                            Hallo, Selamat siang PT Angkasa Raya saya sedang....
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 px-6 py-3 mt-6 w-full rounded-md border border-solid border-zinc-400 leading-[100%] max-w-[452px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ff96136d49503f515d7e675c940d9a91ed2e7641bb5e62b14aff312979e038?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-9 aspect-square"
                                    />
                                    <div className="flex flex-col flex-1 justify-center pr-7 my-auto">
                                        <div className="text-xl text-black">PT Tanarayan</div>
                                        <div className="text-sm text-neutral-700">
                                            Hallo, Selamat siang PT Angkasa Raya saya sedang....
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 px-6 py-3 mt-6 w-full rounded-md border border-solid border-zinc-400 leading-[100%] max-w-[452px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ff96136d49503f515d7e675c940d9a91ed2e7641bb5e62b14aff312979e038?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-9 aspect-square"
                                    />
                                    <div className="flex flex-col flex-1 justify-center pr-7 my-auto">
                                        <div className="text-xl text-black">PT Tanarayan</div>
                                        <div className="text-sm text-neutral-700">
                                            Hallo, Selamat siang PT Angkasa Raya saya sedang....
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 px-6 py-3 mt-6 w-full rounded-md border border-solid border-zinc-400 leading-[100%] max-w-[452px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ff96136d49503f515d7e675c940d9a91ed2e7641bb5e62b14aff312979e038?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                        className="shrink-0 w-9 aspect-square"
                                    />
                                    <div className="flex flex-col flex-1 justify-center pr-7 my-auto">
                                        <div className="text-xl text-black">PT Tanarayan</div>
                                        <div className="text-sm text-neutral-700">
                                            Hallo, Selamat siang PT Angkasa Raya saya sedang....
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col ml-1 w-[64%] max-md:ml-0 max-md:w-full h-full">
                        <div class="flex flex-col pt-3 py-2 w-full bg-[#B6C4B6] max-md:max-w-full">
                            <div class="flex gap-5 justify-between self-center w-full max-w-[850px] max-md:flex-wrap max-md:max-w-full">
                                <div class="flex gap-5 px-px py-3.5 leading-[100%] text-neutral-800 max-md:flex-wrap">
                                    <img
                                        loading="lazy"
                                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a62446f49dc3aa5706ff04ac5a82a1402c6f199b9bf247f780b018ba340bae2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                        class="shrink-0 rounded-full aspect-square w-[70px]"
                                    />
                                </div>
                                <div class="flex justify-center items-center px-4 my-auto rounded-xl bg-[#304D30] h-[54px] w-[54px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/001e7a75091e6336b7af1388ca529b2067139dcb6bca2bf8cf133acb6d2a41a9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                        class="w-6 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col px-16 pt-12 pb-20 w-full text-base bg-[#DFE4DF] text-neutral-800 max-md:px-5 max-md:max-w-full">
                            <div class="justify-center px-5 py-3.5 leading-4 bg-white rounded-xl max-md:mr-2 max-md:max-w-full">
                                Hallo, Selamat siang PT Angkasa Raya saya sedang mencari
                                sampah plastik sebanyak 30kg, Apakah anda
                                <br />
                                memiliki stok limbah tersebut??
                            </div>
                            <div class="justify-center self-end px-5 py-3.5 mt-6 mb-80 bg-emerald-100 rounded-xl leading-[100%] max-md:mr-2 max-md:mb-10 max-md:max-w-full">
                                Hallo PT Tanarayan, mohon maaf saya tidak memiliki limbah
                                tersebut.
                            </div>
                        </div>
                        <div class="flex flex-col justify-center px-16 py-10 w-full bg-[#DFE4DF] max-md:px-5 max-md:max-w-full">
                            <div class="flex gap-2.5 max-md:flex-wrap">
                                <div class="px-5 py-3.5 bg-white rounded-xl text-neutral-800 max-md:pr-5 max-md:max-w-full h-[54px] w-[1005px]">
                                    <input type="text" class="border-none bg-transparent outline-none w-full h-full" placeholder="Ketikan Pesan Anda..." />
                                </div>
                                <div class="flex items-center space-x-2">
                                    <div class="flex justify-center items-center px-3 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fce715b0acabac7b50e3c2e0f3df9272b035e42fb9a9c06c59de7927f065b40?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                            class="w-full aspect-square"
                                        />
                                    </div>
                                    <div class="flex justify-center items-center py-3.5 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a979737f4c29ae13a40dacecb933b4b24fa00194affe56cc6cdfb983074cc797?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                            class="w-6 aspect-square"
                                        />
                                    </div>
                                    <div class="flex justify-center items-center px- py-3.5 rounded-xl bg-[#B6C4B6] h-[54px] w-[54px]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2b8ee04c1c05ede7e98c11486ec405c0e76ff04c4e04578065822b19346f4a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                                            class="w-6 aspect-[0.93]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}