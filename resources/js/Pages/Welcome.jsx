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
                                        className=" border-2 p-2 px-5 bg-black rounded-lg font-semibold text-gray-50 hover:bg-slate-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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
                    </nav>
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
                                <div className=" rounded-full bg-black p-2 text-gray-300">Start <b>SWAPPING</b></div>
                            </div>
                        </div>

                        <footer className="flex bg-gray-100 items-center px-2 rounded-full">
                            <img
                            src="./search.png"
                            alt="instance"
                            width={24}
                            height={24}
                            className=""
                            />
                            <input className="grow border-none bg-transparent focus:outline-none outline-0" placeholder='Trying to find something...?'/>
                        </footer>
                    </main>
                    
                </div>
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
