import AuthenticatedBuyer from "@/Layouts/AuthenticatedBuyer";
import { Head, Link } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedBuyer user={auth.user}>
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
                  Rincian Pesanan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-left px-20 py-12 mt-20 w-full bg-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div class="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
            Nama Toko
          </div>
          <div class="mt-3 text-base leading-4 text-black max-md:max-w-full">
            Lokasi Toko
          </div>
          <div class="mt-6 w-full max-w-[1248px] max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div class="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6237545281e5e43bf9384935ffa90c8957ea43757374a7ebc312ebd97b6b5dfe?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 max-w-full aspect-square w-[255px] max-md:mt-6"
                />
              </div>
              <div class="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col leading-[100%] max-md:mt-6 max-md:max-w-full">
                  <div class="text-2xl text-black max-md:max-w-full">
                    Limbah Kayu
                  </div>
                  <div class="mt-3 text-3xl font-semibold text-black max-md:max-w-full">
                    Rp 200.000/10Kg
                  </div>
                  <div class="mt-3 text-sm text-rose-500 max-md:max-w-full">
                    Minimal pembelian 10 Kg
                  </div>
                  <div class="flex gap-3 mt-3 whitespace-nowrap max-md:flex-wrap">
                    <div class="flex gap-5 px-6 py-3 text-base rounded-md border border-solid border-neutral-700 text-neutral-700 max-md:px-5">
                      <div class="flex-1 text-center">-</div>
                      <div>10</div>
                      <div>+</div>
                    </div>
                    <div class="my-auto text-2xl text-black max-md:max-w-full">
                      Kg
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center px-20 py-12 mt-6 w-full leading-[100%] max-md:px-5 max-md:max-w-full">
          <div class="text-2xl font-semibold text-black max-md:max-w-full">
            Lokasi Pengiriman
          </div>
          <div class="flex flex-col justify-center mt-6 w-full rounded-md bg-neutral-700 max-w-[1248px] max-md:max-w-full">
            <div class="flex overflow-hidden relative flex-col p-5 w-full min-h-[597px] max-md:max-w-full">
              <img
                loading="lazy"
                srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2aed1dd490f5c3b3a795f7f031330c2aeea5d6bd557892978665d62a7535d78?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="object-cover absolute inset-0 size-full"
              />
              <div class="flex relative gap-5 text-base text-neutral-700 max-md:flex-wrap max-md:max-w-full">
                <div class="flex flex-col flex-1 px-6 py-3 rounded-md bg-[#B6C4B6] max-md:px-5 max-md:max-w-full">
                  <div>Alamat Saya</div>
                  <div class="justify-center items-start px-6 py-3 mt-3 font-semibold rounded-md bg-[#EEF0E5] max-md:px-5">
                    Jl. Prof M. Yamin, No 30
                  </div>
                  <div class="shrink-0 mt-3 h-0.5 bg-zinc-300"></div>
                  <div class="mt-3">Catatan</div>
                  <div class="mt-3 font-semibold text-[#304D30]">
                    Samping SPBU Kota Baru
                  </div>
                  <div class="shrink-0 mt-3 h-0.5 bg-zinc-300"></div>
                  <div class="mt-3">Informasi Penerima</div>
                  <div class="flex flex-col items-start px-6 py-3 mt-3 rounded-md bg-[#EEF0E5] max-md:px-5">
                    <div class="font-semibold">Rini Dwinova</div>
                    <div class="mt-2.5">08123456789102</div>
                  </div>
                  <div class="justify-center self-start px-6 py-3 mt-3 font-semibold rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                    Edit Penerima
                  </div>
                </div>
                <div class="flex flex-col flex-1 self-start px-6 py-3 rounded-md bg-[#B6C4B6] max-md:px-5 max-md:max-w-full">
                  <div>Alamat Toko</div>
                  <div class="flex flex-col items-start px-6 py-3 mt-3 rounded-md bg-[#EEF0E5] max-md:px-5">
                    <div class="font-semibold">PT Wongso Furniture</div>
                    <div class="mt-2.5">Jl. Kota Baru No 666</div>
                  </div>
                </div>
              </div>
              <div class="flex relative gap-5 justify-between self-start py-3 mt-40 rounded-md max-md:mt-10">
                <div class="justify-center px-6 py-3 text-base font-semibold rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                  Lihat Peta
                </div>
                <div class="text-4xl font-bold text-rose-500">7 km</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center px-20 py-12 mt-6 w-full max-md:px-5 max-md:max-w-full">
          <div class="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
            Rincian Biaya
          </div>
          <div class="flex flex-col justify-center p-6 mt-6 w-full rounded-md bg-zinc-300 max-w-[1248px] max-md:px-5 max-md:max-w-full">
            <div class="max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow justify-center text-base leading-4 text-neutral-700 max-md:mt-6 max-md:max-w-full">
                    <div class="max-md:max-w-full">Total Harga 100 Kg</div>
                    <div class="mt-6 max-md:max-w-full">Biaya Layanan</div>
                    <div class="mt-6 max-md:max-w-full">Biaya Aplikasi</div>
                    <div class="mt-6 max-md:max-w-full">
                      Biaya Penjemputan (7 km)
                    </div>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow justify-center text-base font-semibold leading-4 text-neutral-700 max-md:mt-6 max-md:max-w-full">
                    <div class="max-md:max-w-full">Rp 70.000</div>
                    <div class="mt-6 max-md:max-w-full">Rp 1.000</div>
                    <div class="mt-6 max-md:max-w-full">Rp 6.000</div>
                    <div class="mt-6 max-md:max-w-full">- Rp 7.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="shrink-0 mt-6 h-0.5 bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)] max-md:max-w-full"></div>
            <div class="flex gap-5 justify-between mt-6 text-base leading-4 text-neutral-700 max-md:flex-wrap max-md:max-w-full">
              <div>Total Transaksi</div>
              <div class="font-semibold max-md:max-w-full">Rp 70.000</div>
            </div>
          </div>
          <div class="flex flex-col items-left px-20 py-12 mt-6 w-full text-base leading-4 text-black max-md:px-5 max-md:max-w-full">
            <div class="flex flex-col items-left px-20 py-12 mt-6 w-full text-base leading-4 text-black max-md:px-5 max-md:max-w-full">
              <div class="text-2xl font-semibold max-md:max-w-full">
                Metode Pembayaran
              </div>
              <div class="mt-3 max-md:max-w-full">
                Pilih metode pembayaran yang sesuai untuk dapat melanjutkan
                proses pemesanan
              </div>
              <div class="flex gap-5 justify-start self-start px-6 py-3 mt-6 rounded-md bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:ml-2.5">
                <div class="my-auto">Pilih Metode Pembayaran</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ff5bb5d07918552e4221da4d9e97b5b2254e74016862295ef9d404538c63ace?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="shrink-0 w-3 aspect-[0.6] fill-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#304D30)]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-end my-auto text-base whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
              <div className="justify-between px-6 py-3 rounded-md border-2 border-solid border-neutral-700 text-white max-md:px-1 bg-[#304D30]">
                Pesan
              </div>
            </div>
          </div>
        </div>
        <div class="self-stretch bg-zinc-300 min-h-[2px]"></div>
        <div class="flex gap-5 items-start px-20 py-12 mt-6 text-base leading-4 bg-[#bg-[#EEF0E5]] text-neutral-600 max-md:flex-wrap max-md:px-5">
          <div class="flex flex-col flex-1 self-stretch">
            <div class="font-semibold text-neutral-800">Kategori</div>
            <div class="mt-3">Limbah Kulit Buah</div>
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
            <div class="font-semibold text-neutral-800">Tentang</div>
            <div class="mt-3">Cerita Kami</div>
            <div class="mt-3">Pers & Berita</div>
            <div class="mt-3">Mitra</div>
            <div class="mt-3">Kebijakan Privasi</div>
            <div class="mt-3">Relasi Investor</div>
          </div>
          <div class="flex flex-col flex-1">
            <div class="font-semibold text-neutral-800">Dukungan</div>
            <div class="mt-3">Bantuan & Dukungan</div>
            <div class="mt-3">Kepercayaan & Keamanan</div>
            <div class="mt-3">Menjual di EcoSwap</div>
            <div class="mt-3">Pembelian di EcoSwap</div>
          </div>
          <div class="flex flex-col flex-1 self-stretch">
            <div class="font-semibold text-neutral-800">Komunitas</div>
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
            <div class="font-semibold text-neutral-800">
              Lainnya dari EcoSwap
            </div>
            <div class="mt-3">Pendidikan EcoSwap</div>
            <div class="mt-3">Postingan EcoSwap</div>
            <div class="mt-3">Dapatkan Inspirasi</div>
          </div>
        </div>
        <div class="flex justify-center items-center px-16 py-6 mt-6 w-full bg-[#304D30] text-stone-200 max-md:px-5 max-md:max-w-full">
          <div class="flex gap-5 justify-between">
            <div class="flex gap-3 text-2xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67f5f14295ce14481d2d3d3d15dbae5dea15ff72a36206af8158aa4e8b9a898c?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                class="shrink-0 aspect-[0.71] w-[34px]"
              />
              <div class="my-auto">
                <span class="font-bold">Eco</span>
                Swap
              </div>
            </div>
            <div class="my-auto text-base">EcoSwap Copyright 2024</div>
          </div>
        </div>
      </div>
    </AuthenticatedBuyer>
  );
}
