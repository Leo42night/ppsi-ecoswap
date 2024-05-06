import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function DaftarSeller() {
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     email: '',
    //     password: '',
    //     remember: false,
    // });

    // useEffect(() => {
    //     return () => {
    //         reset('password');
    //     };
    // }, []);

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route('login'));
    // };

    return (
        <GuestLayout>
            <Head title="Daftar Seller" />

            {/* {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>} */}

            <form>
                {/* <div>
                    <InputLabel htmlFor="email" value="Login to your swap account!" />
                </div> */}
                {/* <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div> */}

                <div className="mt-4">
                    <InputLabel htmlFor="perusahaan" value="masukkan nama perusahaan" />

                    <TextInput
                        id="perusahaan"
                        type="text"
                        name="perusahaan"
                        // value={data.password}
                        className="mt-1 block w-full"
                        // autoComplete="current-password"
                        // onChange={(e) => setData('password', e.target.value)}
                    />

                    {/* <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="block mt-4">
                    {/* <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label> */}
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                      )} */}
                    
                    <a type="button" href="/seller/dashboard" className="ms-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                        Daftar
                    </a>

                    {/* <button href={route('/')} className="ms-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                        Daftar
                    </button> */}
                </div>
                {/* <hr color='black' className='my-3'/>
                <div className='flex border-2 rounded-md p-2 border-gray-400 gap-3 mb-2'>
                    <img src="/google.png" alt="google" />
                    <span>Continue with Google</span>
                </div>
                <div className='flex border-2 rounded-md p-2 border-gray-400 gap-3 mb-2'>
                    <img src="/facebook.png" alt="google" />
                    <span>Continue with Facebook</span>
                </div>
                <div className='flex justify-center'>
                    <p>Doesn't have an account?</p>
                    <Link className='ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline' 
                    href={route('register')}>
                    Register Now
                    </Link>
                </div> */}
            </form>
        </GuestLayout>
    );
}
