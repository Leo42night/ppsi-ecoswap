import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Landing Page" />
            <img src="/sampah.png" alt="Kumpulan Sampah" className="fixed h-screen object-cover md:size-full md:object-fill z-0" />
            <div className="relative min-h-screen bg-gradient-to-t from-muted to-transparent pt-5" style={{fontFamily: `sans-serif`}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
                    <nav className="bg-transparent flex flex-wrap justify-between items-center">
                        <div className="flex items-center w-full justify-between md:w-auto">
                            <div className="flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="w-auto" />
                                </Link>
                                <p className="pl-4 font-bold shrink">EcoSwap</p>
                            </div>
                            <div className="text-wrap space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                WELCOME, Ready to start a SWAPPING ?
                            </div>
                        </div>
                        <div className="flex md:gap-10 mx-4 gap-2">
                            <div className="p-2 border-2 border-black rounded-3xl">Home</div>
                            <div className="p-2 iem">About</div>
                            <div className="p-2 tem">Service</div>
                            <div className="p-2 tem">Contact Us</div>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className=" rounded-full bg-emerald-950 p-2 text-white"
                                    >
                                        Log in
                                    </Link>

                                    {/* <Link
                                        href={route('register')}
                                        className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Register
                                    </Link> */}
                                </>
                            )}
                        </div>
                    </nav> <br></br>
                    <div className="flex gap-3 px-6 py-3 rounded-md bg-neutral-200 max-md:flex-wrap max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e81d3793d7f40718abcd760a5600627fbe7736a516ebf705e1b93ef68778ad27?"
        className="shrink-0 w-6 aspect-square"
      />
      <div className="my-auto max-md:max-w-full">Trying to find something</div>
    </div>
                    {/* main item */}
                    <main className='mt-10 flex flex-col h-3/4 justify-around'>
                        <div className='flex items-start gap-10 mb-20 flex-wrap md:flex-nowrap'>
                            <img
                                src="./quote.png "width =""
                                alt="quote"
                                className="w-auto lg:w-2/3 md:w-1/2"
                            />
                            <div className="text-sm flex flex-col items-start gap-2 mb-2">
                                <div className="description">
                                    &quot;EcoSwap facilitates waste management by connecting
                                    companies to sell their waste for reuse and recycling,
                                <br/>                    
         
                                    reducing landfill waste and promoting resource utilization. Our
                                    platform fosters environmental responsibility while creating
                                    economic opportunities through sustainable business
                                    practices.&quot;
                                </div>

                                <p className="text-xl font-bold">Start Swapping Now !</p>
                                <div className=" rounded-full bg-emerald-950 p-2 text-white">Start <b>SWAPPING</b></div>
                                
                            </div>
                        </div>
                    </main>
                </div><div className="flex flex-col bg-stone-200">
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
          <span className=" text-stone-200">Our </span>Focus
        </div>
        <div className="flex gap-5 py-3 mx-4 mt-9 text-base leading-4 text-center max-md:flex-wrap max-md:mr-2.5">
          <div className="flex-1">
            Facilitate resource transactions between producers of raw waste
            materials and waste managers
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
          />
          <div className="flex-1 my-auto">
            Strengthen integration between producers and waste management sites
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
          />
          <div className="flex-1 my-auto">
            Strengthen integration between producers and waste management sites
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
          />
          <div className="flex-1">
            Support the government's efforts in addressing environmental issues
            due to waste{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98606bdf036956c88a1d7dd9ac96549ba4cf1b162524ecaf32fa5d7e5b70c61?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
            className="shrink-0 w-px border border-solid aspect-[0.02] border-stone-200 stroke-[1px] stroke-stone-200"
          />
          <div className="flex-1 my-auto leading-[100%]">
            Being part of the circular economy
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 py-12 w-full bg-stone-200 text-emerald-950 max-md:px-5 max-md:max-w-full">
        <div className="self-center text-4xl font-bold leading-10">Visi</div>
        <div className="mt-12 text-2xl leading-6 text-center max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          “&quot;EcoSwap is committed to being a pioneer in strengthening the
          circular economy cycle by connecting producers of raw waste materials
          with waste managers to maximize the utilization of waste as a valuable
          technology-based resource.&quot;{" "}
        </div>
      </div>
      <div className="flex flex-col justify-center w-full text-2xl leading-6 text-white bg-white max-md:max-w-full" />
    </div>     
    <section class="px-20 py-12 w-full bg-[#B6C4B6] max-md:px-5 max-md:max-w-full">
  <div class="flex gap-5 max-md:flex-col max-md:gap-0">
    <div class="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
      <figure class="flex overflow-hidden relative flex-col grow justify-center rounded-xl shadow-lg min-h-[570px] max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40ce2a15fe45c32539c2e9d4c0cefded0bd7b70d43b70d15d0f3d9060149de35?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Mission image" class="object-cover absolute inset-0 size-full" />
        <div class="relative shrink-0 bg-black bg-opacity-30 h-[570px] max-md:max-w-full" ></div>
      </figure>
    </div>
    <div class="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
      <section class="flex flex-col self-stretch my-auto text-2xl leading-6 text-green-950 max-md:mt-10 max-md:max-w-full">
        <h2 class="text-4xl font-semibold leading-10 max-md:max-w-full">Mission</h2>
        <div class="flex gap-4 mt-6 max-md:flex-wrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8431ef2ac104401acaa2999c03e8fb62dbbbf766718b38fcb448deb422003022?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Mission icon" class="shrink-0 my-auto w-10 aspect-square" />
          <p class="max-md:max-w-full">Provide <strong>a user-friendly and transparent online platform</strong> for waste producers and waste managers to exchange resources efficiently and effectively.</p>
        </div>
        <div class="flex gap-4 mt-6 max-md:flex-wrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8431ef2ac104401acaa2999c03e8fb62dbbbf766718b38fcb448deb422003022?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Innovation icon" class="shrink-0 my-auto w-10 aspect-square" />
          <p class="max-md:max-w-full">Encourage <strong>innovation and application of technology</strong> to improve the quality and value of waste generated.</p>
        </div>
        <div class="flex gap-4 mt-6 max-md:flex-wrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cbb7170cd58508d1d8ca173d669cce445c6dfabda01cfcd63e1dd8de4f138ed?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Training icon" class="shrink-0 my-auto w-10 aspect-square" />
          <p class="max-md:max-w-full">Organize <strong>training and workshops</strong> for raw waste material producers with waste managers to introduce the latest practices in environmentally friendly waste management.</p>
        </div>
        <div class="flex gap-4 mt-6 max-md:flex-wrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cbb7170cd58508d1d8ca173d669cce445c6dfabda01cfcd63e1dd8de4f138ed?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Partnership icon" class="shrink-0 my-auto w-10 aspect-square" />
          <p class="max-md:max-w-full"><strong>Become a strategic partner for the government and related parties</strong> in developing regulations and policies that support the development of circular economy and environmental protection.</p>
        </div>
        <div class="flex gap-4 mt-6 max-md:flex-wrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8431ef2ac104401acaa2999c03e8fb62dbbbf766718b38fcb448deb422003022?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Network icon" class="shrink-0 my-auto w-10 aspect-square" />
          <p class="max-md:max-w-full">Build <strong>networks and partnerships</strong> with other institutions, research institutes, and companies committed to sustainable development.</p>
        </div>
      </section>
    </div>
  </div>
</section>

<section class="flex flex-col px-20 py-12 w-full bg-green-950 max-md:px-5 max-md:max-w-full">
  <h2 class="mx-4 text-2xl leading-6 text-center text-[#EEF0E5] max-md:mr-2.5 max-md:max-w-full">About Us</h2>
  <p class="mx-4 mt-6 text-base leading-4 text-center text-stone-200 max-md:mr-2.5 max-md:max-w-full">Established in 2024, EcoSwap is a digital platform that facilitates waste exchange between waste producers and waste managers. EcoSwap acts as a platform for waste producers, including large factories, small and medium enterprises, and other entities that generate waste in their production processes, to interact with waste managers interested in reusing them. By connecting both parties, EcoSwap aims to encourage waste reutilization and promote environmentally sustainable business practices. In a bid to raise awareness on the importance of waste management, EcoSwap also provides information and resources related to sustainable practices to its platform users.</p>
  <div class="flex justify-center items-center px-16 mx-4 mt-6 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
    <div class="max-w-full w-[1001px]">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
        <div class="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow text-2xl leading-6 text-center text-stone-200 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a454c48f80d51f01ad9c20a06156ba84395420212bb1fd4ff991ff18620a11e?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Waste icon" class="self-center aspect-[1.08] w-[69px]" />
            <p class="mt-10">500 Tons of Waste <br /> Successfully Sold</p>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow text-2xl leading-6 text-center text-stone-200 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/308fc7521ea00047536d5855a682d642cc8890eb7e739c037ef1da882c93f7b4?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Transactions icon" class="self-center aspect-[1.06] w-[68px]" />
            <p class="mt-10">50,000 Transactions <br /> Successfully Performed</p>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow text-2xl leading-6 text-center text-stone-200 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/17cd81a15b45cd0500ef4e7bf930462624d25e511694bbe7332f3bdd20355fed?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Coverage icon" class="self-center aspect-[1.06] w-[68px]" />
            <p class="mt-10">Whole Coverage <br /> Indonesia</p>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow text-2xl leading-6 text-center text-stone-200 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98906773af1d6afb6acdb4edc19f1356bcb2b0d618112681b3ebf4ff7a00ceac?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Active users icon" class="self-center aspect-[1.06] w-[68px]" />
            <p class="mt-10">20,000 Users <br /> Active</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="self-stretch px-20 py-12 bg-[#B6C4B6] max-md:px-5">
  <div class="flex gap-5 max-md:flex-col max-md:gap-0">
    <div class="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
      <div class="flex flex-col self-stretch my-auto text-2xl font-semibold leading-6 text-neutral-800 max-md:mt-10 max-md:max-w-full">
        <h2 class="text-4xl leading-10 max-md:max-w-full">
          Our Role <br /> Toward the Environment
        </h2>
        <div class="flex gap-4 mt-6 max-md:flex-wrap">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cbb7170cd58508d1d8ca173d669cce445c6dfabda01cfcd63e1dd8de4f138ed?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Making the Most of Waste icon" class="shrink-0 w-10 aspect-square" />
          <p class="my-auto max-md:max-w-full">Making the Most of Waste</p>
        </div>
        <p class="mt-3 text-base leading-4 max-md:max-w-full font-thin">
          EcoSwap as a medium for utilizing waste that has added value and use value for the community
        </p>
        <div class="flex gap-4 mt-3 max-md:flex-wrap">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cbb7170cd58508d1d8ca173d669cce445c6dfabda01cfcd63e1dd8de4f138ed?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Reducing Waste icon" class="shrink-0 w-10 aspect-square" />
          <p class="my-auto max-md:max-w-full">Reducing Waste</p>
        </div>
        <p class="mt-3 text-base leading-4 max-md:max-w-full font-thin">
          EcoSwap as an application that facilitates the buying and selling of waste is able to maximize the utilization of waste use between waste generators and managers.
        </p>
        <div class="flex gap-4 mt-3 max-md:flex-wrap">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cbb7170cd58508d1d8ca173d669cce445c6dfabda01cfcd63e1dd8de4f138ed?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Promotional Forms of Waste Recycling icon" class="shrink-0 w-10 aspect-square" />
          <p class="my-auto max-md:max-w-full">Promotional Forms of Waste Recycling</p>
        </div>
        <p class="mt-3 text-base leading-4 max-md:max-w-full font-thin">
          EcoSwap as a waste trading app provides awareness for recycling programs and supports government environmental programs
        </p>
      </div>
    </div>
    <div class="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5151af5f51418d1f710a22ac10bfd55332c0915f1510cbd3034dd4083de8dd5b?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Environment role image" class="grow w-full shadow-lg aspect-[1.75] max-md:mt-10 max-md:max-w-full" />
    </div>
  </div>
</section>
<section class="flex flex-col self-stretch px-20 py-12 max-md:px-5 bg-stone-200">
  <h2 class="mx-4 text-2xl font-semibold leading-6 text-green-950 max-md:mr-2.5 max-md:max-w-full">
    What they say about EcoSwap?
  </h2>
  <div class="mx-4 mt-6 bg-stone-200 max-md:mr-2.5 max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div class="flex grow gap-5 p-6 w-full text-base font-semibold leading-4 rounded-xl bg-[#DFE4DF] text-green-950 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ccc2f79a591b2f79dd2cd4c7c335976d582d4fdb149b07a40e1241caabcc99?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Teresia Amelia profile picture" class="shrink-0 self-start w-12 aspect-square" />
          <div class="flex flex-col flex-1 max-md:max-w-full">
            <h3 class="text-2xl max-md:max-w-full">Teresia Amelia</h3>
            <p class="mt-3 max-md:max-w-full">The Ratia Company</p>
            <blockquote class="mt-3 leading-4 max-md:max-w-full">
              "This application provides good utilization of my company's waste through the transaction process, so that waste is not wasted, great job!!!"
            </blockquote>
          </div>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div class="flex grow gap-5 p-6 w-full text-base font-semibold leading-4 rounded-xl bg-[#DFE4DF] text-neutral-800 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db3268769c524e17942bc717caf7a2b930b0ab903bdd8e33cf8a466e318fb265?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Jennifer Tandy profile picture" class="shrink-0 self-start w-12 aspect-square" />
          <div class="flex flex-col flex-1 max-md:max-w-full">
            <h3 class="text-2xl max-md:max-w-full">Jennifer Tandy</h3>
            <p class="mt-3 max-md:max-w-full">The Jen'sPreneur</p>
            <blockquote class="mt-3 leading-4 max-md:max-w-full">
              "With this website, I was able to find orange peel waste that can be used in my business. This makes it easy for me to use in my business"
            </blockquote>
          </div>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div class="flex grow gap-5 p-6 w-full text-base font-semibold leading-4 rounded-xl bg-[#DFE4DF] text-neutral-800 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe1cb7b70da33c917d54ca6dd7fca715e05751b83ba5179196a4adf792210065?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Leo Franks profile picture" class="shrink-0 self-start w-12 aspect-square" />
          <div class="flex flex-col flex-1 max-md:max-w-full">
            <h3 class="text-2xl max-md:max-w-full">Leo Franks</h3>
            <p class="mt-3 max-md:max-w-full">Frank #1 Industry</p>
            <blockquote class="mt-3 leading-4 max-md:max-w-full">
              "This platform helps me to sell industrial waste that has a very large quantity, which certainly provides benefits for me and the buyer who is looking for waste"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="flex flex-col justify-center self-stretch text-2xl leading-6 text-white bg-white">
  <div class="flex overflow-hidden relative flex-col items-start p-20 w-full min-h-[577px] max-md:px-5 max-md:max-w-full">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/72230ba1640d8d446af63d1b601afdd125883c21438cbe8c967578e307c3fd58?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Background image" class="object-cover absolute inset-0 size-full" />
    <blockquote class="relative mt-28 ml-36 leading-6 w-[426px] max-md:mt-10 max-md:max-w-full">
      The greatest threat to our planet is the belief that someone else will save it.&quot; - Robert Swan
    </blockquote>
    <p class="relative mt-6 ml-36 text-base max-md:max-w-full">
      Let's be part of the change
    </p>
    <button class="relative justify-center px-6 py-3 mt-6 mb-20 ml-36 rounded-xl bg-stone-200 text-neutral-800 max-md:px-5 max-md:mb-10 max-md:max-w-full">
      Start <span class="font-semibold">SWAPPING</span>
    </button>
  </div>
</section>

<section class="flex flex-col justify-center self-stretch px-20 py-12 bg-[#DFE4DF] max-md:px-5">
  <header class="flex gap-3 py-6 mx-4 leading-[100%] text-neutral-800 max-md:flex-wrap max-md:mr-2.5">
    <h2 class="text-2xl font-semibold">EcoDu Recommendation</h2>
    <p class="text-base max-md:max-w-full">Giving you information and knowledge about waste</p>
  </header>
  <div class="flex overflow-x-auto gap-5 justify-end items-start mx-4 max-w-full text-xl font-bold text-black w-[1728px] max-md:flex-wrap max-md:mr-2.5">
    <article class="flex flex-col self-stretch pb-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a94d1f9dfae3abedf13d9ee93425692d7af4c6090a97cb5c161ac109dcaacb?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Utilization of Organic Waste from Household Garbage" class="w-full aspect-[1.96] max-md:max-w-full" />
      <h3 class="mt-6 mr-8 max-md:mr-2.5">Utilization of Organic Waste from Household Garbage</h3>
    </article>
    <article class="flex flex-col self-stretch pb-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/478c451b7e3a979fe21759b0863793220c0661fb0be4d18856ed72fa4dcb5f27?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Turning Waste and Used Cooking Oil into Economically Valuable Goods" class="w-full aspect-[1.96] max-md:max-w-full" />
      <h3 class="mt-6 max-md:mr-2.5 max-md:max-w-full">Turning Waste and Used Cooking Oil into Economically Valuable Goods</h3>
    </article>
    <article class="flex flex-col pb-4 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f889eac93ae53373d5b92c86f60ec75a42fe9c61052bb3d476b7a457b8a0b981?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Innovation in Hazardous Waste Management for a Cleaner Environment" class="w-full aspect-[1.96] max-md:max-w-full" />
      <h3 class="mt-6 max-md:max-w-full">Innovation in Hazardous Waste Management for a Cleaner Environment</h3>
    </article>
    <article class="flex flex-col pb-4 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dfd77295f3c054d3dede06e7aeea4bd33560bc82f5207631bc32891e1a311a1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Environmental Awareness Through Eco-School Program" class="w-full aspect-[1.96] max-md:max-w-full" />
      <h3 class="mt-6 max-md:max-w-full">Environmental Awareness Through Eco-School Program</h3>
    </article>
    <article class="flex z-10 flex-col pb-4 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d954fb738ba896e48d23139fb1501e7b5e45d2f2cf790c7cee3dad1b90e5d6d?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="Government Cooperation with Elementary Schools in Building an Eco-Friendly Program" class="w-full aspect-[1.96] max-md:mr-2.5 max-md:max-w-full" />
      <h3 class="mt-6 max-md:max-w-full">Government Cooperation with Elementary Schools in Building an Eco-Friendly Program</h3>
    </article>
  </div>
</section>

<footer class="flex justify-center items-center self-stretch px-16 py-12 text-base leading-4 text-black bg-stone-200 max-md:px-5">
  <div class="flex gap-5 justify-between">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac7936b2bdc2896e30172d6dce8c5f838f18e5944487145b159afaa5f21b63eb?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&" alt="EcoSwap logo" class="shrink-0 aspect-[0.74] w-[47px]" />
    <p class="my-auto">EcoSwap Copyright 2024</p>
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
