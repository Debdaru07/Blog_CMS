import React, { useState } from "react";

const navItems = [
  { icon: "dashboard", label: "Dashboard", path: "/admin/dashboard" },
  { icon: "add_box", label: "Add New Blog", path: "/admin/add-blog" },
  { icon: "article", label: "All Blogs", path: "/admin/blogs" },
  { icon: "photo_library", label: "Media Library", path: "/admin/media" },
];

const Sidebar = ({ active, setActive }) => {
  const [toast, setToast] = useState("");

  const handleClick = (label, path) => {
    setActive?.(label);
  };

  const handleLogout = () => {
    setToast("Logging you out...");

    // Switch to green check
    setTimeout(() => {
      setToast("Logged out");
    }, 1000);

    // Redirect after animation
    setTimeout(() => {
    }, 1500);
  };

  const isSuccess = toast === "Logged out!";

  return (
    <>
      {/* Toast */}
      {toast && (
        <div
          className="
            fixed top-6 left-1/2 -translate-x-1/2
            bg-black text-theme-beige px-5 py-2 rounded-lg shadow-md
            flex items-center gap-3 z-50 animate-fadeIn
          "
        >
          {/* Dynamic Icon */}
          {!isSuccess ? (
            <span className="material-symbols-outlined animate-spin">
              settings
            </span>
          ) : (
            <span className="material-symbols-outlined text-[#3cd37a]">
              check_circle
            </span>
          )}

          {toast}
        </div>
      )}

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-black text-theme-beige p-4 flex flex-col justify-between">

        {/* Logo */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-3 py-2">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAj4Itm8PcQLCxfuZfnrVAA74CqsU1QRruFtWp42lVl4T7EN9Bqh8oGBsAMiT1-ZOW8B5EmzwRYQEjnMuU4MCXxHu7DT0AzHmR7flQwyZvUEqOr_zhcCQmPJEciPGLuo6_A7htnaQp4V0KrBUTGrZQABnd4xPjl_lTHenI48SQk5CDDRA2tnNS4hGpR0QOPXqyOzzJwcBe7QeNsz2Hhe4naP6KKzbW2E3PCFNzF0_mMbEj-7f1BBNSPjVPkU9Vjy0MNUBlH4Yobiqo');",
              }}
            />

            <div className="flex flex-col">
              <h1 className="text-theme-beige text-base font-medium leading-normal">
                BlackBeige
              </h1>
              <p className="text-theme-beige/70 text-sm leading-normal">CMS</p>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                onClick={() => handleClick(item.label, item.path)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
                  ${
                    active === item.label
                      ? "bg-theme-beige/10 text-theme-beige"
                      : "hover:bg-theme-beige/10"
                  }
                `}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div
          className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
                     hover:bg-theme-beige/10 transition"
          onClick={handleLogout}
        >
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium">Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
