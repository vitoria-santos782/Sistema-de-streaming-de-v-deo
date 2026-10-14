import { ReprodutorStreaming } from "./ReprodutorStreaming";
import { ReprodutorHD } from "./ReprodutorHD";
import { Reprodutor4K } from "./Reprodutor4K";

export abstract class FactoryReprodutor {

    public abstract criarReprodutor(): ReprodutorStreaming;

    public iniciarReproducao(titulo: string): void {
        const reprodutor = this.criarReprodutor();
        reprodutor.reproduzir(titulo);
    }
}

export class FactoryHD extends FactoryReprodutor {

    public criarReprodutor(): ReprodutorStreaming {
        return new ReprodutorHD();
    }
}

export class Factory4K extends FactoryReprodutor {

    public criarReprodutor(): ReprodutorStreaming {
        return new Reprodutor4K();
    }
}