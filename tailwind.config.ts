import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      /* animation: {
        spin: 'spin 1s linear infinite '
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      } */
      colors: {
        mainBlue: '#07224A',
        ligthBlue: '#0E4495',
        darkBlue: '#041225',
        mainYellow: '#FFC600',
        ligthYellow: '#FFDC5C',
        darkYellow: '#B89000',
        offWhite: '#F5F5F5'


      },
      backgroundImage: {
        pingPongMale: "url('/pingPongMale.png')",
        mulherNegraFutebolComCelular: "url('/FimalgemMulherNegraFutebolComCelular.png')",
        voleyball: "url('/voleyball.png')",
        basketball: "url('/basketball.png')",
        tennisball: "url('/tennisball.png')",
        saqueVolei: "url('/footer/saqueVolei.png')",
      },
      backgroundSize: {
        'size-200': '200%',
        'size-150': '150%',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
};
export default config;
