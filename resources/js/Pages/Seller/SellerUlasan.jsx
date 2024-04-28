import AuthenticatedSeller from "@/Layouts/AuthenticatedSeller";
import { Head } from "@inertiajs/react";
import * as React from "react";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedSeller
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>
      }
    >
      <div className="flex flex-col bg-stone-200">
        <div className="pb-20 w-full max-md:pr-5 max-md:max-w-full bg-[#EEF0E5]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 bg-[#EEF0E5]">
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full bg-[#EEF0E5]">
              <div className="flex flex-col p-12 w-full text-2xl leading-6 text-black bg-[#DFE4DF] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-center mt-1 text-4xl font-semibold text-neutral-800">
                  EcoSeller’s
                </div>
                <div className="shrink-0 mt-9 h-0.5 rounded-md bg-zinc-400" />
                <div className="flex gap-3 mt-6 text-base text-neutral-800">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5f4a378b0185582e1c70595d0d76190f11bab67386025a251dfe24bf1a98f64?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 w-16 aspect-square rounded-[64px]"
                  />
                  <div className="flex flex-col flex-1 py-1 rounded-md">
                    <div className="flex gap-2.5 justify-center font-bold">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c624cb4cae97b86436251789d80cde4adef0c52b68e698ef953c23e74fbff3?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-6 aspect-[1.09]"
                      />
                      <div className="my-auto">PT Angkasa Raya</div>
                    </div>
                    <div className="flex gap-2.5 justify-center mt-3">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/389b5a096c5f495314fd3c857473e66785c8f0da2e10973008fbbc964bcaabf6?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 w-6 aspect-[1.09]"
                      />
                      <div className="my-auto">Pontianak, Kalimantan Barat</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-3 text-base text-neutral-800">
                  <div>Jam Operasional</div>
                  <div className="text-right">09:00-21:00</div>
                </div>
                <div className="flex gap-5 justify-between mt-3 text-base whitespace-nowrap text-neutral-800">
                  <div>Followers</div>
                  <div className="text-right">1000</div>
                </div>
                <div className="shrink-0 mt-6 h-0.5 rounded-md bg-zinc-400" />
                <div className="flex gap-2.5 justify-center self-start px-2 py-2.5 mt-5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5ec5c2df37ea96c188ea2b6ad88b22eb37db9ddf6766e15ad15848d8b1c6e3?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <div>Dashboard</div>
                </div>
                <div className="flex gap-5 justify-center pr-20 mt-5 max-w-full text-right whitespace-nowrap w-[359px] max-md:pr-5">
                  <div className="flex gap-2.5 justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6668a8d52cc376ddf73764aa0b953e2b5cb759252dedb405ed0831d9353c5843?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-start aspect-[0.96] w-[23px]"
                    />
                    <div>Ecopost</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d0b42cdae91db9ff8b566619f21ebc48e07027e573c429b3b6041fa57969e4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2.5 justify-center self-center p-2.5 mt-3 max-w-full text-right w-[303px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f346db9e30cdff7bbee120319d025cb710273ec1f4afa0dca81990a7d9c853ad?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <a href={route("seller-tambah")}>Tambah Produk</a>
                </div>
                <div className="flex gap-2.5 justify-center self-center p-2.5 mt-3 max-w-full w-[303px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/22fb128bd5bdb3f5b2c93d759fff54d43678537018dc149905dec036abef49b4?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <a href={route("seller-daftar")} className="flex-1">
                    Daftar Produk
                  </a>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b6f797bd2bdc201b884c9dec56a53f955d841cc94183a1191851dfb13de311a?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>Pengiriman</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/184cc88ace9a940676cd478eeaa19397ae963d34809097a7ff8b62494e21c5a2?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>EcoChat</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46f830c21c383ee12a0e972c18a76c0a6b43807ad1732bf06f46a094152a1251?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>EcoRoom</div>
                </div>
                <div class="flex gap-2.5 p-2.5 text-2xl font-bold leading-6 text-right text-black">
                  <div class="shrink-0 w-0.5 rounded-md bg-neutral-800 h-[25px] w-[4px]"></div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5496b52cf8a38f25938e59924962a4ac3c040729274b6022d6caa29397fe774?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    class="shrink-0 self-start w-6 aspect-square"
                  />
                  <div>Ulasan Pembeli</div>
                </div>
                <div className="flex gap-2.5 justify-center self-start py-2.5 mt-2.5 text-right whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a8629650582e540d21d4f4b35cc750e9da4d6e52537db339e9e88dcc833ebb?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <div>Settings</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full bg-[#EEF0E5]">
              <div className="flex flex-col p-12 max-md:px-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex flex-col grow shrink-0 self-end basis-0 w-fit max-md:mt-10 max-md:max-w-full">
                    <div className="text-5xl font-bold leading-[49px] text-[#163020] max-md:max-w-full max-md:text-4xl">
                      Ulasan Pembeli
                    </div>
                    <div className="flex gap-5 justify-between mt-12 text-base leading-4 text-neutral-800 max-md:flex-wrap max-md:mt-10">
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
                            placeholder="Cari Nama Produk"
                            class="border-transparent focus:border-transparent focus:ring-0 not-italic max-md:max-w-full outline-none border-none bg-transparent"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 p-3 rounded-md bg-[#163020] text-white">
                        <div className="my-auto">Urutkan</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/532db1250f23ef446b245b26ef766f9f1fdb4a7618350236d8bafece074348e2?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-12 mt-6 bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-5 text-neutral-800 max-md:flex-wrap">
                        <div className="flex flex-col flex-1 justify-center py-px text-4xl font-bold leading-10">
                          <div className="flex gap-2 px-1 items-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9697aceeb290b0bfe147da7fd93e40bd3be0887b9e11c5c6921c49a0df50178b?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-square w-[76px] align-self-start"
                            />
                            <div className="my-auto mb-6 mr-5">
                              <span className="text-6xl leading-[78px]">
                                4.9
                              </span>
                              /5.0
                            </div>
                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                              <div className="text-3xl font-bold">
                                Kemasan Sterofoam
                              </div>
                              <div className="mt-0.5 text-lg">
                                Rp 200.000/40 Kg
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-auto text-2xl leading-5 text-right">
                          Menampilkan 2 dari 5 ulasan
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9484f0a1bd15e09a7c1096002431f8b87d788b5f9929d998a27a793bcf9b5999?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="object-contain mt-6 w-full border-solid aspect-[100] border-[5px] border-neutral-200 stroke-[5px] stroke-neutral-200 max-md:max-w-full"
                      />
                      <div className="flex gap-5 justify-between py-2.5 pr-1 pl-2.5 mt-12 w-full leading-[100%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-2.5 text-2xl font-bold text-neutral-800">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 p-2.5 aspect-square w-[52px]"
                          />
                          <div className="my-auto">Rina Akrina</div>
                        </div>
                        <div className="justify-center p-2.5 my-auto text-base whitespace-nowrap rounded-xl bg-[#163020] text-white max-md:px-5">
                          Balas
                        </div>
                      </div>
                      <div className="flex flex-col items-start px-2.5 max-md:max-w-full">
                        <div className="text-base leading-4 text-neutral-800">
                          Pembelian 20 Kg
                        </div>
                        <div className="flex gap-3 mt-2.5">
                          <div className="flex gap-2 justify-center py-0.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ec80a7febc1d3e337ee3e1a50ee8348baca5fdd3ca78c01a8fdf30c50a1f051?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-square w-[26px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e25c36dcea1f377b3117d7492b1ac8dda71bf43169971f4ffb2eec7cd911b79?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-[1.04] w-[27px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/260b9582441cbd91a66365ec998da5deb4004676994965f001db3b65b1133846?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-square w-[26px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4152eb0b429fd26dc070a19b9b88181470325d103addf1535c8d249882ef06?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-square w-[26px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76dc1199dddd57530152b2ab361b368ab7a34660b25b1fb0562c842420b516d?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-[1.04] w-[27px]"
                            />
                          </div>
                          <div className="my-auto text-base leading-4 text-neutral-800">
                            13/05/24 13:04{" "}
                          </div>
                        </div>
                        <div className="self-stretch mt-6 text-2xl leading-6 text-neutral-800 max-md:max-w-full">
                          Lorem ipsum dolor sit amet consectetur adipiscing elit
                          Ut et massa mi. Aliquam in hendrerit urna.
                          Pellentesque sit amet sapien.
                        </div>
                      </div>
                      <div className="flex flex-col items-start px-6 pb-6 mt-6 text-2xl leading-6 rounded-xl bg-[#DFE4DF] text-neutral-800 max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col justify-center p-2.5 max-w-full font-bold w-[313px]">
                          <div className="flex gap-2.5">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 p-2.5 aspect-square w-[52px]"
                            />
                            <div className="my-auto text-[#163020]">
                              PT Angkasa Raya
                            </div>
                          </div>
                        </div>
                        <div className="max-md:max-w-full text-[#163020]">
                          Terima kasih telah berbelanja di toko kami!
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9484f0a1bd15e09a7c1096002431f8b87d788b5f9929d998a27a793bcf9b5999?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="object-contain mt-6 w-full border-solid aspect-[100] border-[5px] border-neutral-200 stroke-[5px] stroke-neutral-200 max-md:max-w-full"
                      />
                      <div className="flex gap-5 justify-between py-2.5 pr-1 pl-2.5 mt-12 w-full leading-[100%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-2.5 text-2xl font-bold text-neutral-800">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&"
                            className="shrink-0 p-2.5 aspect-square w-[52px]"
                          />
                          <div className="my-auto">Rina Akrina</div>
                        </div>
                        <div className="justify-center p-2.5 my-auto text-base whitespace-nowrap rounded-xl bg-[#163020] text-white max-md:px-5">
                          Balas
                        </div>
                      </div>
                      <div className="flex flex-col items-start px-2.5 max-md:max-w-full">
                        <div className="text-base leading-4 text-neutral-800">
                          Pembelian 20 Kg
                        </div>
                        <div className="flex gap-3 mt-2.5">
                          <div className="flex gap-2 justify-center py-0.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ec80a7febc1d3e337ee3e1a50ee8348baca5fdd3ca78c01a8fdf30c50a1f051?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-square w-[26px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e25c36dcea1f377b3117d7492b1ac8dda71bf43169971f4ffb2eec7cd911b79?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-[1.04] w-[27px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/260b9582441cbd91a66365ec998da5deb4004676994965f001db3b65b1133846?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-square w-[26px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4152eb0b429fd26dc070a19b9b88181470325d103addf1535c8d249882ef06?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-square w-[26px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76dc1199dddd57530152b2ab361b368ab7a34660b25b1fb0562c842420b516d?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 aspect-[1.04] w-[27px]"
                            />
                          </div>
                          <div className="my-auto text-base leading-4 text-neutral-800">
                            13/05/24 13:04{" "}
                          </div>
                        </div>
                        <div className="self-stretch mt-6 text-2xl leading-6 text-neutral-800 max-md:max-w-full">
                          Lorem ipsum dolor sit amet consectetur adipiscing elit
                          Ut et massa mi. Aliquam in hendrerit urna.
                          Pellentesque sit amet sapien.
                        </div>
                      </div>
                      <div className="flex flex-col items-start px-6 pb-6 mt-6 text-2xl leading-6 rounded-xl bg-[#DFE4DF] text-neutral-800 max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col justify-center p-2.5 max-w-full font-bold w-[313px]">
                          <div className="flex gap-2.5">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c456a5bf4ed99698d2b8bb012bd002135bcb28cc72d97b67d0163aea2a62d364?apiKey=81aa3398288b425cae501e07d8c56af5&"
                              className="shrink-0 p-2.5 aspect-square w-[52px]"
                            />
                            <div className="my-auto text-[#163020]">
                              PT Angkasa Raya
                            </div>
                          </div>
                        </div>
                        <div className="max-md:max-w-full text-[#163020]">
                          Terima kasih telah berbelanja di toko kami!
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9484f0a1bd15e09a7c1096002431f8b87d788b5f9929d998a27a793bcf9b5999?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="object-contain mt-6 w-full border-solid aspect-[100] border-[5px] border-neutral-200 stroke-[5px] stroke-neutral-200 max-md:max-w-full"
                      />
                      <div className="justify-center self-start p-2.5 mt-16 text-2xl leading-6 rounded-xl bg-[#163020] text-white max-md:mt-10">
                        Tampilkan Semua Ulasan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedSeller>
  );
}
