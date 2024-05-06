import AuthenticatedSeller from "@/Layouts/AuthenticatedSeller";
import { Head, Link } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedSeller
      user={auth.user}
    >
      
      <div className="flex gap-3 px-20 py-12 max-md:flex-wrap max-md:px-5 bg-[#EEF0E5]">
        <div className="flex flex-col flex-1 justify-center text-base leading-4 text-[color:var(--Dark,#163020)] max-md:max-w-full">
          <div className="flex gap-3 px-6 py-3 rounded-md bg-[color:var(--More-Muted,#DFE4DF)] max-md:flex-wrap max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?placeholderIfAbsent=true"
              backgroundsize="auto"
              className="relative shrink-0 w-6"
              aspectratio={1}
              nowebp="true"
            />
            <input
              placeholder="Mencoba mencari sesuatu?"
              className="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-0 py-3 w-16 h-16 rounded-md bg-[#DFE4DF] max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1326360a1da280407f596a5d5c647c2057f9f1408186eea43b511ff3e2c34ecc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            className="w-6 aspect-square"
          />
        </div>
        <div className="flex flex-col justify-center items-center px-0 py-3 w-16 h-16 rounded-md bg-[#DFE4DF] max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2586b30d181d792f4d3b197ea90f6b6e9e0719ebe3ef42f286bc9ec062a5eb2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            className="w-5 aspect-square"
          />
        </div>
      </div>
      <div className="self-stretch bg-neutral-200 min-h-[12px]"></div>
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
      <div className="self-stretch bg-neutral-200 min-h-[12px]"></div>

      <div className="flex flex-col items-left px-20 py-11 max-md:px-5 bg-[#EEF0E5]">
        <div className="text-4xl font-semibold leading-110 text-[#304D30] max-md:max-w-full">
          Limbah Organik
        </div>
        &nbsp;
        <div className="self-stretch">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
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
                  <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                    <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                  </div>
                </div>
                <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                  Kulit Telur
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
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
                  <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
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
        &nbsp;
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
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
                <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                  <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                </div>
              </div>
              <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                Kulit Telur
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
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
                <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                  <div>Jl Tanjung Raya 2, No.9</div>
                </div>
              </div>
              <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                Limbah Sawit
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
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
                <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                  <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                </div>
              </div>
              <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                Kulit Telur
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
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
                <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
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
      <div className="flex flex-col justify-center text-4xl font-medium leading-9 text-right bg-white text-stone-200">
        <div className="flex flex-col justify-center w-full bg-black bg-opacity-50 max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-20 w-full min-h-[320px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4b0561fa2a914f58476b5bf3ea480d9e9050d53393ebf8f7a2b16b6bfc9b998?apiKey=81aa3398288b425cae501e07d8c56af5&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col pb-16 pl-5 mt-5 mr-5 max-w-full shadow-lg w-[599px] max-md:pl-5 max-md:mr-2.5">
              <div className="max-md:max-w-full">Cari Produk Melalui Peta</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4ba91e6bec840d6eb15ba36183c7a16f335b0abdbb8289b5234de29e9f8f7b9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="self-end mt-3 w-9 aspect-square fill-zinc-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-neutral-200 min-h-[12px]"></div>
      <div className="flex flex-col items-left px-20 py-11 max-md:px-5 bg-[#EEF0E5]">
        <div className="text-4xl font-semibold leading-110 text-[#304D30] max-md:max-w-full">
          Limbah Anorganik
        </div>
        &nbsp;
        <div className="self-stretch">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                    PT Sintaralewi
                  </div>
                  <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                    Rp 200.000/40 Kg
                  </div>
                  <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                    <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                  </div>
                </div>
                <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                  Kemasan Sterofoam
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                    Glass Corporate Company
                  </div>
                  <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                    Rp 100.000/10 Kg
                  </div>
                  <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                    <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                  </div>
                </div>
                <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                  Botol Kaca
                </div>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        <div className="self-stretch">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e273d33add4f31773edf8350136200504c7a74de09ea7875053638ef69129a4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                    PT Sintaralewi
                  </div>
                  <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                    Rp 200.000/40 Kg
                  </div>
                  <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                    <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                  </div>
                </div>
                <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                  Kemasan Sterofoam
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d359bc79c183506636612bcc0f3d845b83eb96294803d95c129acdc467b3be79?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                    Glass Corporate Company
                  </div>
                  <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                    Rp 100.000/10 Kg
                  </div>
                  <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                    <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                  </div>
                </div>
                <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                  Botol Kaca
                </div>
              </div>
            </div>
          </div>
          &nbsp;
          <div className="self-stretch">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/415c57551540c14c1f85a3d23e78f0792d52df2e0c08b52ddb4ee085dd66e351?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                      Stream Steel Company
                    </div>
                    <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                      Rp 200.000/40 Kg
                    </div>
                    <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                      <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                    </div>
                  </div>
                  <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                    Scrap Besi
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 text-2xl leading-6 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col justify-between px-3 py-6 w-full font-semibold rounded-xl min-h-[233px] text-stone-200 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd97a54bb38280d8b9a88941a50fa4ade0be2a14415910de8775baed47580ab?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative backdrop-blur-[2px] max-md:max-w-full">
                      PT Produta Jaya
                    </div>
                    <div className="relative mt-28 text-right max-md:mt-10 max-md:max-w-full">
                      Rp 100.000/10 Kg
                    </div>
                    <div className="relative mt-0 text-right max-md:mt-10 max-md:max-w-full text-base">
                      <div>Jl Purnama 1, Komplek Agung Raya No.9</div>
                    </div>
                  </div>
                  <div className="mt-3 font-bold text-neutral-700 max-md:max-w-full">
                    Potongan Kayu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-neutral-200 min-h-[12px]"></div>

      <div className="flex flex-col self-stretch px-20 pt-12 pb-8 bg-[#163020] leading-[100%] text-stone-200 max-md:px-5">
        <div className="flex gap-3 mx-4 max-md:flex-wrap max-md:mr-2.5">
          <div className="flex-1 my-auto text-2xl font-semibold max-md:max-w-full">
            Seseorang Mencari Limbah
          </div>
          <div className="justify-center px-6 py-3 text-base rounded-xl border-2 border-solid border-neutral-200 max-md:px-5">
            Mari Diskusikan Pencarian
          </div>
        </div>
        <div className="mx-4 mt-3 text-base max-md:mr-2.5 max-md:max-w-full">
          Mari kita lihat apa yang dapat Anda lakukan!
        </div>
        <div className="flex gap-5 justify-between mx-4 mt-6 text-base font-semibold text-neutral-800 max-md:flex-wrap max-md:mr-2.5">
          <div className="flex gap-5 p-6 rounded-xl bg-neutral-200 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              className="shrink-0 self-start w-12 aspect-square"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="max-md:max-w-full">Rina Akrina</div>
              <div className="mt-3 text-2xl max-md:max-w-full">Kardus Bekas</div>
              <div className="mt-3 max-md:max-w-full">
                Dicari kardus bekas dari industry rumahan atau pabrik...
              </div>
            </div>
          </div>
          <div className="flex gap-5 p-6 rounded-xl bg-neutral-200 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              className="shrink-0 self-start w-12 aspect-square"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="max-md:max-w-full">Amely11</div>
              <div className="mt-3 text-2xl max-md:max-w-full">Kantong Plastik</div>
              <div className="mt-3 max-md:max-w-full">
                Dibutuhkan kantong plastik kemasan sisa produksi ata...
              </div>
            </div>
          </div>
          <div className="flex gap-5 p-6 rounded-xl bg-neutral-200 max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6634fba1d0503b7354c6017b6741929435bd733230796cdc1cf0f03deedf9696?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              className="shrink-0 self-start w-12 aspect-square"
            />
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="max-md:max-w-full">Wiry Agustin</div>
              <div className="mt-3 text-2xl max-md:max-w-full">
                Tutup Botol Kaleng
              </div>
              <div className="mt-3 max-md:max-w-full">
                Dibutuhkan tutup botol kaleng bekas sisa pemakaian...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-neutral-200 min-h-[12px]"></div>
      <div className="flex gap-0 justify-between items-start self-stretch px-20 py-12 text-base leading-4 bg-[#EEF0E5] text-neutral-600 max-md:flex-wrap max-md:px-5">
        <div className="flex flex-col flex-1 self-stretch">
          <div className="text-2xl font-semibold text-[#163020]">Kategori</div>
          <div className="mt-3 ">Limbah Kulit Buah</div>
          <div className="mt-3">Limbah Elektronik</div>
          <div className="mt-3">Limbah Plastik</div>
          <div className="mt-3">Limbah Kain</div>
          <div className="mt-3">Limbah Kaca</div>
          <div className="mt-3">Limbah Minyak Jelatah</div>
          <div className="mt-3">Limbah Kayu</div>
          <div className="mt-3">Limbah Styrofoam</div>
          <div className="mt-3">Limbah Besi</div>
          <div className="mt-3">Kompos</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-2xl font-semibold text-[#163020]">Tentang</div>
          <div className="mt-3">Cerita Kami</div>
          <div className="mt-3">Pers & Berita</div>
          <div className="mt-3">Mitra</div>
          <div className="mt-3">Kebijakan Privasi</div>
          <div className="mt-3">Relasi Investor</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-2xl font-semibold text-[#163020]">Dukungan</div>
          <div className="mt-3">Bantuan & Dukungan</div>
          <div className="mt-3">Kepercayaan & Keamanan</div>
          <div className="mt-3">Menjual di EcoSwap</div>
          <div className="mt-3">Pembelian di EcoSwap</div>
        </div>
        <div className="flex flex-col flex-1 self-stretch">
          <div className="text-2xl font-semibold text-[#163020]">Komunitas</div>
          <div className="mt-3">Kisah Sukses Pelanggan</div>
          <div className="mt-3">Pusat Komunitas</div>
          <div className="mt-3">Forum</div>
          <div className="mt-3">Acara</div>
          <div className="mt-3">Blog</div>
          <div className="mt-3">Pemberi pengaruh</div>
          <div className="mt-3">Afiliasi</div>
          <div className="mt-3">Podcast</div>
          <div className="mt-3">Menjadi Penjual</div>
          <div className="mt-3">Standar Komunitas</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-2xl font-semibold text-[#163020]">
            Lainnya dari EcoSwap
          </div>
          <div className="mt-3">Pendidikan EcoSwap</div>
          <div className="mt-3">Postingan EcoSwap</div>
          <div className="mt-3">Dapatkan Inspirasi</div>
        </div>
      </div>
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
    </AuthenticatedSeller>
  );
}
