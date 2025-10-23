import { createBrowserRouter, Link } from "react-router";
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

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <div className="text-center py-[120px] ">
        <Link to="/" className="border-2 border-purple-300 p-4 ">
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
    ],
  },

  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
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
    ],
  },
]);
