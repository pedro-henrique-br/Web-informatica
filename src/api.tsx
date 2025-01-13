import axios from 'axios'
import { Bounce, toast } from "react-toastify";

const sendEmail = (name: string, email: string, message: string) => {
  console.log(axios
    .post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "service_rc2n1q9",
      template_id: "template_taq47ed",
      user_id: "um2hpzlAB5ja0t25F",
      template_params: {
        from_name: name,
        email: email,
        message: message,
      },
    })
    .then(() =>
      toast.success("Email enviado!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    )
    .catch((error) =>
      toast.error(`Erro ${error}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    ))
};

export default {
  sendEmail
}



