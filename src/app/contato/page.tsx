import Header from "../components/header/header";
import FormEmail from "./emailForm";

export default async function Contato()
{
    return <main className="bg-cover bg-manyBalls bg-center bg-no-repeat bg-opacity-50 h-screen w-screen flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
            <FormEmail />

        </div>
    </main>
}