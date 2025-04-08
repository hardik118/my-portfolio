import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-pdf"],
  env:{
    NEXT_PUBLIC_RESEND_API_KEY:'re_f2RmAy7g_5u3xDNjA8uYmQTix6K4qfjA5'
  }
};

export default nextConfig;
