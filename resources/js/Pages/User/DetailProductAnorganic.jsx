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
                <a href={route("dashboard")}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dacd6a9a7b3c3da2aa8cbe3c61842936b413bf911eb3e09e563283b6b24ee778?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    class="shrink-0 w-10 aspect-square"
                  />
                </a>
                <div class="mx-4 text-2xl font-semibold leading-6 text-black max-md:mr-2.5 max-md:max-w-full">
                  Detail Produk
                </div>
              </div>
            </div>
          </div>
          <div className="px-20 py-12 max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/efba7d7887a69a5749ccaccbfbfb5bf2e0270352eadf38e8db5c64df2e177376?apiKey=81aa3398288b425cae501e07d8c56af5&"
                  className="self-stretch my-auto w-full rounded-md aspect-[1.32] max-md:mt-10"
                />
                <div className="flex justify-between mt-100">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f9e018d79f75ce81d497bd85936d392091b6fff7940fc37b328ce1e9b953f0c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 p-2.5 aspect-square w-[80px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/029aa22c3ca73a2e1fc672520039a434170d4ccf625a13dae496769471b3851a?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 p-2.5 aspect-square w-[80px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac576ec5179886e653abfed5f1372846bcc0e95e03d1857d83c9264f9a1ac014?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 p-2.5 aspect-square w-[80px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca71be3632d90b571d4f50b1d7fb9a79a8c6db047d50069053215a7a9f544a5c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 p-2.5 aspect-square w-[80px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce9b595061df365c5cb5756df396ba592a26c3500fb67471c90989df5f96285d?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 p-2.5 aspect-square w-[80px]"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-5 leading-[100%] max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 pr-20 max-md:flex-wrap max-md:pr-5">
                    <div className="text-2xl font-semibold text-black">
                      Botol Mineral
                    </div>
                    <div className="justify-center self-start px-2 py-1 text-base whitespace-nowrap rounded-2xl bg-[#304D30] text-stone-200">
                      Anorganik
                    </div>
                  </div>
                  <div className="flex gap-3 items-center mt-3 text-base text-black max-md:flex-wrap">
                    <div className="self-stretch my-auto font-semibold">
                      120 Terjual
                    </div>
                    <div className="self-stretch my-auto">•</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cd2032b5e7216188c455690f5583dfea645cb167fe1edeef44b5a80f246afb5?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-stretch w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto text-xl font-semibold">
                      5.0
                    </div>
                    <div className="self-stretch my-auto">•</div>
                    <div className="self-stretch my-auto max-md:max-w-full">
                      59 Ulasan
                    </div>
                  </div>
                  <div className="mt-6 text-3xl font-semibold text-neutral-700 max-md:max-w-full">
                    Rp 200.000/10 Kg
                  </div>
                  <div className="mt-6 text-sm text-rose-500 max-md:max-w-full">
                    Minimal pembelian 10 Kg
                  </div>
                  <div className="flex gap-5 pr-20 mt-6 text-base whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                    <div className="flex gap-3 text-neutral-700">
                      <div className="flex gap-5 px-6 py-3 rounded-md border border-solid border-neutral-700 max-md:px-5">
                        <div>-</div>
                        <div>100</div>
                        <div>+</div>
                      </div>
                      <div className="my-auto font-semibold">Kg</div>
                    </div>
                    <div className="justify-center px-6 py-3 font-semibold rounded-md bg-[#304D30] text-stone-200 max-md:px-5">
                      Beli
                    </div>
                  </div>
                  <div className="mt-6 text-base font-semibold text-black max-md:max-w-full">
                    Dekripsi Limbah
                  </div>
                  <div className="mt-3 text-base leading-4 text-black max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu. Curabitur pellentesque nibh nibh, at maximus
                    ante fermentum sit amet. Pellentesque commodo lacus at
                    sodales sodales. Quisque sagittis orci ut diam condimentum,
                    vel euismod erat placerat. In iaculis arcu eros, eget tempus
                    orci facilisis id.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-left items-center self-stretch px-16 py-12 text-base leading-4 rounded-md bg-[#304D30] text-neutral-700 max-md:px-5">
            <div className="flex gap-5 pr-20 max-md:flex-wrap max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb10dde5e8267830fee13a15d96e3aba569e3b3da53bcccd0deb662d470cdbc3?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 aspect-square fill-stone-200 w-[46px]"
              />
              <div className="flex flex-col justify-center self-start text-stone-200">
                <div className="font-semibold">PT Wongso Furniture</div>
                <div className="mt-3">Jl. Purnama No.10 </div>
              </div>
              <div className="justify-center px-6 py-3 my-auto font-semibold whitespace-nowrap rounded-md bg-stone-200 max-md:px-5">
                Follow
              </div>
              <div className="justify-center px-6 py-3 my-auto font-semibold whitespace-nowrap rounded-md bg-stone-200 max-md:px-5">
                Chat
              </div>
            </div>
          </div>
          <div className="flex flex-col items-left px-20 py-12 text-neutral-700 max-md:px-5">
            <div className="text-2xl font-semibold leading-6 max-md:max-w-full">
              Penilaian
            </div>
            <div className="flex gap-5 justify-between mt-6 w-full leading-[100%] max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 justify-between text-2xl font-semibold whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                  className="shrink-0 w-9 aspect-square fill-[bg-[#304D30]]"
                />
                <div className="my-auto">Charistheo</div>
              </div>
              <div className="my-auto text-base">Pembelian 25 Kg</div>
            </div>
            <div className="flex gap-1.5 mt-3 w-full text-base leading-4 max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-1 my-auto max-md:max-w-full">
                26/9/2024 11:45
              </div>
            </div>
            <div className="mt-6 text-base leading-4 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.
            </div>
            <div className="flex flex-col px-9 py-6 mt-6 w-full text-base rounded-md bg-zinc-300 max-w-[1248px] max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 items-center pr-20 leading-[100%] max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                  className="shrink-0 self-stretch w-9 aspect-square fill-[bg-[#304D30]]"
                />
                <div className="self-stretch my-auto font-semibold">
                  PT Wongso Furniture
                </div>
                <div className="justify-center self-stretch px-2 py-1 my-auto whitespace-nowrap rounded-2xl border border-solid border-neutral-700">
                  Seller
                </div>
              </div>
              <div className="mt-2.5 leading-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 w-full leading-[100%] max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 justify-between text-2xl font-semibold whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6431510ecb93397d1eff7abd38ccc1233197cbc0467ba77644a5adae517f26c?apiKey=81aa3398288b425cae501e07d8c56af5&"
                  className="shrink-0 w-9 aspect-square fill-[bg-[#304D30]]"
                />
                <div className="my-auto">Charistheo</div>
              </div>
              <div className="my-auto text-base">Pembelian 25 Kg</div>
            </div>
            <div className="flex gap-1.5 mt-3 w-full text-base leading-4 max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cb185681743f49fb6ef5a513ac7cb1b1ebca48e354f79134d8d569955456a9?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-1 my-auto max-md:max-w-full">
                26/9/2024 11:45
              </div>
            </div>
            <div className="mt-6 text-base leading-4 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.
            </div>
            &nbsp;
            <div className="flex gap-5 justify-between mt-6 w-full text-2xl font-semibold leading-6 max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
              <div>Ulasan Lainnya</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a547ab8160604a377c5379e87c33d8503d31b7b8a184ba9eb9dc951daacefe?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="shrink-0 my-auto w-5 aspect-[1.67] fill-[bg-[#304D30]]"
              />
            </div>
          </div>
          <div className="w-full bg-zinc-300 min-h-[2px] max-md:max-w-full" />
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
              <h2 className="text-2xl font-semibold text-neutral-800">
                Tentang
              </h2>
              <p className="mt-3">Cerita Kami</p>
              <p className="mt-3">Pers & Berita</p>
              <p className="mt-3">Mitra</p>
              <p className="mt-3">Kebijakan Privasi</p>
              <p className="mt-3">Relasi Investor</p>
            </section>
            <section className="flex flex-col flex-1">
              <h2 className="text-2xl font-semibold text-neutral-800">
                Dukungan
              </h2>
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
      </div>
    </div>
  );
}
