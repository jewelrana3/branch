// const path = [
//   { path: "/", name: "Dashboard" },
//   { path: "/user", name: "User" },
//   { path: "/category", name: "Category" },
//   { path: "/subscriber", name: "Subscriber" },
//   { path: "/faq", name: "FAQ" },

//   { path: "/terms-condition", name: "Terms & Condition" },
//   { path: "/about", name: "About Us" },
//   { path: "/privacy-policy", name: "Privacy Policy" },
//   { path: "/notifications", name: "Notifications" },
//   { path: "/profile", name: "Profile" },
//   { path: "/edit-profile", name: "Edit Profile" },
//   { path: "/change-password", name: "Change Password" },
// ];

// Header.tsx
import { RiderRequest } from "@/headerAllComponent/RiderRequest";
import { Users, Mail, Bell } from "lucide-react";
import { useState } from "react";
import { Notification } from "@/headerAllComponent/Notifications";

export function Header() {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);
  const role = localStorage.getItem("role");
  return (
    <>
      <header className="flex items-center justify-end gap-6 p-4 bg-white shadow-sm">
        {/* Icons */}
        <div className="flex items-center gap-6 cursor-pointer">
          {/* Users Icon with badge */}
          {role !== "hub" && (
            <div className="relative">
              <Users
                className="w-6 h-6 text-orange-600"
                onClick={() => setOpen(true)}
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                9
              </span>
            </div>
          )}

          {/* Mail Icon with badge */}
          {role !== "hub" && (
            <div className="relative">
              <Mail className="w-6 h-6 text-cyan-800" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                9
              </span>
            </div>
          )}

          {/* Bell Icon with badge */}
          <div className="relative">
            <Bell
              className="w-6 h-6 text-green-700"
              onClick={() => setNotification(true)}
            />

            <span className="absolute -top-2 -right-2 border border-white bg-green-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-1">
          <img
            src="https://i.pravatar.cc/40" // Replace with real user image
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-cyan-800 leading-none">
              Frankallan
            </p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </header>
      {/* modal open */}
      {open && <RiderRequest isOpen={open} onClose={() => setOpen(false)} />}
      {notification && (
        <Notification
          isOpen={notification}
          onClose={() => setNotification(false)}
        />
      )}
    </>
  );
}
