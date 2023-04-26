import GenresEnum from "@/enums/GenresEnum";
import ILyrics from "@/interfaces/ILyrics";

export default interface ISong {
    id: number,
    authors_id: Array<number>,
    title: string,
    album_id: number,
    image: string,
    duration_in_seconds: number,
    genres: Array<GenresEnum>,
    lyrics?: ILyrics
}