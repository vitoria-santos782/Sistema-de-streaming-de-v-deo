import { ReprodutorStreaming } from "./ReprodutorStreaming";

export class ReprodutorHD implements ReprodutorStreaming {

    reproduzir(titulo: string): void {
        console.log(`▶️ Reproduzindo "${titulo}" em qualidade HD.`);
    }
}