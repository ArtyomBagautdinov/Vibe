import GenresEnum from "@/enums/GenresEnum";

export default interface IAlbum {
    id: number,
    authors_id: Array<number>,
    release_year: number,
    image: string,
    genres: Array<GenresEnum>,
    labels_id?: Array<number>
}