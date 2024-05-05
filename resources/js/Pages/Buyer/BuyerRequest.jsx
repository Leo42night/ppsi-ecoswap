import AuthenticatedBuyer from "@/Layouts/AuthenticatedBuyer";
import { Head, Link } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
    return (
        <div className="flex flex-col justify-center  bg-[#EEF0E5]">
            <div className="flex flex-col justify-center items-start pt-5 pr-4 pb-12 pl-20 rounded-xl bg-[#EEF0E5] leading-[100%] max-w-[1600px] max-md:pl-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d189c49b0cfd405ada8ca2554f739b206121335360c40ff58df334ef15bd21eb?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="self-end aspect-square w-[30px]"
                />
                <div className="self-center mt-2.5 text-2xl font-bold text-black">
                    Tambah Request
                </div>
                <div className="mt-9 ml-4 text-2xl font-semibold text-black max-md:max-w-full">
                    Nama Produk
                </div>
                <div className="mt-3 ml-4 text-base text-neutral-700 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
                </div>
                <input type="text" class="shrink-0 mt-3 w-full h-9 bg-white rounded-md px-4 border border-gray-300" />
                <div className="mt-9 ml-4 text-2xl font-semibold text-black max-md:ml-full">
                    Kategori
                </div>
                <div className="flex gap-2.5 mt-2.5 ml-4 text-base whitespace-nowrap text-neutral-700 max-md:ml-2.5">
                    <div className="justify-center px-2 py-1 rounded-2xl border border-solid border-neutral-700">
                        Organik
                    </div>
                    <div className="justify-center px-2 py-1 rounded-2xl border border-solid border-neutral-700">
                        Anorganik
                    </div>
                </div>
                <div className="mt-6 ml-4 text-2xl font-semibold text-black max-md:max-w-full">
                    Deskripsi Produk
                </div>
                <div className="mt-3 ml-4 text-base text-neutral-700 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
                </div>
                <input type="text" class="mt-3 w-full px-4 py-2 bg-white rounded-md border border-gray-300 h-[120px]" />
                <div className="flex flex-col justify-center items-start p-2.5 mt-6 ml-4 max-md:pr-5 max-md:max-w-full">
                    <div className="text-2xl font-semibold text-black max-md:max-w-full">
                        Kuantitas Limbah
                    </div>
                    <div className="mt-2.5 text-base text-neutral-700 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
                        mi..
                    </div>
                </div>
                <div className="flex gap-2.5 mt-2.5 ml-4 text-xl text-black whitespace-nowrap max-md:ml-2.5">
                    <input type="text" className="mt-3 px-4 py-2 max-w-full h-12 bg-white rounded-xl w-[292px] border border-gray-300" />
                    <div className="flex items-center justify-center mt-3 px-3 py-2 bg-zinc-400 rounded-md h-12">Kg</div>
                </div>
                <div className="justify-center self-end px-6 py-3 mt-6 mr-20 text-base whitespace-nowrap rounded-md bg-[#304D30] text-stone-200 max-md:px-5 max-md:mr-2.5">
                    Tambah
                </div>
            </div>
        </div>
    )
};
