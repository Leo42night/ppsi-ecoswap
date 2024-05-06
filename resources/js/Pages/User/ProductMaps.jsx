import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
        <div className="flex flex-col justify-center bg-[#EEF0E5]">
            <div className="flex flex-col justify-center bg-[#EEF0E5]">
                <div className="flex flex-col items-center px-5 pt-12 w-full bg-[#EEF0E5] max-md:max-w-full">
                    <div className="flex gap-5 justify-between w-full max-w-[1290px] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-5 justify-between w-full text-2xl font-semibold leading-6 max-w-[1248px] text-neutral-700 max-md:flex-wrap max-md:max-w-full">
                            <div class="flex flex-row items-center px-39 mt-18 w-full max-md:flex-col max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <a href={route('dashboard')}><img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dacd6a9a7b3c3da2aa8cbe3c61842936b413bf911eb3e09e563283b6b24ee778?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                    class="shrink-0 w-10 aspect-square"
                                /></a>
                                <div class="mx-4 text-2xl font-semibold leading-6 text-black max-md:mr-2.5 max-md:max-w-full">
                                    Detail Produk
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div className="relative">
                    <div className="absolute top-0 left-0">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/00c2a22ab8c4d41bbc2670d5825084b4ec04665a75dd0c5d7df36dd4405ec3ba?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="w-full aspect-[1.41]"
                        />
                    </div>
                    <div className="flex flex-col relative mt-16 ml-16 max-w-full w-[695px] max-md:mt-10">
                        <div className="flex gap-5 justify-between px-0.5 max-md:flex-wrap max-md:max-w-full">
                            {/* Icon Images Here */}
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                className="shrink-0 aspect-square w-[70px]"
                            />
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&"
                                className="shrink-0 aspect-square w-[70px]"
                            />
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="mt-56 ml-24 aspect-square w-[70px] max-md:mt-10 max-md:ml-2.5"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c70cbdebe9dc3847303d327bf1937863c6a3cc60cfdbe21065af2069eff23e00?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="mt-56 ml-24 aspect-square w-[70px] max-md:mt-10 max-md:ml-2.5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}