import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import * as React from "react";
import SideBarAdmin from "@/Components/SideBarAdmin";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm";

export default function KelolaAkun({ auth, mustVerifyEmail, status }) {
  const [editAkun, setEditAkun] = React.useState(false);
  return (
    <AdminLayout user={auth.user}>
      <Head title="Kelola Akun" />
      <div className="flex flex-col justify-center bg-[#EEF0E5]">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SideBarAdmin user={auth.user}/>
            <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start p-12 w-full bg-[#EEF0E5] max-md:px-5 max-md:max-w-full">
                <div className="text-2xl font-semibold leading-6 text-right text-black max-md:max-w-full">
                  Profil
                </div>
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg mt-5">
                  <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                    alamat='admin.kelola-akun'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
