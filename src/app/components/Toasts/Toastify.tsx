
import { toast } from 'react-toastify';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export async function ToastSucess(frase: string)
{
    toast.success(frase, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

