import { type AppType } from "next/app";
import { api } from "y/utils/api";
import "y/styles/globals.css";
import '../styles/Calendar.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
