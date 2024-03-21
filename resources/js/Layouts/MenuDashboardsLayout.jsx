
function Header() {
    return (
        <header className="flex gap-5 justify-between p-12 w-full text-base tracking-tighter leading-4 text-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/318120a02fad09e99b5cfe268592cb9ddb3e08bdaf0ebc7b669c70260ecd22bc?apiKey=937261aeaab2482b817691a974988cbc&"
                    alt="EcoSwap logo"
                    className="shrink-0 aspect-[0.72] w-[46px]"
                />
                <div className="my-auto">
                    Eco<span className="font-bold">Swap</span>
                </div>
            </div>
            <nav className="flex gap-5 justify-between py-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div>EcoPost</div>
                <div>EcoDu</div>
                <div>EcoDule</div>
            </nav>
            <div className="flex gap-5 justify-between">
                <div className="justify-center py-6">Seller Dashboard</div>
                <div className="justify-center px-6 py-3 my-auto whitespace-nowrap border-2 border-solid border-neutral-800 rounded-[42px] max-md:px-5">
                    Logout
                </div>
            </div>
        </header>
    );
}
function UserProfile() {
    return (
      <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
        <div className="flex grow justify-center items-center self-stretch px-16 py-8 w-full text-base leading-4 rounded-xl bg-neutral-700 text-stone-200 max-md:px-5 max-md:mt-9 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[324px]">
            <div className="flex gap-2.5 self-stretch text-4xl font-bold">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a46682e92aced11c529c5a44dfa1b95faea39468739820dd3c3a17bb491cc8b?apiKey=937261aeaab2482b817691a974988cbc&"
                alt="User avatar"
                className="shrink-0 w-16 aspect-square"
              />
              <div className="my-auto">Hello, Amelia</div>
            </div>
            <div className="mt-3 tracking-tighter">ameliapark@gmail.com</div>
            <div className="mt-3 tracking-tighter">
              Review your personal activity here
            </div>
            <div className="justify-center p-3 mt-3 tracking-tighter rounded-xl border-2 border-solid border-stone-200">
              Edit Profile
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function UserBalance() {
    return (
      <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
        <div className="grow self-stretch pt-12 pr-6 pb-6 pl-12 w-full rounded-xl bg-neutral-800 max-md:px-5 max-md:mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[87%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col font-bold leading-[100%] text-stone-200 max-md:mt-10">
                <div className="justify-center text-4xl">Saldo Anda</div>
                <div className="flex flex-col mt-6">
                  <div className="text-4xl">Rp 1.000.000</div>
                  <div className="mt-3 text-base tracking-tighter">+4.2%</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[13%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/626cbdeff12c7e80cd7b8cb73762fd889b87d99613f7b57e9f5c8bdeab7a0692?apiKey=937261aeaab2482b817691a974988cbc&"
                alt="Balance icon"
                className="shrink-0 mt-28 w-12 aspect-square max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function TotalProducts() {
    return (
      <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow self-stretch pt-12 pr-3.5 pb-5 pl-12 w-full text-4xl font-bold leading-10 rounded-xl bg-zinc-400 text-neutral-800 max-md:pl-5 max-md:mt-9 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="justify-center max-md:pr-5 max-md:max-w-full">
              Total Barang Jualan
            </div>
            <div className="justify-center self-start mt-6">15 Produk</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e169702e9c7f729aa6c49c4a09ed4d23de1514a8940c9c7ee53e31669704ae1b?apiKey=937261aeaab2482b817691a974988cbc&"
            alt="Products icon"
            className="self-end mt-4 w-12 aspect-square"
          />
        </div>
      </div>
    );
  }
  
  function PerformanceMetric({ icon, title, value, description }) {
    return (
      <div className="flex flex-col grow leading-[100%] text-neutral-800 max-md:mt-10">
        <div className="flex gap-3 pr-10 text-base tracking-tighter whitespace-nowrap max-md:pr-5">
          <div className="my-auto">{title}</div>
          <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className="shrink-0 w-6 aspect-square fill-stone-200"
          />
        </div>
        <div className="flex flex-col mt-6">
          <div className="text-4xl font-bold">{value}</div>
          <div className="mt-3 text-base tracking-tighter">{description}</div>
        </div>
      </div>
    );
  }
  
  function PerformanceSection() {
    const metrics = [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?apiKey=937261aeaab2482b817691a974988cbc&",
        title: "Pengunjung",
        value: "+12",
        description: "Lebih banyak orang mengunjungi anda!",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?apiKey=937261aeaab2482b817691a974988cbc&",
        title: "Terjual",
        value: "12.5 Kg",
        description: "Jumlah sampah terjual",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?apiKey=937261aeaab2482b817691a974988cbc&",
        title: "Penjualan Diselesaikan",
        value: "15 Transaksi",
        description: "8 dari 10 Pesanan Diproses",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/be33028afc72b7defa18d67f836405691db796be12c903f1169b5d4904fa2091?apiKey=937261aeaab2482b817691a974988cbc&",
      },
    ];
  
    return (
      <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow self-stretch p-12 w-full rounded-xl bg-zinc-400 max-md:px-5 max-md:mt-9 max-md:max-w-full">
          <div className="flex gap-5 justify-between self-start leading-[100%] max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2796bff258f9645def434c3060885b2fc748618418bb9a430ca81a42be7e6a01?apiKey=937261aeaab2482b817691a974988cbc&"
              alt="Performance icon"
              className="shrink-0 w-10 aspect-square"
            />
            <div className="text-4xl font-bold text-neutral-700">
              Performa Anda
            </div>
            <div className="my-auto text-base tracking-tighter text-neutral-800 max-md:max-w-full">
              Kelola performa toko anda untuk mendapatkan keuntungan lebih
            </div>
          </div>
          <div className="justify-between mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index === 0 ? "w-[41%]" : index === 1 ? "ml-5 w-[28%]" : "ml-5 w-[31%]"
                  } max-md:ml-0 max-md:w-full`}
                >
                  <PerformanceMetric {...metric} />
                  {metric.image && (
                    <img
                      loading="lazy"
                      src={metric.image}
                      alt="Completed orders icon"
                      className="shrink-0 w-16 aspect-square"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function FeedbackSection() {
    return (
      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow self-stretch p-12 w-full rounded-xl bg-zinc-400 max-md:px-5 max-md:mt-9 max-md:max-w-full">
          <div className="flex gap-5 justify-between text-4xl font-bold leading-10 text-neutral-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a264959575f98a2555026108e65f6d6b08f0edd0b35291c65948fb5da62f61cf?apiKey=937261aeaab2482b817691a974988cbc&"
              alt="Feedback icon"
              className="shrink-0 w-10 aspect-square"
            />
            <div>Feedback Toko</div>
          </div>
          <div className="flex gap-5 mt-6 text-neutral-800">
            <div className="flex flex-col flex-1">
              <div className="flex gap-3 pr-7 text-base tracking-tighter leading-4 whitespace-nowrap max-md:pr-5">
                <div className="my-auto">Positif</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4578871eb7c550c275fa1a2f7154d19b55197bd943321f218a3102edc866709b?apiKey=937261aeaab2482b817691a974988cbc&"
                  alt="Positive feedback icon"
                  className="shrink-0 w-6 aspect-square fill-stone-200"
                />
              </div>
              <div className="flex flex-col mt-6">
                <div className="text-4xl font-bold leading-10">13</div>
                <div className="mt-3 text-base tracking-tighter leading-4">
                  Respon Baik dari pelanggan
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 self-start leading-[100%]">
              <div className="flex gap-3 pr-5 text-base tracking-tighter whitespace-nowrap max-md:pr-5">
                <div className="my-auto">Negatif</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c71ec3c222b0393b1a93d5706a69817358580ff48227137841267398b026581?apiKey=937261aeaab2482b817691a974988cbc&"
                  alt="Negative feedback icon"
                  className="shrink-0 w-6 aspect-square fill-stone-200"
                />
              </div>
              <div className="flex flex-col mt-6">
                <div className="text-4xl font-bold">2</div>
                <div className="mt-3 text-base tracking-tighter">
                  Kritik dan Saran
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function TransactionSummary() {
    const summaryItems = [
      { label: "Pesanan Baru", value: 2 },
      { label: "Pesanan Diproses", value: 8 },
      { label: "Pesanan Dibatalkan", value: 0 },
    ];
  
    return (
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow self-stretch p-12 w-full rounded-xl bg-zinc-400 leading-[100%] max-md:px-5 max-md:mt-9 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/767a935c71b6c5ca1e90a1ea9c899b29527ecccfc28f57cc7b3ff59545d72f54?apiKey=937261aeaab2482b817691a974988cbc&"
              alt="Transaction icon"
              className="shrink-0 w-10 aspect-square"
            />
            <div className="text-4xl font-bold text-neutral-700">
              Ringkasan Transaksi
            </div>
            <div className="my-auto text-base tracking-tighter text-neutral-800">
              Lihat transaksi terkini toko anda
            </div>
          </div>
          <div className="flex gap-5 mt-6 text-black max-md:flex-wrap">
            {summaryItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col flex-1 justify-center px-20 max-md:px-5"
              >
                <div className="text-base tracking-tighter">{item.label}</div>
                <div className="self-center mt-3 text-2xl font-bold">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}