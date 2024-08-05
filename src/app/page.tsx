
import Header from './components/header/header';

import Link from 'next/link';
import { BackPhotoGray, InsideGrayPhoto } from './homePageComponents/insideGrayPhoto';
import { MulherNegraFutebolComCelular } from './homePageComponents/mulherNegraNoCelular';
import { PassoAPasso } from './homePageComponents/passoAPasso';
import FormEmail from './contato/emailForm';
import Footer from './homePageComponents/footer/Footer';


export default async function Main()
{
  /* const supabase = createClient();
   const { data } = await supabase.from("users").select(); */

  {/* <div>{JSON.stringify(data)} </div> */ }


  /*   const session = await auth();
    console.log(session) */

  return (
    <main className='relative '>
      {/* <span className='bg-pingPongMale absolute top-0 left-0 w-screen bg-center bg-cover h-[26rem] -z-10'></span> */}

      {/* Imagem de fundo */}

      <Header />
      <BackPhotoGray />


      <div className='flex flex-col gap-10'>

        <InsideGrayPhoto />

        <MulherNegraFutebolComCelular />

        <PassoAPasso />

        {/*  <FormEmail />*/}
        <Footer />



      </div >

    </main >




  );
}

