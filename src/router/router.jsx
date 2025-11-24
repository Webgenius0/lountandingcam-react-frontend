import { createBrowserRouter, Link, Navigate } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/HomePage/Home";
import AuthLayouts from "../layouts/AuthLayouts";
import SignIn from "../pages/AuthPages/SignIn";
import Forgot from "../pages/AuthPages/Forgot";
import VerifyCode from "../pages/AuthPages/VerifyCode";
import SetNewPass from "../pages/AuthPages/SetNewPass";
import Successful from "../pages/AuthPages/Successful";
import SignUp from "../pages/AuthPages/SignUp";
import Journaling from "../pages/JournalingPage/Journaling";
import Fashion from "../pages/FashionPage/Fashion";
import Finance from "../pages/FinancePage/Finance";
import CreativeDesign from "../pages/CreativeDesignPage/CreativeDesign";
import DashboardLayouts from "../layouts/DashboardLayouts";
import DashJournaling from "../pages/DashboardPages/DashJournaling/DashJournaling";
import DashFashion from "../pages/DashboardPages/DashFashion/DashFashion";
import DashFinance from "../pages/DashboardPages/DashFinance/DashFinance";
import DashCreative from "../pages/DashboardPages/DashCreative/DashCreative";
import Profile from "../pages/DashboardPages/Profile/Profile";
import ProfileSettings from "../components/DashboardComponents/ProfileSettingsComponents/ProfileSettings";
import Setting from "../pages/DashboardPages/Setting/Setting";
import ChangePassword from "../components/DashboardComponents/SettingComponents/ChangePassword";
import Notification from "../components/DashboardComponents/SettingComponents/Notification";
import HelpSupport from "../components/DashboardComponents/SettingComponents/HelpSupport";
import AllPages from "../pages/AllPagesLink/AllPages";
import Privacy from "../pages/PrivacyPage/Privacy";
import Cookie from "../pages/CookiePage/Cookie";
import Terms from "../pages/TermsPage/Terms";
import EmailVerify from "../pages/AuthPages/EmailVerify";
import AccountDelete from "../components/DashboardComponents/SettingComponents/AccountDelete";
import PrivateRoute from "../components/common/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <div className="text-center py-[120px] ">
        <p className="text-8xl font-extrabold mb-16 text-primary">404</p>
        <Link to="/" className="border-2 border-primary p-4 ">
          {" "}
          Go to home page
        </Link>
      </div>
    ),
  },
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "journaling",
        Component: Journaling,
      },
      {
        path: "fashion",
        Component: Fashion,
      },
      {
        path: "finance",
        Component: Finance,
      },
      {
        path: "creative-design",
        Component: CreativeDesign,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "cookie",
        Component: Cookie,
      },
      {
        path: "terms",
        Component: Terms,
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        index: true,
        element: <Navigate replace to="/auth/sign-in" />,
      },

      {
        path: "sign-in",
        Component: SignIn,
      },
      {
        path: "forgot-pass",
        Component: Forgot,
      },
      {
        path: "verify-code",
        Component: VerifyCode,
      },

      {
        path: "set-pass",
        Component: SetNewPass,
      },
      {
        path: "successful",
        Component: Successful,
      },
      {
        path: "sign-up",
        Component: SignUp,
      },
      {
        path: "email-verify",
        Component: EmailVerify,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashJournaling,
      },
      {
        path: "fashion",
        Component: DashFashion,
      },
      {
        path: "finance",
        Component: DashFinance,
      },
      {
        path: "creative-design",
        Component: DashCreative,
      },
      {
        path: "profile",
        Component: Profile,
        children: [
          {
            index: true,
            Component: ProfileSettings,
          },
          {
            path: "setting",
            Component: Setting,
            children: [
              {
                index: true,
                Component: ChangePassword,
              },
              {
                path: "delete-account",
                Component: AccountDelete,
              },
              {
                path: "help-support",
                Component: HelpSupport,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "all-pages",
    Component: AllPages,
  },
]);
