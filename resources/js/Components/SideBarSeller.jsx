import SideLink from "@/Components/SideLink";
export default function SideBarSeller({ user }) {
  return (
    <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
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
        <SideLink
          href={route("seller.dashboard")}
          active={route().current("seller.dashboard")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5ec5c2df37ea96c188ea2b6ad88b22eb37db9ddf6766e15ad15848d8b1c6e3?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="Dashboard"
        />
        <SideLink
          href={route("seller.tambah")}
          active={route().current("seller.tambah")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/f346db9e30cdff7bbee120319d025cb710273ec1f4afa0dca81990a7d9c853ad?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="Tambah Produk"
        />
        <SideLink
          href={route("seller.daftar")}
          active={route().current("seller.daftar")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/22fb128bd5bdb3f5b2c93d759fff54d43678537018dc149905dec036abef49b4?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="Daftar Produk"
        />
        <SideLink
          href={route("seller.pengiriman")}
          active={route().current("seller.pengiriman")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/2b6f797bd2bdc201b884c9dec56a53f955d841cc94183a1191851dfb13de311a?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="Pengiriman"
        />
        <SideLink
          href={route("seller.ecochat")}
          active={route().current("seller.ecochat")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/184cc88ace9a940676cd478eeaa19397ae963d34809097a7ff8b62494e21c5a2?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="EcoChat"
        />
        {/* <SideLink
          href={route("seller.ecoroom")}
          active={route().current("seller.ecoroom")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/46f830c21c383ee12a0e972c18a76c0a6b43807ad1732bf06f46a094152a1251?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="EcoRoom"
        /> */}
        <SideLink
          href={route("seller.ulasan")}
          active={route().current("seller.ulasan")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/894388a493655926e5b88e7d19c478ed4cb12e2a7467306cbbd3cb7466fef956?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="Ulasan Pembeli"
        />
        <SideLink
          href={route("seller.setting")}
          active={route().current("seller.setting")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/25a8629650582e540d21d4f4b35cc750e9da4d6e52537db339e9e88dcc833ebb?apiKey=81aa3398288b425cae501e07d8c56af5&"
          judul="Setting"
        />
      </div>
    </div>
  );
}
