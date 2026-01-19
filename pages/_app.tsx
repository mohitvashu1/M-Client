import "@/styles/globals.css";
import toast, { Toaster } from 'react-hot-toast';
import { QueryClientProvider , QueryClient} from '@tanstack/react-query'
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
  <GoogleOAuthProvider clientId="199030499570-k4pn9u4srr8ccffmpgg47qeod9ioke0m.apps.googleusercontent.com">
    <Component {...pageProps} />
    <Toaster/>
    <ReactQueryDevtools/>
  </GoogleOAuthProvider>
  </QueryClientProvider>;
}
  