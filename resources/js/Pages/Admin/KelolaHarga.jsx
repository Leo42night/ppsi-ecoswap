import SideBarAdmin from "@/Components/SideBarAdmin";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function KelolaHarga({ auth }) {
  return (
    <AdminLayout
      user={auth.user}
    >
      <div className="flex flex-col justify-center bg-[#EEF0E5]">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarAdmin user={auth.user}/>

            <div className="flex flex-col grow px-12 pt-12 w-full bg-[#EEF0E5] max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
                Kelola Harga
              </div>
              <div className="flex gap-5 justify-center py-6 mt-6 text-base leading-4 text-black max-md:flex-wrap">
                <div className="flex-1 my-auto text-2xl font-semibold"></div>
                <div className="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-4">
                  Tambah
                </div>
                <div className="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-4">
                  Edit
                </div>
                <div className="justify-center px-6 py-4 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-5">
                  Hapus
                </div>
              </div>
              <div className="mt-6 max-md:max-w-full"></div>
              <div className="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
                List Limbah
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Nama
                      </th>
                      <th className="px-8 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Jenis
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Harga
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Kardus Bekas</div>
                          </div>
                        </div>
                      </th>
                      <td className="border-t-0 align-middle border-l-0 border-r-0 text-[14px]">
                        <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="justify-center px-3 py-2 my-auto border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                            Organik
                          </div>
                        </div>
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Rp 2.500,-
                      </td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Serbuk Besi</div>
                          </div>
                        </div>
                      </th>
                      <td className="border-t-0 align-middle border-l-0 border-r-0 text-[14px]">
                        <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="justify-center px-3 py-2 my-auto border-solid border-neutral-800 rounded-[42px] max-md bg-gray-500 text-white">
                            Anorganik
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Rp 2.500,-
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Kardus Bekas</div>
                          </div>
                        </div>
                      </th>
                      <td className="border-t-0 align-middle border-l-0 border-r-0 text-[14px]">
                        <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="justify-center px-3 py-2 my-auto border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                            Organik
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Rp 2.500,-
                      </td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Serbuk Besi</div>
                          </div>
                        </div>
                      </th>
                      <td className="border-t-0 align-middle border-l-0 border-r-0 text-[14px]">
                        <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="justify-center px-3 py-2 my-auto border-solid border-neutral-800 rounded-[42px] max-md bg-gray-500 text-white">
                            Anorganik
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Rp 2.500,-
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                    </tr>

                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Serbuk Besi</div>
                          </div>
                        </div>
                      </th>
                      <td className="border-t-0 align-middle border-l-0 border-r-0 text-[14px]">
                        <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="justify-center px-3 py-2 my-auto border-solid border-neutral-800 rounded-[42px] max-md bg-gray-500 text-white">
                            Anorganik
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Rp 2.500,-
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
