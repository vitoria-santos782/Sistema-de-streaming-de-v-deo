import { FactoryHD, Factory4K } from "./factories/FactoryReprodutor";

import { CatalogoVideos } from "./singleton/CatalogoVideos";

import { Video } from "./models/Video";

import {
    FabricaPlanoBasico
} from "./abstract-factory/FabricaPlanoBasico";

import {
    FabricaPlanoPremium
} from "./abstract-factory/FabricaPlanoPremium";

import { ConfiguracaoVideoBuilder } from "./builder/ConfiguracaoVideoBuilder";

import { PerfilUsuario } from "./prototype/PerfilUsuario";


console.log("======================================");
console.log("           STREAMBOX");
console.log(" Sistema de Streaming de Vídeo");
console.log("======================================");


/* =====================================
   1. SINGLETON
   Catálogo único de vídeos
===================================== */

console.log("\n===== 1. CATÁLOGO DE VÍDEOS =====");

const catalogo = CatalogoVideos.getInstancia();

catalogo.adicionarVideo(
    new Video(
        1,
        "O Senhor dos Anéis",
        "Fantasia",
        178
    )
);

catalogo.adicionarVideo(
    new Video(
        2,
        "Interestelar",
        "Ficção Científica",
        169
    )
);

catalogo.adicionarVideo(
    new Video(
        3,
        "Vingadores: Ultimato",
        "Ação",
        181
    )
);

catalogo.listarVideos();


/* =====================================
   2. ABSTRACT FACTORY
   Escolha do plano
===================================== */

console.log("\n===== 2. PLANO DO USUÁRIO =====");

const plano = "Premium";

let fabrica;

if (plano === "Premium") {
    fabrica = new FabricaPlanoPremium();
} else {
    fabrica = new FabricaPlanoBasico();
}

const player = fabrica.criarPlayer();
const qualidade = fabrica.criarQualidade();

player.iniciar();

console.log(
    `Qualidade disponível: ${qualidade.obterQualidade()}`
);


/* =====================================
   3. FACTORY METHOD
   Criação do reprodutor
===================================== */

console.log("\n===== 3. FACTORY METHOD =====");

const factoryReprodutor = new Factory4K();

factoryReprodutor.iniciarReproducao(
    "Interestelar"
);


/* =====================================
   4. BUILDER
   Configuração personalizada
===================================== */

console.log("\n===== 4. BUILDER =====");

const configuracao = new ConfiguracaoVideoBuilder()
    .definirResolucao("4K")
    .definirIdioma("Português")
    .definirLegenda("Português")
    .ativarAutoplay()
    .definirVolume(80)
    .definirVelocidade(1.0)
    .construir();

configuracao.exibirConfiguracao();


/* =====================================
   5. PROTOTYPE
   Clonagem de perfil
===================================== */

console.log("\n===== 5. PROTOTYPE =====");

const perfilOriginal = new PerfilUsuario(
    "Vitória",
    "vitoria@streambox.com",
    "Premium",
    "Português"
);

const perfilClone = perfilOriginal.clonar();

perfilClone.nome = "Vitória Clone";
perfilClone.email = "clone@streambox.com";

console.log("\nPerfil original:");

perfilOriginal.exibirPerfil();

console.log("\nPerfil clonado:");

perfilClone.exibirPerfil();


/* =====================================
   6. TESTE DO SINGLETON
===================================== */

console.log("\n===== TESTE DO SINGLETON =====");

const outroCatalogo = CatalogoVideos.getInstancia();

console.log(
    "O catálogo possui uma única instância:",
    catalogo === outroCatalogo
);


console.log("\n======================================");
console.log("       STREAMBOX FINALIZADO");
console.log("======================================");