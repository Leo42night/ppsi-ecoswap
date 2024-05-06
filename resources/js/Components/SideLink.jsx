// Leo buat sendiri untuk SideBar: Admin,Seller
import { Link } from "@inertiajs/react";

export default function SideLink({
  active = false,
  // className = "",
  image = '',
  judul = '',
  className = '',
  ...props
}) {
  return (
    <Link
      // tempat href
      {...props} 
      className={
        "flex gap-3 px-6 py-3 mt-6 max-md:px-5 rounded-lg box-content hover:bg-slate-50/50" +
        (active
          ? "border-indigo-400 text-gray-900 text-lg font-bold focus:border-indigo-700 bg-slate-50/75"
          : "")
        + className
      }
    >
      <div className={"shrink-0 w-0.5 h-6 rounded-md bg-black" + (active?" inline":" hidden")}></div>
        <img
          loading="lazy"
          src={image}
          className="shrink-0 w-6"
        />
        <div className="my-auto">{judul}</div>
    </Link>
  );
}
