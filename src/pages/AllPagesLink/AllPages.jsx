import { Link } from "react-router";

const AllPages = () => {
  const AllPagesLinks = [
    // ==== main pages ====
    { name: "🏠 Home Page", link: "/" },
    { name: "📖 About Section", link: "/#about-section" },
    { name: "🧘 Journaling", link: "/journaling" },
    { name: "👗 Fashion", link: "/fashion" },
    { name: "💰 Finance", link: "/finance" },
    { name: "🎨 Creative Design", link: "/creative-design" },
    { name: "📞 Contact Section", link: "/#contact" },
    { name: "", link: "" },

    // ==== AUTH PAGES ====
    { name: "🔐 Sign In", link: "/auth/sign-in" },
    { name: "📝 Sign Up", link: "/auth/sign-up" },
    { name: "🔁 Forgot Password", link: "/auth/forgot-pass" },
    { name: "🔑 Verify Code", link: "/auth/verify-code" },
    { name: "🔒 Set New Password", link: "/auth/set-pass" },
    { name: "✅ Successful Page", link: "/auth/successful" },
    { name: "", link: "" },

    // ==== dashboard ====
    { name: "📓 Dashboard (Journaling)", link: "/dashboard" },
    { name: "👗 Dashboard - Fashion", link: "/dashboard/fashion" },
    { name: "💰 Dashboard - Finance", link: "/dashboard/finance" },
    { name: "🎨 Dashboard - Creative Design", link: "/dashboard/creative-design" },
    { name: "", link: "" },

    // ==== profile ====
    { name: "👤 Dashboard - Profile", link: "/dashboard/profile" },
    { name: "⚙️ Profile - Settings", link: "/dashboard/profile/setting" },
    { name: "", link: "" },

    // ==== SETTINGS SUB-PAGES ====
    { name: "🔑 Change Password", link: "/dashboard/profile/setting" },
    { name: "🔔 Notification Settings", link: "/dashboard/profile/setting/notification" },
    { name: "💬 Help & Support", link: "/dashboard/profile/setting/help-support" },
    { name: "", link: "" },

    // ==== LEGAL PAGES ====
    { name: "📜 Privacy Policy", link: "/privacy" },
    { name: "🍪 Cookie Policy", link: "/cookie" },
    { name: "⚖️ Terms & Conditions", link: "/terms" },
  ];

  return (
    <div className="py-28 px-20">
      <h1 className="text-4xl text-primary font-bold mb-10">All Pages</h1>

      <ul className="text-lg flex flex-col gap-3">
        {AllPagesLinks.map((item, index) => (
          <li key={index}>
            {item.name ? (
              <Link
                to={item.link}
                target="_blank"
                className="text-gray-700 hover:text-primary font-medium duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <div className="my-2 border-b border-gray-300 w-1/2"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPages;
