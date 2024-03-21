import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from './Header'; // Import Header component
import UserProfile from './UserProfile'; // Import UserProfile component
import UserBalance from './UserBalance'; // Import UserBalance component
import TotalProducts from './TotalProducts'; // Import TotalProducts component
import PerformanceSection from './PerformanceSection'; // Import PerformanceSection component
import FeedbackSection from './FeedbackSection'; // Import FeedbackSection component
import TransactionSummary from './TransactionSummary'; // Import TransactionSummary component

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* Render Header component */}
                        <Header />
                        
                        {/* Render main content */}
                        <div className="p-6 text-gray-900">
                            {/* Render user profile */}
                            <div className="flex flex-wrap">
                                <UserProfile />
                                <UserBalance />
                                <TotalProducts />
                            </div>
                            
                            {/* Render performance and feedback sections */}
                            <div className="flex flex-wrap mt-8">
                                <PerformanceSection />
                                <FeedbackSection />
                            </div>
                            
                            {/* Render transaction summary */}
                            <TransactionSummary />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
