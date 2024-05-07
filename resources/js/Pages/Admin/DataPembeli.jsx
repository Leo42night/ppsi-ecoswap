import SideBarAdmin from "@/Components/SideBarAdmin";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, usePage } from "@inertiajs/react";
import { useState, useRef} from "react";
import { initFlowbite } from "flowbite";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { router } from '@inertiajs/react' 

export default function DataPembeli({ auth, users }) {
  console.log(users);

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const namaInputRef = useRef(null);

  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setEmail("");
    setPassword("");
  }

  const saveData = (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {name, email, password};
    try {
      router.post('/admin/data-pembeli', user);
    } catch(e) {
      console.log(e);
    }
    setLoading(false);
    onCloseModal();
  }

  var tableData = users.map(function (user, index) {
    return (
      <tr key={index}>
        <td className="px-4  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
          <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
            <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                className="z-10 -mt-2 w-full aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
              <div className="font-normal">{user.name}</div>
              <div>{user.email}</div>
            </div>
          </div>
        </td>
        <td className="px-4 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
          {user.telp}
        </td>

        <td className="px-4 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
          {user.follow}
        </td>
        <td className="text-xs p-5">
          <div className="flex justify-center py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] bg-green-900 text-white">
            Sedang Aktif
          </div>
        </td>
        <td className="text-xs p-5">
          <div className="flex justify-center px-4 py-2 border-2 border-solid border-neutral-800 rounded-[42px] bg-green-900 text-white">
            Penjual
          </div>
        </td>
        <td className="px-4  align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
          {user.alamat}
        </td>
        <td className="flex justify-center gap-2 px-4 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
          <button className="flex justify-center items-center p-2 whitespace-nowrap rounded-md bg-[#B6C4B6]">
            Edit
          </button>
          {/* <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            edit
          </button> */}
          <button className="justify-center p-2 whitespace-nowrap rounded-md bg-[#B6C4B6] max-md:px-5">
            Hapus
          </button>
        </td>
      </tr>
    );
  });
  return (
    <AdminLayout user={auth.user}>
<<<<<<< Updated upstream
      <div class="flex flex-col justify-center bg-[#EEF0E5]">
        <div class="w-full max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarAdmin user={auth.user}/>
=======
      <Head title="Data Pembeli" />
      <div className="flex flex-col justify-center bg-[#EEF0E5]">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarAdmin user={auth.user} />
>>>>>>> Stashed changes

            <div className="flex flex-col grow px-12 pt-12 w-full bg-[#EEF0E5] max-md:px-5 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
                Data Pembeli
              </div>
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center py-6 w-full text-center rounded-xl bg-[#B6C4B6] leading-[100%] text-neutral-700 max-md:mt-3 max-md:max-w-full">
                      <div className="text-base max-md:max-w-full">Pembeli</div>
                      <div className="mt-3 text-2xl font-semibold max-md:max-w-full">
                        207 Akun
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow justify-center items-center self-stretch p-6 w-full text-center rounded-xl bg-[#B6C4B6] leading-[100%] max-md:px-5 max-md:mt-3 max-md:max-w-full">
                      <div className="flex gap-3">
                        <div className="text-2xl font-semibold text-neutral-700">
                          50
                        </div>
                        <div className="my-auto text-base text-neutral-700">
                          Pengguna Sedang
                          <span className="font-bold text-neutral-700">
                            {" "}
                            Aktif
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-center py-6 mt-6 text-base leading-4 text-black max-md:flex-wrap">
                <div className="flex-1 my-auto text-2xl font-semibold">
                  Semua Pembeli
                </div>

                <form className="flex-1 my-auto max-w-md mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Cari Pembeli..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>

                <Button
                  className="flex items-center"
                  onClick={() => setOpenModal(true)}
                >
                  tambahkan Pembeli
                </Button>

                <Modal
                  show={openModal}
                  size="md"
                  onClose={onCloseModal}
                  initialFocus={namaInputRef}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="space-y-6">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Tambahkan Data Pembeli
                      </h3>
                      <form onSubmit={saveData}>
                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="name" value="nama" />
                          </div>
                          <TextInput
                            id="name"
                            name='name'
                            placeholder="masukkan nama ..."
                            onChange={(event) => setName(event.target.value)}
                            required
                            defaultValue={name}
                            ref={namaInputRef}
                          />
                        </div>
                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="email" value="Masukkan email" />
                          </div>
                          <TextInput
                            id="email"
                            name='email'
                            placeholder="name@company.com"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            defaultValue={email}
                          />
                        </div>
                        <div>
                          <div className="mb-2 block">
                            <Label
                              htmlFor="password"
                              value="Masukkan Password"
                            />
                          </div>
                          <TextInput
                            id="password"
                            name='password'
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            defaultValue={password}
                          />
                        </div>
                        <div className="w-full flex gap-5">
                          <Button type="submit" disabled={loading}>
                            
                            {loading ? "Menambahkan Data" : (<><svg
                              className="me-1 -ms-1 w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg> Tambahkan</>)}
                          </Button>
                          <Button
                            aria-label="Close"
                            className="text-black bg-white border-slate-600"
                            onClick={() => setOpenModal(false)}
                          >
                            Batalkan
                          </Button>
                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Nama
                      </th>
                      <th className="px-8 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Telepon
                      </th>
                      <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Followers
                      </th>
                      <th className="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Status
                      </th>
                      <th className="px-8 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Terdaftar
                      </th>
                      <th className="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Alamat
                      </th>
                      <th className="px-16 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-[#B6C4B6] py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Aksi
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {tableData}

                    {/* <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              className="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </td >
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md text-black text-center">
                          Offline
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Penjual
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              className="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Sedang Aktif
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Penjual
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              className="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Sedang Aktif
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr> */}

                    {/* <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              className="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md text-black text-center">
                          Offline
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                      <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ccfcb3744ea3e66ff724390096cc500bc30420bf80b6b0765edd36321b82343b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            className="object-cover absolute inset-0 size-full"
                          />
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                            className="z-10 -mt-2 w-full aspect-square"
                          />
                        </div>
                        <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                          <div className="font-normal">Teresia Amelia</div>
                          <div>teresia.amelia@gmail.com</div>
                        </div>
                      </div>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                      0812345678910
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                      2003
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md text-black text-center">
                        Offline
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                        Penjual
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                      Jl. Prof. M. Yamin No. 30K
                    </td>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 pl-1">
                        <div className="flex flex-auto justify-between items-center px-5 max-md:flex-wrap">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch w-12 aspect-square rounded-[64px]">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9de3665bc81522557f36fda890d2a9a1654a1b92d0b6ab4c111ddca863214846?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                              className="z-10 -mt-2 w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col justify-center self-stretch my-auto text-base leading-4 text-black">
                            <div className="font-normal">Teresia Amelia</div>
                            <div>teresia.amelia@gmail.com</div>
                          </div>
                        </div>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        0812345678910
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        2003
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="justify-center px-6 py-2 my-auto border-2 border-solid border-neutral-800 rounded-[42px] max-md bg-green-900 text-white">
                          Sedang Aktif
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4"></td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-[14px] whitespace-nowrap p-4">
                        Jl. Prof. M. Yamin No. 30K
                      </td>
                    </tr> */}
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
