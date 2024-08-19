 //Layout
import {HeaderOnly} from "~/components/Layout"
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import OrderConfirm from "~/pages/ConfirmOrder"
import Upload from "~/pages/Upload"
import SignInPage from "~/pages/SignIn/SignInPage"
//Public routes 

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/confirm_order", component: OrderConfirm , layout: HeaderOnly },
  { path: "/upload", component: Upload, layout: null },
  { path: "/signin", component: SignInPage},
];





const privateRoutes = []



export {publicRoutes, privateRoutes}