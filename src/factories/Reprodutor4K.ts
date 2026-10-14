import { ReprodutorStreaming } from "./ReprodutorStreaming";

export class Reprodutor4K implements ReprodutorStreaming {

    reproduzir(titulo: string): void {
        console.log(`▶️ Reproduzindo "${titulo}" em qualidade 4K.`);
    }
}