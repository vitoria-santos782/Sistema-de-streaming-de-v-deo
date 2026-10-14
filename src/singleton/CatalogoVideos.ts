import { Video } from "../models/Video";

export class CatalogoVideos {

    private static instancia: CatalogoVideos;

    private videos: Video[] = [];

    private constructor() {}

    public static getInstancia(): CatalogoVideos {
        if (!CatalogoVideos.instancia) {
            CatalogoVideos.instancia = new CatalogoVideos();
        }

        return CatalogoVideos.instancia;
    }

    public adicionarVideo(video: Video): void {
        this.videos.push(video);
    }

    public listarVideos(): void {
        console.log("===== CATÁLOGO DE VÍDEOS =====");

        this.videos.forEach((video) => {
            console.log(
                `${video.id} - ${video.titulo} - ${video.genero}`
            );
        });
    }

    public buscarPorId(id: number): Video | undefined {
        return this.videos.find((video) => video.id === id);
    }
}