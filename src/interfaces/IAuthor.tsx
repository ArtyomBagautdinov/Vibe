import GenresEnum from "@/enums/GenresEnum"

export default interface IAuthor {
    id: number,
    image: string,
    name: string,
    author_info: string,
    genres: Array<GenresEnum>
}