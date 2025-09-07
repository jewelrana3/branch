import {
  LayoutDashboard,
  ClipboardList,
  Bike,
  // MessageCircle,
  User,
  HandPlatter,
  Logs,
  ShoppingBag,
  MessageCircleMore,
  MapPinCheck,
  Settings,
  // Bell,
  Volume2,
  CalendarSearch,
  NotebookText,
  // HandCoins,
  ShoppingBasket,
  GlobeLock,
  ChartBarIcon,
  User2,
  ReceiptText,
  Shield,
  HandCoinsIcon,
  BookText,
} from "lucide-react";
import { useState } from "react";
// import { FaMoneyCheck } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  label: string;
  icon: React.FC<any>;
  path?: string;
  children?: MenuItem[];
}

// utils/menuItems.ts or similar
type Role = "admin" | "vendor" | "hub";

export const menuItemsByRole: Record<Role, MenuItem[]> = {
  admin: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    {
      label: "Order Management",
      icon: ClipboardList,
      path: "/admin/order-management",
    },
    { label: "User Management", icon: User, path: "/admin/user-management" },
    {
      label: "Services Management",
      icon: HandPlatter,
      path: "/admin/services-management",
    },
    {
      label: "Vendor Management",
      icon: Bike,
      path: "/admin/vendor-management",
    },
    { label: "Rider Management", icon: Bike, path: "/admin/rider-management" },
    {
      label: "Category Management",
      icon: Logs,
      path: "/admin/category-management",
    },
    {
      label: "Purchase Delivery",
      icon: ShoppingBag,
      path: "/admin/purchase-delivery",
    },
    { label: "Support", icon: MessageCircleMore, path: "/admin/support" },
    { label: "Tracking", icon: MapPinCheck, path: "/admin/tracking" },
    {
      label: "Subscriptions",
      icon: CalendarSearch,
      path: "/admin/subscription",
    },
    {
      label: "Promotion & Discount",
      icon: Volume2,
      path: "/admin/promotion-discount",
    },
    {
      label: "Setting",
      icon: Settings,
      children: [
        { label: "Profile", icon: User2, path: "/admin/profile" },
        {
          label: "Terms & Conditions",
          icon: ReceiptText,
          path: "/admin/terms-condition",
        },
        {
          label: "Privacy & Policy",
          icon: Shield,
          path: "/admin/privacy-policy",
        },
      ],
    },
  ],

  vendor: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/vendor" },
    { label: "Create Order", icon: NotebookText, path: "/vendor/create-order" },
    {
      label: "Order Management",
      icon: ClipboardList,
      path: "/vendor/order-management",
    },
    { label: "My Product", icon: ShoppingBasket, path: "/vendor/my-product" },
    {
      label: "Agent Commission",
      icon: GlobeLock,
      path: "/vendor/agent-commission",
    },

    { label: "Tracking", icon: MapPinCheck, path: "/vendor/tracking" },
    {
      label: "Total Earning",
      icon: ChartBarIcon,
      path: "/vendor/total-earning",
    },
    // { label: "Notifications", icon: Bell, path: "/vendor/all-notification" },
    {
      label: "Promotion & Discount",
      icon: Volume2,
      path: "/vendor/promotion-discount",
    },
    {
      label: "Subscriptions",
      icon: CalendarSearch,
      path: "/vendor/subscription",
    },
    {
      label: "Setting",
      icon: Settings,
      children: [
        { label: "Profile", icon: User2, path: "/vendor/profile" },
        {
          label: "Terms & Conditions",
          icon: ReceiptText,
          path: "/vendor/terms-condition",
        },
        {
          label: "Privacy & Policy",
          icon: Shield,
          path: "/vendor/privacy-policy",
        },
      ],
    },
  ],

  hub: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/hub" },
    {
      label: "Order Management",
      icon: ClipboardList,
      path: "/hub/order-management",
    },
    { label: "Tracking", icon: MapPinCheck, path: "/hub/tracking" },
    { label: "Rider Information", icon: Bike, path: "/hub/rider-information" },
    { label: "Message", icon: MessageCircleMore, path: "/hub/message" },
    { label: "Earning", icon: HandCoinsIcon, path: "/hub/earning" },
    { label: "Invoice", icon: BookText, path: "/hub/invoice" },
  ],
};

export function NavMain() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const roleFromStorage = localStorage.getItem("role");

  // Narrow it to the Role union type
  const role =
    roleFromStorage === "admin" ||
    roleFromStorage === "vendor" ||
    roleFromStorage === "hub"
      ? roleFromStorage
      : "admin";

  const menuItems = menuItemsByRole[role];

  const path = useLocation();
  const pathname = path.pathname;
  console.log(pathname);

  return (
    <aside className="pl-4  font-dm-sans text-white">
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              {item?.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-l-2xl  font-semibold activeLink"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </span>
                    <span>{openDropdown === item.label ? "▲" : "▼"}</span>
                  </button>
                  {openDropdown === item.label && (
                    <ul className=" mt-2 space-y-2 ml-2">
                      {item?.children?.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <li key={child.label}>
                            <Link
                              to={child.path as string}
                              className="flex items-center gap-2 px-3 py-2 text-sm rounded font-semibold activeLinkChild"
                            >
                              <ChildIcon className="w-4 h-4" />
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path as string}
                  className={`flex items-start gap-3 px-4 py-3 rounded-l-2xl transition-all activeLink font-semibold ${
                    pathname === item.path && "bg-white text-teal-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="truncate">{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
