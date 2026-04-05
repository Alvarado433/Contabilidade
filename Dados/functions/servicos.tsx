import { Toast } from "@/utils/toast/toast";

export function handleClick(url: string, tituloServico: string) {
    Toast.info(`Abrindo ${tituloServico}...`);

    setTimeout(() => {
        window.location.href = url;
    }, 3000);
}