import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
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
              placeholder="Mencoba mencari sesuatu?"
              class="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
            />
          </div>
        </div>

        <div class="flex flex-col justify-center items-center px-0 py-3 w-16 h-16 rounded-md bg-[#DFE4DF] max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1326360a1da280407f596a5d5c647c2057f9f1408186eea43b511ff3e2c34ecc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="w-6 aspect-square"
          />
        </div>
        <div class="flex flex-col justify-center items-center px-0 py-3 w-16 h-16 rounded-md bg-[#DFE4DF] max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2586b30d181d792f4d3b197ea90f6b6e9e0719ebe3ef42f286bc9ec062a5eb2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="w-5 aspect-square"
          />
        </div>
      </div>
      <div class="self-stretch bg-neutral-200 min-h-[12px]"></div>
      <div className="flex flex-col justify-center bg-white leading-[100%]">
        <div className="flex overflow-hidden relative flex-col items-end p-20 w-full min-h-[320px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mt-9 text-2xl font-semibold text-right text-stone-200 max-md:mr-2.5">
            This is the Headline
          </div>
          <div className="relative justify-center px-6 py-3 mt-6 mb-3 text-base rounded-md bg-stone-200 text-neutral-800 max-md:px-5 max-md:mr-2.5">
            Lebih lanjut...
          </div>
        </div>
      </div>
      <div class="self-stretch bg-neutral-200 min-h-[12px]"></div>

      <div class="self-stretch px-20 py-12 text-4xl font-semibold leading-10 text-[#163020] bg-[#EEF0E5] max-md:pr-8 max-md:pl-5 max-md:max-w-full">
        Limbah Organik
        <div className="mt-3 w-full max-w-[1248px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-md min-h-[233px] text-stone-200 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                    PT Agantaratel
                  </div>
                  <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                    Rp 10.000/10 Kg
                  </div>
                  <div className="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:flex-wrap max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 w-4 aspect-square"
                    />
                    <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                  </div>
                </div>
                <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                  Kulit Telur
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-md min-h-[233px] text-stone-200 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                    Sawit Maju Jaya
                  </div>
                  <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                    Rp 1.000.000/15 Kg
                  </div>
                  <div className="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:flex-wrap max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 w-4 aspect-square"
                    />
                    <div>Jl Tanjung Raya 2, No.9</div>
                  </div>
                </div>
                <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                  Limbah Sawit
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full max-w-[1248px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-md min-h-[233px] text-stone-200 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                      PT Agantaratel
                    </div>
                    <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                      Rp 10.000/10 Kg
                    </div>
                    <div className="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:flex-wrap max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                    </div>
                  </div>
                  <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                    Kulit Telur
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-md min-h-[233px] text-stone-200 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                      Sawit Maju Jaya
                    </div>
                    <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                      Rp 1.000.000/15 Kg
                    </div>
                    <div className="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:flex-wrap max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div>Jl Tanjung Raya 2, No.9</div>
                    </div>
                  </div>
                  <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                    Limbah Sawit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full max-w-[1248px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-md min-h-[233px] text-stone-200 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94811cc6acaa4d668470c3140f3056a32d2042de55187b227c9ffa392e0266df?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                      PT Agantaratel
                    </div>
                    <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                      Rp 10.000/10 Kg
                    </div>
                    <div className="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:flex-wrap max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                    </div>
                  </div>
                  <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                    Kulit Telur
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-md min-h-[233px] text-stone-200 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                      Sawit Maju Jaya
                    </div>
                    <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                      Rp 1.000.000/15 Kg
                    </div>
                    <div className="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:flex-wrap max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div>Jl Tanjung Raya 2, No.9</div>
                    </div>
                  </div>
                  <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                    Limbah Sawit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="self-stretch bg-neutral-200 min-h-[12px]"></div>

      <div class="flex flex-col items-left px-20 py-11 max-md:px-5 bg-[#EEF0E5]">
        <div class="text-4xl font-semibold leading-10 text-[#304D30] max-md:max-w-full">
          Limbah Anorganik
        </div>
        <div class="mt-6 w-full max-w-[1248px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
          </div>
        </div>
        <div class="mt-6 w-full max-w-[1248px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
          </div>
        </div>

        <div class="self-stretch">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37dc87f6fda34d991c03fb9a0676f06012d58b07960cdde8a9fdbf0a1d0b6b9b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">PT Sintaralewi</div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 200.000/40 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Ketapang, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-[#304D30]">
                  Kemasan Sterofoam
                </div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0138fae51b2e1fb6ec947dcf92328ccb1e6ef539594d9e1d77820d6138b5ab51?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">
                    Glass Corporate Company
                  </div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 100.000/10 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Pontianak, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-[#304D30]">Botol Kaca</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32db53fb6e523631dfff0197a2c9198bb69719c04b9678165010d9b506b518ea?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">PT Cermin Raya</div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 1.000.000/15 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Pontianak, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-[#304D30]">Cermin rusak</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c90f646df04920be203f9e6b6083429f6a8ed5ce96ce492dec0511c218a8c02?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">Rinata Swinary</div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 5.000/1 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Pontianak, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-[#304D30]">Botol Plastik</div>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <div class="self-stretch">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d99b13914de724a4b2b06e9d602c463c91fc0e2ad28a0a1bd1f7e24d89d9245?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">
                    Steam Steel Company
                  </div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 1.000.000/15 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Landak, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-neutral-700">Scrap Besi</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e17b8db63d2fe06cc018ce576eb854f7539f7622e26295fb9860a74fb63423b1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">
                    PT Produta Jaya
                  </div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 10.000/2 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Ketapang, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-[#304D30]">Potongan Kayu</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/327fe0cdd06f2f9c86a8e2a339c7dc0e86301dbef14267d352f95cd82606151b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">Lalina Kain</div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 50.000/1 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Pontianak, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-[#304D30]">Kain Perca</div>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6">
                <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c644b93bff8c1430fd8672774674799799423851bc728328208f148cc5091ee?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="object-cover absolute inset-0 size-full"
                  />
                  <div class="relative backdrop-blur-[2px]">
                    Harina Rumah Produksi
                  </div>
                  <div class="relative mt-28 text-right max-md:mt-10">
                    Rp 1.000.000/15 Kg
                  </div>
                  <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="shrink-0 w-4 aspect-square"
                    />
                    <div>Landak, Kalimantan Barat</div>
                  </div>
                </div>
                <div class="mt-3 font-bold text-[#304D30]">Kaleng Kemasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="self-stretch bg-neutral-200 min-h-[12px]"></div>

      <div class="flex flex-col self-stretch px-20 pt-12 pb-8 bg-[#163020] leading-[100%] text-stone-200 max-md:px-5">
        <div class="flex gap-3 mx-4 max-md:flex-wrap max-md:mr-2.5">
          <div class="flex-1 my-auto text-2xl font-semibold max-md:max-w-full">
            Seseorang Mencari Limbah
          </div>
          <div class="justify-center px-6 py-3 text-base rounded-xl border-2 border-solid border-neutral-200 max-md:px-5">
            Mari Diskusikan Pencarian
          </div>
        </div>
        <div class="mx-4 mt-3 text-base max-md:mr-2.5 max-md:max-w-full">
          Mari kita lihat apa yang dapat Anda lakukan!
        </div>
        <div class="flex gap-5 justify-between mx-4 mt-6 text-base font-semibold text-neutral-800 max-md:flex-wrap max-md:mr-2.5">
          <div class="flex gap-5 p-6 rounded-xl bg-neutral-200 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-12 aspect-square"
            />
            <div class="flex flex-col flex-1 max-md:max-w-full">
              <div class="max-md:max-w-full">Rina Akrina</div>
              <div class="mt-3 text-2xl max-md:max-w-full">Kardus Bekas</div>
              <div class="mt-3 max-md:max-w-full">
                Dicari kardus bekas dari industry rumahan atau pabrik...
              </div>
            </div>
          </div>
          <div class="flex gap-5 p-6 rounded-xl bg-neutral-200 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-12 aspect-square"
            />
            <div class="flex flex-col flex-1 max-md:max-w-full">
              <div class="max-md:max-w-full">Amely11</div>
              <div class="mt-3 text-2xl max-md:max-w-full">Kantong Plastik</div>
              <div class="mt-3 max-md:max-w-full">
                Dibutuhkan kantong plastik kemasan sisa produksi ata...
              </div>
            </div>
          </div>
          <div class="flex gap-5 p-6 rounded-xl bg-neutral-200 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              class="shrink-0 self-start w-12 aspect-square"
            />
            <div class="flex flex-col flex-1 max-md:max-w-full">
              <div class="max-md:max-w-full">Wiry Agustin</div>
              <div class="mt-3 text-2xl max-md:max-w-full">
                Tutup Botol Kaleng
              </div>
              <div class="mt-3 max-md:max-w-full">
                Dibutuhkan tutup botol kaleng bekas sisa pemakaian...
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="self-stretch bg-neutral-200 min-h-[12px]"></div>

      <div class="flex flex-col items-left px-20 py-11 max-md:px-5 bg-[#EEF0E5]">
        <div class="text-4xl font-semibold leading-10 text-[#304D30] max-md:max-w-full">
          Mencari Limbah Lainnya?
        </div>
        <div class="mt-6 w-full max-w-[1248px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
          </div>
        </div>
        <div class="mt-6 w-full max-w-[1248px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col max-md:gap-0">
            <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
            <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6"></div>
            </div>
          </div>
          <div class="mx-4 mt-6 max-md:mr-2.5 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c1094a81ecf0b85075f598c7f68679541d9cef5ff62cd50e399527f9805caac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      Es Jeruk Lala
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 15.000/1 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Ketapang, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Kulit Jeruk</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cf4216a6a6c615dd9f44d1277b896885a5058ed57076c57188ea081f6bbb2c8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      PT Rey Jaganda
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 200.000/40 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Sanggau, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">
                    Kemasan Produksi
                  </div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e578a0d6192b22cdbc37c759746d896aa5102b4033f5d3d937ad498c2896eeb8?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      Rumah Makan Hi Geprek
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 200.000/40 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Landak, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">
                    Kemasan Sterofoam
                  </div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b9e200b6782a947b8ab5476c92c76ac0b0e15a72d2dbaee79527374f3150d45?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      Ptk Mineral Water Company
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 100.000/10 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Pontianak, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Botol Plastik</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-4 mt-6 max-md:mr-2.5 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/faaf96498eef41d3bf0f9e4303c9302a94ef895863524f22b70263e969665c49?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">Amora Beauty</div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 5.000/1 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Sanggau, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Kardus Bekas</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa9206ef7a41b62dfd0b1f97ac3c4990beb99f66298b90d4a7f2b4108bb129a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      Han Battery Industry
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 20.000/10 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Sanggau, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Baterai Bekas</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0184ff40431de1c4bd11c9fddb5285168b071be2e58dec1aeb7c3976fe5a713f?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      NataCoco Production
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 100.000/5 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Landak, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">
                    Serabut Kelapa
                  </div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a8b6fe12c8287f264633eaeb0395653fdeb87a60235f38c2eeb4c290991a22e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      PT Ternak Tumbuh
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 200.000/5 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Sanggau, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Kotoran Sapi</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-4 mt-6 max-md:mr-2.5 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0da04bb84f46f129b43460c94cebab65bb205559c4304d65a9dca619d7952e7e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      Lenn Tanuwijaya
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 50.000/3 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Pontianak, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Kulit Manggis</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f6d6735f7523e71c10e188c4d3e12819d09fcddf164404a30b6a4ff112a299?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">Goga Mineral</div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 5.000/1 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Pontianak, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Botol Plastik</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7586e767f3975d3f050aabe4977688ad5aab609ba53eaefc2c7f0eaa16458f4e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">
                      Miror Industry
                    </div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 1.000.000/15 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Ketapang, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">Cermin Reject</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-2xl leading-6 max-md:mt-6">
                  <div class="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl aspect-[1.78] text-stone-200">
                    <img
                      loading="lazy"
                      srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43c033f2a5b4936f1f340300c6f4aa831fb7d37fbfe7b0cc9afc9aeced97a89a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      class="object-cover absolute inset-0 size-full"
                    />
                    <div class="relative backdrop-blur-[2px]">Jus Remina</div>
                    <div class="relative mt-28 text-right max-md:mt-10">
                      Rp 10.000/1 Kg
                    </div>
                    <div class="flex relative gap-1.5 px-20 mt-1.5 text-base text-right max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d15ee3f9b108876e323ac5d343266e371559790daef7b64cbcbb3fd6dfcb89?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        class="shrink-0 w-4 aspect-square"
                      />
                      <div>Pontianak, Kalimantan Barat</div>
                    </div>
                  </div>
                  <div class="mt-3 font-bold text-[#304D30]">
                    Kulit Buah-Buahan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="self-stretch bg-neutral-200 min-h-[12px]"></div>

      <div class="self-stretch px-20 py-12 max-md:px-5 bg-[#EEF0E5]">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col self-stretch my-auto leading-[100%] max-md:mt-10 max-md:max-w-full">
              <div class="flex gap-3 font-semibold text-neutral-800 max-md:flex-wrap">
                <div class="text-2xl text-[#163020]">EcoSeller’s</div>
                <div class="flex-1 text-base text-[#163020]">
                  Tertarik berjualan? Jadilah Penjual
                </div>
              </div>
              <div class="mt-6 text-base text-[#163020] max-md:max-w-full">
                Cara mudah untuk menyalurkan sampah Anda ke tempat yang tepat
              </div>
              <div class="flex gap-5 justify-between mt-6 text-base max-md:flex-wrap">
                <a href="/seller/register">
                  <button class="justify-center px-6 py-3 font-semibold text-white rounded-xl bg-[#163020] max-md:px-5">
                    Daftar Sekarang
                  </button>
                </a>
                <div class="my-auto text-neutral-800">Selengkapnya</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center w-full text-2xl font-bold leading-6 whitespace-nowrap rounded-xl bg-zinc-400 text-stone-200 max-md:mt-10 max-md:max-w-full">
              <div class="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[265px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                  class="object-cover absolute inset-0 size-full"
                />
                <div class="flex relative gap-3 mt-5 mb-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6754c44e546baaabbaa83581a5b704e87ab67d60826ac8af9324107734ceb63?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 aspect-[0.72] w-[46px]"
                  />
                  <div class="my-auto">EcoSell</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div class="flex justify-center items-center self-stretch px-16 py-12 text-base leading-4 text-black bg-[#EEF0E5] max-md:px-5">
        <div class="flex gap-5 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a8b3bcd97e1938df2949aca7b24a7d4632b317d527fb83c523c28766be45070?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            class="shrink-0 aspect-[0.74] w-[47px]"
          />
          <div class="my-auto">EcoSwap Copyright 2024</div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
