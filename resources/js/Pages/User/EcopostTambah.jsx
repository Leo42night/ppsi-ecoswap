import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Seller/Ecopost/TambahProduk
        </h2>
      }
    >
      <Head title="Ecopost" />
      <div className="max-w-7xl mx-auto sm:p-6 lg:p-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg p-10 flex flex-col gap-5">
          <h2 className="text-5xl text-center font-bold leading-[49px] text-neutral-700 max-max-w-full max-md:text-4xl">
            Tambah Produk
          </h2>
          <hr className="w-full border-solid border-[3px] border-neutral-200 stroke-neutral-200 mr-2.5 max-w-full" />
          <h3 className="text-3xl font-bold text-neutral-700 max-md:max-w-full">
            Informasi Produk
          </h3>
          <div className="flex flex-col gap-5 max-md:mt-10 max-md:max-w-full">
            <label for="dropzone-file" className="text-4xl max-md:max-w-full">
              Foto Limbah
            </label>
            <div className="flex items-center justify-center w-full relative">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              />
              <div className="absolute flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </div>
            <label for="nama-limbah" className="text-4xl max-md:max-w-full">
              Nama Limbah
            </label>
            <div className="text-base max-w-full">
              <div className="flex items-center border-b py-2  focus:outline-0">
                <input
                  id="nama-limbah"
                  className=" border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                  type="text"
                  placeholder="cth: Kantong Plastik Bekas"
                  aria-label="Full name"
                />
              </div>
            </div>
            <div className="text-4xl max-md:max-w-full">Kategori Limbah</div>
            <div className="flex">
              <div className="flex items-center me-4">
                <input
                  checked
                  id="kategori-limbah-1"
                  type="radio"
                  value=""
                  name="kategori-limbah-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  for="kategori-limbah-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Organik
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="kategori-limbah-2"
                  type="radio"
                  value=""
                  name="kategori-limbah-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  for="kategori-limbah-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Anorganik
                </label>
              </div>
            </div>
            <label
              for="message"
              className="text-4xl block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Deskripsi Limbah
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="cth: Tumpukan kantong plastik bekas dari berbagai belanjaan. Beberapa kantong mungkin robek atau kotor."
            ></textarea>
          </div>
          <hr className="w-full border-solid border-[3px] border-neutral-200 stroke-neutral-200 mr-2.5 max-w-full" />
          <h3 className="self-stretch text-4xl font-bold leading-10 text-neutral-700 max-md:max-w-full">
            Harga Produk
          </h3>
          <div className="flex flex-col gap-5 max-md:mt-10 max-md:max-w-full">
            <label
              for="minimum-pemesanan"
              className="text-4xl max-md:max-w-full"
            >
              Minimum Pemesanan
            </label>
            <div className="relative">
              <input
                type="number"
                id="minimum-pemesanan"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-e-2 border-gray-300 focus:ring-blue-500"
                placeholder="Masukkan Minimum Pemesanan"
                required
              />
              <div className="absolute inset-y-0 end-0 top-0 flex items-center ps-3.5 pointer-events-none py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200">
                Kg
              </div>
            </div>
            <label for="harga-satuan" className="text-4xl max-md:max-w-full">
              Harga Satuan
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200">
                Rp.
              </div>
              <input
                type="number"
                id="harga-satuan"
                className="block pl-20 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-e-2 border-gray-300 focus:ring-blue-500"
                placeholder="Masukkan Harga Satuan"
                required
              />
            </div>
          </div>

          <hr className="w-full border-solid border-[3px] border-neutral-200 stroke-neutral-200 mr-2.5 max-w-full" />
          <h3 className="self-stretch text-4xl font-bold leading-10 text-neutral-700 max-md:max-w-full">
            Stok Produk
          </h3>
          <div className="flex flex-col gap-5 max-md:mt-10 max-md:max-w-full">
            <label
              for="total-produk-yang-dijual"
              className="text-4xl max-md:max-w-full"
            >
              Total Produk yang Dijual
            </label>
            <div className="relative">
              <input
                type="number"
                id="total-produk-yang-dijual"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-e-2 border-gray-300 focus:ring-blue-500"
                placeholder="cth: 2"
                required
              />
              <div className="absolute inset-y-0 end-0 top-0 flex items-center ps-3.5 pointer-events-none py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200">
                Kg
              </div>
            </div>
          </div>

          <hr className="w-full border-solid border-[3px] border-neutral-200 stroke-neutral-200 mr-2.5 max-w-full" />
          <h3 className="self-stretch text-4xl font-bold leading-10 text-neutral-700 max-md:max-w-full">
            Pengiriman
          </h3>
          <div className="text-4xl max-md:max-w-full">
            Apakah Anda Melayani Pengiriman Limbah?
          </div>
          <div className="flex">
            <div className="flex items-center me-4">
              <input
                id="pengiriman-ya"
                type="radio"
                value=""
                name="pengiriman-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                for="pengiriman-ya"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ya
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="pengiriman-no"
                type="radio"
                value=""
                name="pengiriman-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                for="pengiriman-no"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tidak
              </label>
            </div>
          </div>
          <div className="flex justify-end max-w-full">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Batal
            </button>
            
              <button
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Simpann
              </button>
          </div>

          {/* akhir bungkus */}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
