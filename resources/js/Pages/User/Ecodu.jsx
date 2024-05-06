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
        <div className="flex flex-col self-stretch px-20 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mx-4 text-2xl font-semibold leading-6 text-black max-md:mr-2.5 max-md:max-w-full">
            Video
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60acbfaf3173449fb5cfae35b0e296873cef5facdf36d6ac7b64bdb93553ae07?apiKey=81aa3398288b425cae501e07d8c56af5&"
          className="self-stretch mt-6 w-full aspect-[4.55] max-md:max-w-full"
        />
        <div className="flex flex-col self-stretch px-20 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mx-4 text-2xl font-semibold leading-6 text-black max-md:mr-2.5 max-md:max-w-full">
            Edukasi Produk Daur Ulang
          </div>
        </div>
        <div className="flex flex-col self-stretch px-20 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mx-4 text-2xl font-semibold leading-6 text-black max-md:mr-2.5 max-md:max-w-full">
            Tahukah Kamu?
          </div>
        </div>
        <div className="justify-center mt-6 w-full max-w-[1248px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-3 max-md:mt-6">
                <div className="flex flex-col justify-center bg-white rounded-xl">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d91768ee3c6ed0d075d27e7b65a11d35c76da3af63b649ef275596f21780743?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="w-full aspect-[1.45]"
                  />
                </div>
                <div className="mt-9 text-2xl font-semibold leading-6 text-black">
                  Kemurnian Bahan Baku
                </div>
                <div className="mt-12 text-base leading-4 text-black max-md:mt-10">
                  Tempurung kelapa, kulit telur, dan batang kayu adalah contoh
                  limbah organik keras yang sering diabaikan dalam pengelolaan
                  sampah
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-3 max-md:mt-6">
                <div className="flex flex-col justify-center bg-white rounded-xl">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c92491ea95776df793ce4930ae16e0feadf9b0a73018569a77997d8b29c787b?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="w-full aspect-[1.45]"
                  />
                </div>
                <div className="mt-9 text-2xl font-semibold leading-6 text-black">
                  Limbah Organik Keras
                </div>
                <div className="mt-12 text-base leading-4 text-black max-md:mt-10">
                  Tempurung kelapa, kulit telur, dan batang kayu adalah contoh
                  limbah organik keras yang sering diabaikan dalam pengelolaan
                  sampah
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-3 max-md:mt-6">
                <div className="flex flex-col justify-center bg-white rounded-xl">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/116b05815ea75954d14cfab2bde944b7dc537d040bdb498ef2b8b0549a788067?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="w-full aspect-[1.45]"
                  />
                </div>
                <div className="mt-9 text-2xl font-semibold leading-6 text-black">
                  Kontribusi Limbah Kertas
                </div>
                <div className="mt-12 text-base leading-4 text-black max-md:mt-10">
                  Limbah kertas menyumbang sekitar 26% dari total sampah di tempat
                  pembuangan sampah, menyebabkan penggundulan hutan, dan
                  menghabiskan banyak energi serta air
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-20 py-12 mt-12 w-full bg-[#B6C4B6] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-2xl font-semibold leading-6 text-black max-md:max-w-full">
          Pembakaran Limbah Produksi
        </div>
        <div className="justify-center mt-6 w-full max-w-[1248px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch px-9 rounded-xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32ccb3dc572718dc9b718654efddee734bc6447239d306a9f21006b684d17ee2?apiKey=81aa3398288b425cae501e07d8c56af5&"
                  className="w-full aspect-[0.97] max-md:mr-1 max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch py-6 text-zinc-400 max-md:mt-6 max-md:max-w-full">
                <div className="flex flex-col p-6 rounded-xl bg-neutral-700 max-md:px-5 max-md:max-w-full">
                  <div className="text-xl font-semibold leading-5 max-md:max-w-full">
                    Dampak Lingkungan
                  </div>
                  <div className="mt-3 text-base leading-4 max-md:max-w-full">
                    Pembakaran limbah industri dapat menghasilkan asap yang
                    mengandung bahan kimia beracun dan berbahaya, menyebabkan
                    pencemaran udara dan kerusakan lingkungan.
                  </div>
                </div>
                <div className="flex flex-col p-6 mt-12 rounded-xl bg-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold leading-5 max-md:max-w-full">
                    Dampak Lingkungan
                  </div>
                  <div className="mt-3 text-base leading-4 max-md:max-w-full">
                    Pembakaran limbah industri dapat menghasilkan asap yang
                    mengandung bahan kimia beracun dan berbahaya, menyebabkan
                    pencemaran udara dan kerusakan lingkungan.
                  </div>
                </div>
                <div className="flex flex-col p-6 mt-12 rounded-xl bg-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold leading-5 max-md:max-w-full">
                    Risiko Kesehatan
                  </div>
                  <div className="mt-3 text-base leading-4 max-md:max-w-full">
                    <span className="text-zinc-400">
                      Asap dari pembakaran limbah industri mengandung zat-zat
                      berbahaya yang dapat terakumulasi dalam lemak hewan dan
                      berpotensi membahayakan kesehatan manusia. [
                    </span>
                    <span className="text-zinc-400">1</span>
                    <span className="text-zinc-400">]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      <header className="flex gap-3 py-6 mx-4 leading-[100%] text-neutral-800 max-md:flex-wrap max-md:mr-2.5 bg-[#EEF0E5]">
        <h2 className="text-2xl font-extrabold">Rekomendasi Blog </h2>
      </header>
      <div className="flex overflow-x-auto gap-5 justify-end items-start mx-4 max-w-full text-xl text-black w-[1728px] max-md:flex-wrap max-md:mr-2.5">
        <article className="flex flex-col self-stretch pb-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a94d1f9dfae3abedf13d9ee93425692d7af4c6090a97cb5c161ac109dcaacb?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            alt="Utilization of Organic Waste from Household Garbage"
            className="w-full aspect-[1.96] max-md:max-w-full"
          />
          <h3 className="mt-6 mr-8 max-md:mr-2.5 font-bold">
            Pemanfaatan Sampah Organik dari Sampah Rumah Tangga
          </h3>
          <div className="mt-2 text-base max-md:max-w-full">
            Strategi untuk memanfaatkan sampah organik dari sampah...{" "}
          </div>
        </article>
        <article className="flex flex-col self-stretch pb-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/478c451b7e3a979fe21759b0863793220c0661fb0be4d18856ed72fa4dcb5f27?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            alt="Turning Waste and Used Cooking Oil into Economically Valuable Goods"
            className="w-full aspect-[1.96] max-md:max-w-full"
          />
          <h3 className="mt-6 max-md:mr-2.5 max-md:max-w-full font-bold">
            Mengubah Sampah dan Minyak Jelantah Menjadi Barang Bernilai Ekonomis
          </h3>
          <div className="mt-2 text-base max-md:max-w-full">
            Strategi untuk memanfaatkan sampah organik dari sampah...
          </div>
        </article>
        <article className="flex flex-col pb-4 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f889eac93ae53373d5b92c86f60ec75a42fe9c61052bb3d476b7a457b8a0b981?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            alt="Innovation in Hazardous Waste Management for a Cleaner Environment"
            className="w-full aspect-[1.96] max-md:max-w-full"
          />
          <h3 className="mt-6 max-md:max-w-full font-bold">
            Pengelolaan Limbah B3 untuk Lingkungan yang Lebih Bersih
          </h3>
          <div className="mt-2 text-base max-md:max-w-full">
            Strategi untuk memanfaatkan sampah organik dari sampah...{" "}
          </div>
        </article>
        <article className="flex flex-col pb-4 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f889eac93ae53373d5b92c86f60ec75a42fe9c61052bb3d476b7a457b8a0b981?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            alt="Environmental Awareness Through Eco-School Program"
            className="w-full aspect-[1.96] max-md:max-w-full"
          />
          <h3 className="mt-6 max-md:max-w-full font-bold">
            Kesadaran Lingkungan Melalui Program Sekolah Ramah Lingkungan
          </h3>
          <div className="mt-2 text-base max-md:max-w-full">
            Strategi untuk memanfaatkan sampah organik dari sampah...{" "}
          </div>
        </article>
        <article className="flex z-10 flex-col pb-4 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f889eac93ae53373d5b92c86f60ec75a42fe9c61052bb3d476b7a457b8a0b981?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            alt="Government Cooperation with Elementary Schools in Building an Eco-Friendly Program"
            className="w-full aspect-[1.96] max-md:mr-2.5 max-md:max-w-full"
          />
          <h3 className="mt-6 max-md:max-w-full font-bold">
            Pemerintah dengan Sekolah Dasar dalam Membangun Program Ramah Lingkungan
          </h3>
          <div className="mt-2 text-base max-md:max-w-full">
            Strategi untuk memanfaatkan sampah organik dari sampah...{" "}
          </div>
        </article>
      </div>


      <footer className="flex gap-0 justify-between items-start self-stretch px-20 py-12 text-base leading-4 bg-[#EEF0E5] text-neutral-600 max-md:flex-wrap max-md:px-5">
        <section className="flex flex-col flex-1 self-stretch">
          <h2 className="text-2xl font-semibold text-neutral-800">
            Kategori
          </h2>
          <p className="mt-3">Limbah Kulit Buah</p>
          <p className="mt-3">Limbah Elektronik</p>
          <p className="mt-3">Limbah Plastik</p>
          <p className="mt-3">Limbah Kain</p>
          <p className="mt-3">Limbah Kaca</p>
          <p className="mt-3">ULimbah Minyak Jelatah</p>
          <p className="mt-3">Limbah Kayu</p>
          <p className="mt-3">Limbah Styrofoam</p>
          <p className="mt-3">Limbah Besi</p>
          <p className="mt-3">Kompos</p>
        </section>
        <section className="flex flex-col flex-1">
          <h2 className="text-2xl font-semibold text-neutral-800">Tentang</h2>
          <p className="mt-3">Cerita Kami</p>
          <p className="mt-3">Pers & Berita</p>
          <p className="mt-3">Mitra</p>
          <p className="mt-3">Kebijakan Privasi</p>
          <p className="mt-3">Relasi Investor</p>
        </section>
        <section className="flex flex-col flex-1">
          <h2 className="text-2xl font-semibold text-neutral-800">Dukungan</h2>
          <p className="mt-3">Bantuan & Dukungan</p>
          <p className="mt-3">Kepercayaan & Keamanan</p>
          <p className="mt-3">Menjual di EcoSwap</p>
          <p className="mt-3">Pembelian di EcoSwap</p>
        </section>
        <section className="flex flex-col flex-1 self-stretch">
          <h2 className="text-2xl font-semibold text-neutral-800">
            Komunitas
          </h2>
          <p className="mt-3">Kisah Sukses Pelanggan</p>
          <p className="mt-3">Pusat Komunitas</p>
          <p className="mt-3">Forum</p>
          <p className="mt-3">Acara</p>
          <p className="mt-3">Blog</p>
          <p className="mt-3">Pemberi pengaruh</p>
          <p className="mt-3">Afiliasi</p>
          <p className="mt-3">Podcast</p>
          <p className="mt-3">Menjadi Penjual</p>
          <p className="mt-3">Menjadi Penjual</p>
        </section>
        <section className="flex flex-col flex-1">
          <h2 className="text-2xl font-semibold text-neutral-800">
            Lainnya dari EcoSwap
          </h2>
          <p className="mt-3">Pendidikan EcoSwap</p>
          <p className="mt-3">Postingan EcoSwap</p>
          <p className="mt-3">Dapatkan Inspirasi</p>
        </section>
      </footer>

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
