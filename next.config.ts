import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      loaders: {}, // Puedes agregar configuraciones específicas aquí si es necesario
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config; // Asegúrate de devolver la configuración
  },
};

export default nextConfig;