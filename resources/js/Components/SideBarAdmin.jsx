// komponen yang Leo buat sendiri
import SideLink from "@/Components/SideLink";
export default function SideBarAdmin({user}) {
  return (
    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-6 py-12 w-full text-base leading-4 bg-[#B6C4B6] text-neutral-700 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col p-6 mx-6 font-semibold text-center rounded-md bg-[#304D30] text-stone-200 max-md:px-5 max-md:mx-2.5">
          <div className="text-2xl">Admin</div>
          <img
            loading="lazy"
            alt="Admin-Avatar"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb5120b6853d258cda43dbfff04bd577869c4ecb588940896527901e948eb60b?apiKey=c714479f3793460aa22cf39b4fb6c59a&"
            className="self-center mt-3 w-16 aspect-square rounded-full"
          />
          <div className="mt-3">{user.name}</div>
          <div className="mt-3">{user.email}</div>
        </div>
        <SideLink
          href={route("admin.dashboard")}
          active={route().current("admin.dashboard")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/ea79f5729661446b6f2c0bac78dcfc06fad64dc31a38312a94135a753fc03f72?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          judul="Dashboard"
        />
        <SideLink
          href={route("admin.kelola-akun")}
          active={route().current("admin.kelola-akun")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8b3fbb1318578db2f4720be6cc52a773b9bc06e6317631a16893db0fc3aee9?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          judul="Kelola Akun"
        />
        <SideLink
          href={route("admin.data-pembeli")}
          active={route().current("admin.data-pembeli")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/d0dddfbb41ede7096e3476f9f65f39131bd511aa2ca6b4755f6ad15f859ff116?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          judul="Data Pembeli"
        />
        <SideLink
          href={route("admin.data-penjual")}
          active={route().current("admin.data-penjual")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/e21cd2a5567e5a7e1682685569d5c616361b41be323218cb27ec2ab50988457a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          judul="Data Penjual"
        />
        <SideLink
          href={route("admin.kelola-ecodu")}
          active={route().current("admin.kelola-ecodu")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7df35549ebced315d4cd680f31cdc6ea357006de0895dc2acf776a3e12ce0a?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          judul="Kelola EcoDu"
        />
        <SideLink
          href={route("admin.kelola-harga")}
          active={route().current("admin.kelola-harga")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/dc39f394c0180402bcfd7e34330714000c3231162e0e1668820c6b7dd4ac30e3?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          judul="Kelola Harga"
        />
        <SideLink
          method="post"
          as="button"
          href={route("logout")}
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/cf1c88cbdb4fb172208cbaa546630fc50863cb9b39ae36d440a7b3dd55539694?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
          judul="Logout"
          className="flex justify-center bg-red-300"
        />
      </div>
    </div>
  );
}
