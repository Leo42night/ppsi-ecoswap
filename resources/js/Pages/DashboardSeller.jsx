import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
        >
            <Head title="Dashboard" />
            
            <div className="py-12  z-10 overflow-visible">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-green-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-12 text-white font-bold">Hello, Amelia</div>
                    </div>
                </div>
                <div className="py-12  z-10 overflow-visible">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-green-950 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-12 text-white font-bold">Saldo Anda </div>
                    </div>
                </div>
                <div className="py-12  z-10 overflow-visible">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-[#B6C4B6] overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-12 text-green-900 font-bold">Total Barang Jualan 15 Produk</div>
                    </div>
                </div>
            </div>
            </div>
            </div>

            
            
        </AuthenticatedLayout>
    );
}
