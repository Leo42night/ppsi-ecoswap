import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            
            <div className="py-12  z-10 overflow-visible">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Anda Telah Login! selamat datang Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil dolore accusantium, earum quae nisi possimus nam libero ullam odio suscipit, temporibus deserunt. Ut aspernatur mollitia maiores labore numquam obcaecati.</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
