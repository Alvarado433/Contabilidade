import { toast } from "react-toastify";

class ToastService {
  sucesso(mensagem: string) {
    toast.success(mensagem, {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  }

  erro(mensagem: string) {
    toast.error(mensagem, {
      position: "top-right",
      autoClose: 4000,
      theme: "dark",
    });
  }

  aviso(mensagem: string) {
    toast.warning(mensagem, {
      position: "top-right",
      autoClose: 3500,
      theme: "dark",
    });
  }

  info(mensagem: string) {
    toast.info(mensagem, {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  }
}

export const Toast = new ToastService();