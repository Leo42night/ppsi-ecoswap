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
        </div>
    );
}