import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
// import Dropdown from "@/Components/Dropdown";
// import NavLink from "@/Components/NavLink";
// import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Landing Page" />
      {/* elemen belakang */}
      <img
        src="/sampah.png"
        alt="Kumpulan Sampah"
        className="fixed h-screen object-cover md:size-full md:object-fill z-0"
      />
      <div
        className="relative min-h-screen bg-gradient-to-t from-muted to-transparent"
        style={{ fontFamily: `sans-serif` }}
      >
        {/* penutup elemen belakang */}
        {/* konten hero */}
        <div className="h-screen">
          {/* bungkus nav */}
          <div className="w-screen bg-[color:var(--Neat,#EEF0E5)] leading-[100%] max-md:px-5 max-md:max-w-full">
            <nav className="max-w-7xl py-5 mx-auto flex flex-wrap justify-between">
              <div className="flex items-center w-full justify-between md:w-auto">
                <div className="flex items-center gap-3">
                  <Link href="/">
                    <ApplicationLogo className="w-auto" />
                  </Link>
                  <div className="my-auto not-italic text-2xl text-[color:var(--Dark,#163020)]">
                    <span className="font-bold">Eco </span>Swap
                  </div>
                </div>
              </div>
              <div className="flex md:gap-10 mx-4 gap-2">
                {auth.user ? (
                  (auth.user.role == "admin" ? (
                    <Link
                      href={route("admin.dashboard")}
                      className="flex flex-col justify-center px-6 py-3 not-italic rounded-md bg-[color:var(--Dark,#163020)] text-[color:var(--Neat,#EEF0E5)] max-md:px-5"
                    >
                      Dashboard Admin
                    </Link>
                  ) : (
                    <Link
                      href={route("user-catalog")}
                      className="flex flex-col justify-center px-6 py-3 not-italic rounded-md bg-[color:var(--Dark,#163020)] text-[color:var(--Neat,#EEF0E5)] max-md:px-5"
                    >
                      Catalog
                    </Link>
                  ))
                ) : (
                  <>
                    <div className="flex gap-5 justify-between w-full max-w-[1680px] max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-5 justify-between my-auto text-base font-bold whitespace-nowrap">
                        <Link
                          href={route("login")}
                          className="flex flex-col justify-center px-6 py-3 not-italic rounded-md bg-[color:var(--Dark,#163020)] text-[color:var(--Neat,#EEF0E5)] max-md:px-5"
                        >
                          Masuk
                        </Link>

                        <Link
                          href={route("register")}
                          className="flex flex-col justify-center px-6 py-3 not-italic rounded-md border-2 border-solid border-neutral-800 text-[color:var(--Dark,#163020)] max-md:px-5"
                        >
                          Daftar
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <br />
            <div className="flex gap-2 px-2 py-2 rounded-md bg-neutral-200 max-md:flex-wrap max-md:px-5 w-1/2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?apiKey=937261aeaab2482b817691a974988cbc&"
                alt=""
                className="shrink-0 w-6 aspect-square"
              />
              <input
                className="my-auto grow border-none bg-transparent focus:outline-none outline-0 max-md:max-w-5"
                placeholder="Mencoba mencari sesuatu?"
              />
            </div>
            {/* main item */}
            <main className="mt-10 flex flex-col h-3/4 justify-around">
              <div className="flex items-start gap-10 mb-20 flex-wrap md:flex-nowrap">
                <img
                  src="./quote.png "
                  width=""
                  alt="quote"
                  className="w-auto lg:w-2/3 md:w-1/2"
                />
                <div className="text-sm flex flex-col items-start gap-2 mb-2">
                  <div className="description">
                    &quot;FusionForge adalah perusahaan rintisan sistem
                    informasi berbasis teknologi yang didirikan untuk mengatasi
                    <br />
                    berbagai masalah lingkungan dengan memberikan solusi yang
                    bermanfaat bagi lingkungan dan masyarakat.&quot;
                  </div>

                  <p className="text-xl font-bold">Mulai Swapping Sekarang !</p>
                  <div className=" rounded-full bg-emerald-950 p-2 text-white">
                    Mulai <b>SWAPPING</b>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="flex flex-col bg-stone-200">
          <div className="flex gap-5 justify-between items-center self-center px-5 mt-12 text-base leading-4 text-neutral-800 max-md:flex-wrap max-md:mt-10">
            <div className="self-stretch my-auto">Trusted by :</div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48fae1a11e3dbd36e539a866b6099e99ff28bc5e2d4a46d1db6240a41bfa6432?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              className="shrink-0 self-stretch my-auto max-w-full aspect-[5] w-[164px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49f2d7ea43f6434f2ec6ed9921007b4a7c92264c451c337e7309336d1e7fb6d7?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              className="shrink-0 self-stretch max-w-full aspect-[2] w-[120px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a6347e46e3d652ab3a53c38ea048b09237f943892aba971f5d1d700327f9486?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              className="shrink-0 self-stretch my-auto max-w-full aspect-[3.7] w-[111px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4625a2f860f59e5d70a36d75b27efbf317e40d40b17c776f87a84df1caf1b2bc?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
              className="shrink-0 self-stretch my-auto max-w-full aspect-[3.03] w-[113px]"
            />
          </div>
          <div className="flex flex-col px-20 py-12 mt-12 w-full bg-green-950 text-stone-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="self-center text-4xl font-extrabold leading-10">
              <span className=" text-stone-200">Fokus </span>Kami
            </div>
            <div className="flex gap-5 py-3 mx-4 mt-9 text-base leading-4 text-center max-md:flex-wrap max-md:mr-2.5">
              <div className="flex-1  my-auto">
                Memfasilitasi transaksi sumber daya antara produsen bahan baku
                sampah dan pengelola sampah
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
              />
              <div className="flex-1 my-auto">
                Memperkuat integrasi antara produsen dan tempat pengelolaan
                sampah
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
              />
              <div className="flex-1 my-auto">
                Memaksimalkan pemanfaatan limbah yang masih memiliki nilai guna
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
              />
              <div className="flex-1 my-auto">
                Mendukung upaya pemerintah dalam mengatasi masalah lingkungan
                akibat sampah{" "}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
              />
              <div className="flex-1 my-auto leading-[100%]">
                Menjadi bagian dari ekonomi sirkular
              </div>
            </div>
          </div>
          <div className="flex flex-col px-20 py-12 w-full bg-[#D9D9D9] text-emerald-950 max-md:px-5 max-md:max-w-full">
            <div className="self-center text-4xl font-extrabold leading-10">
              <span className=" text-emerald-950">Visi </span>Kami
            </div>
            <div className="mt-12 text-2xl leading-6 text-center max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
              &quot;EcoSwap berkomitmen untuk menjadi pionir dalam memperkuat
              siklus ekonomi sirkular dengan menghubungkan produsen bahan baku
              sampah dengan pengelola sampah untuk memaksimalkan pemanfaatan
              sampah sebagai sumber daya berbasis teknologi yang berharga&quot;{" "}
            </div>
          </div>
          <div className="flex flex-col justify-center w-full text-2xl leading-6 text-white bg-white max-md:max-w-full" />
        </div>
        <section className="px-20 py-12 w-full bg-[#EEF0E5] max-md:px-5 max-md:max-w-full">
          <div className="self-stretch px-20 py-12 max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch text-2xl leading-6 text-center text-black max-md:mt-10 max-md:max-w-full">
                  <div className="self-center text-4xl font-extrabold leading-10">
                    <span className=" text-emerald-950">Misi Kami</span>
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/533d64457781e2f27d666e1e2b1a53b6782afd25644c37a159dd1f6e04f32dc2?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="mt-3 w-full shadow-md aspect-[2.17] max-md:max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch text-base leading-4 text-neutral-800 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-3 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="max-md:max-w-full text-base">
                      Menyediakan platform online yang mudah digunakan dan
                      transparan bagi produsen sampah dan pengelola sampah untuk
                      bertukar sumber daya secara efisien dan efektif.{" "}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="max-md:max-w-full text-base">
                      Mendorong inovasi dan penerapan teknologi untuk
                      meningkatkan kualitas dan nilai limbah yang dihasilkan.{" "}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="max-md:max-w-full text-base">
                      Mengadakan pelatihan dan lokakarya untuk produsen bahan
                      baku limbah dengan pengelola limbah untuk memperkenalkan
                      praktik-praktik terbaru dalam pengelolaan limbah yang
                      ramah lingkungan.{" "}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="max-md:max-w-full text-base">
                      Menjadi mitra strategis bagi pemerintah dan pihak-pihak
                      terkait dalam mengembangkan regulasi dan kebijakan yang
                      mendukung pengembangan ekonomi sirkular dan perlindungan
                      lingkungan.{" "}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                      className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div className="max-md:max-w-full text-base">
                      Membangun jaringan dan kemitraan dengan lembaga-lembaga
                      lain, lembaga penelitian, dan perusahaan-perusahaan yang
                      berkomitmen terhadap pembangunan berkelanjutan.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch px-20 py-12 bg-green-950 max-md:px-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-stone-200 max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl leading-6 max-md:max-w-full">
                  <span className="font-extrabold">Tentang Kami</span>
                </div>
                <div className="mt-6 text-base leading-4 max-md:max-w-full">
                  Didirikan pada tahun 2024, EcoSwap adalah platform digital
                  yang memfasilitasi pertukaran sampah antara produsen sampah
                  dan pengelola sampah. EcoSwap bertindak sebagai platform bagi
                  produsen limbah, termasuk pabrik-pabrik besar, usaha kecil dan
                  menengah, dan entitas lain yang menghasilkan limbah dalam
                  proses produksinya, untuk berinteraksi dengan pengelola limbah
                  yang tertarik untuk menggunakannya kembali.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-center text-base font-semibold leading-4 text-center text-stone-200 max-md:mt-6">
                      <div className="flex flex-col">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4876b90fc65342d5fd17454f02f6cee37635f87c7dc7b8e8d0667237ada21?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="self-center aspect-[1.06] w-[53px]"
                        />
                        <div className="mt-6">
                          Seluruh Cakupan
                          <br />
                          Indonesia
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3180e65d9ba59c4df698d7180e97bc104e4cde2b1bcaa984080c6bb0fbc8554f?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="self-center aspect-[1.06] w-[53px]"
                        />
                        <div className="mt-6">
                          20,000 Pengguna
                          <br />
                          Aktif
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex grow gap-5 justify-center text-base leading-4 text-center text-stone-200 max-md:mt-6">
                      <div className="flex flex-col font-semibold">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e03f05090a21dbbfef375923231aaeb1270ea40c4ec72f6fdf559934843bb1a?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="self-center aspect-[1.08] w-[54px]"
                        />
                        <div className="mt-6">
                          500 Ton Sampah
                          <br />
                          Berhasil Dijual
                        </div>
                      </div>
                      <div className="flex flex-col font-bold">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cb0f00921034d903428ffede97e40db2b2e972d85489fe7e09f4650cc7b9ab?apiKey=81aa3398288b425cae501e07d8c56af5&"
                          className="self-center aspect-[1.06] w-[53px]"
                        />
                        <div className="mt-6">
                          50,000 Transaksi
                          <br />
                          Berhasil Dilakukan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-20 py-12 max-md:px-5 bg-[#EEF0E5]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch leading-4 text-neutral-800 max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl leading-6 text-emerald-950 max-md:max-w-full font-extrabold">
                  Peran Kami
                  <br />
                  <span className="">Terhadap Lingkungan</span>
                </div>
                <div className="flex gap-3 mt-5 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <div className="max-md:max-w-full text-emerald-950 text-base">
                    <b>Memanfaatkan Limbah Secara Maksimal</b>
                    <br />
                    <span className="">
                      EcoSwap sebagai media pemanfaatan sampah yang memiliki
                      nilai tambah dan nilai guna bagi masyarakat.
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-5 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <div className="max-md:max-w-full text-base">
                    <b>Mengurangi Limbah</b>
                    <br />
                    <span className="">
                      EcoSwap sebagai aplikasi yang memfasilitasi jual beli
                      sampah mampu memaksimalkan pemanfaatan penggunaan sampah
                      antara penghasil dan pengelola sampah.
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-5 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68f799e5bcdff2eae19722ef8ed174f626b9f3c40801060d9c08fb144ff6295?apiKey=81aa3398288b425cae501e07d8c56af5&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  <div className="max-md:max-w-full text-base">
                    <b>Bentuk Promosi Daur Ulang Sampah</b>
                    <br />
                    <span className="">
                      EcoSwap sebagai aplikasi jual beli sampah memberikan
                      kesadaran akan program daur ulang dan mendukung program
                      lingkungan pemerintah.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&"
                className="grow self-stretch w-full shadow-lg aspect-[2.33] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <section className="flex flex-col self-stretch px-20 py-12 max-md:px-5 bg-[#EEF0E5]">
          <h2 className="mx-4 text-2xl font-semibold leading-6 text-green-950 max-md:mr-2.5 max-md:max-w-full">
            Apa yang mereka katakan tentang EcoSwap?
          </h2>
          <div className="mx-4 mt-6 bg-stone-200 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 p-6 w-full text-base leading-4 rounded-xl bg-[#DFE4DF] text-green-950 max-md:flex-wrap max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ccc2f79a591b2f79dd2cd4c7c335976d582d4fdb149b07a40e1241caabcc99?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    alt="Teresia Amelia profile picture"
                    className="shrink-0 self-start w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <h3 className="text-2xl max-md:max-w-full">
                      <b>Teresia Amelia</b>
                    </h3>
                    <p className="mt-0 max-md:max-w-full">The Ratia Company</p>
                    <blockquote className="mt-3 leading-4 max-md:max-w-full">
                      "Aplikasi ini memberikan pemanfaatan yang baik terhadap
                      limbah perusahaan saya melalui proses transaksi, sehingga
                      limbah tidak terbuang sia-sia, great job!!!"
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 p-6 w-full text-base leading-4 rounded-xl bg-[#DFE4DF] text-neutral-800 max-md:flex-wrap max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db3268769c524e17942bc717caf7a2b930b0ab903bdd8e33cf8a466e318fb265?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    alt="Jennifer Tandy profile picture"
                    className="shrink-0 self-start w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <h3 className="text-2xl max-md:max-w-full">
                      <b>Jennifer Tandy</b>
                    </h3>
                    <p className="mt-0 max-md:max-w-full">The Jen'sPreneur</p>
                    <blockquote className="mt-3 leading-4 max-md:max-w-full">
                      "Aplikasi ini memberikan pemanfaatan yang baik terhadap
                      limbah perusahaan saya melalui proses transaksi, sehingga
                      limbah tidak terbuang sia-sia, great job!!!"
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 p-6 w-full text-base leading-4 rounded-xl bg-[#DFE4DF] text-neutral-800 max-md:flex-wrap max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe1cb7b70da33c917d54ca6dd7fca715e05751b83ba5179196a4adf792210065?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                    alt="Leo Franks profile picture"
                    className="shrink-0 self-start w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1 max-md:max-w-full">
                    <h3 className="text-2xl max-md:max-w-full">
                      <b>Leo Franks</b>
                    </h3>
                    <p className="mt-3 max-md:max-w-full">Frank #1 Industry</p>
                    <blockquote className="mt-0 leading-4 max-md:max-w-full">
                      "Aplikasi ini memberikan pemanfaatan yang baik terhadap
                      limbah perusahaan saya melalui proses transaksi, sehingga
                      limbah tidak terbuang sia-sia, great job!!!"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center self-stretch text-2xl leading-6 text-white bg-white">
          <div className="flex overflow-hidden relative flex-col items-center self-stretch p-20 text-2xl leading-6 text-white min-h-[355px] max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative mt-4 leading-6 text-center max-md:max-w-full">
              “Ancaman terbesar bagi planet kita adalah keyakinan bahwa ada
              orang lain yang akan menyelamatkannya.&quot; - Robert Swan
            </div>
            <div className="relative mt-6 text-base">
              Mari menjadi bagian dari perubahan
            </div>
            <div className="relative justify-center px-6 py-3 mt-6 rounded-md bg-stone-200 text-neutral-800 max-md:px-5">
              Mulai <span className="font-semibold">SWAPPING</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center self-stretch px-20 py-12 bg-[#D9D9D9]  max-md:px-5">
          <header className="flex gap-3 py-6 mx-4 leading-[100%] text-neutral-800 max-md:flex-wrap max-md:mr-2.5">
            <h2 className="text-2xl font-semibold">Rekomendasi EcoDu </h2>
            <p className="text-base max-md:max-w-full mt-2">
              Memberi Anda informasi dan pengetahuan tentang sampah
            </p>
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
                Mengubah Sampah dan Minyak Jelantah Menjadi Barang Bernilai
                Ekonomis
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
                Pemerintah dengan Sekolah Dasar dalam Membangun Program Ramah
                Lingkungan
              </h3>
              <div className="mt-2 text-base max-md:max-w-full">
                Strategi untuk memanfaatkan sampah organik dari sampah...{" "}
              </div>
            </article>
          </div>
        </section>

        <footer className="flex gap-0 justify-between items-start self-stretch px-20 py-12 text-base leading-4 bg-stone-200 text-neutral-600 max-md:flex-wrap max-md:px-5">
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
      <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
    </>
  );
}
