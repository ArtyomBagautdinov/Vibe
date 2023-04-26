import ISong from "@/interfaces/ISong";
import { makeAutoObservable } from "mobx";
import simulateAwait from "@/helpers/simulateAwait";
import GenresEnum from "@/enums/GenresEnum";

class SongsStore {

    private _songs_list: Array<ISong> = [];

    constructor() {
        makeAutoObservable(this);
    }

    get songs_list(): Array<ISong> {
        return this._songs_list;
    }

    set songs_list(so: Array<ISong>) {
        this._songs_list = so;
    }

    async loadSongs(args: any = []): Promise<void> {

        await simulateAwait(500);

        this.songs_list = [
            {
                id: 0,
                authors_id: [0],
                title: 'Give Life Back to Music',
                album_id: 0,
                image: require('@/assets/images/randomAccessMemories.jpg'),
                genres: [GenresEnum.house],
                duration_in_seconds: 275
            },
            {
                id: 1,
                authors_id: [0],
                title: 'The Game of Love',
                album_id: 0,
                image: require('@/assets/images/randomAccessMemories.jpg'),
                genres: [GenresEnum.house],
                duration_in_seconds: 322
            },
            {
                id: 2,
                authors_id: [0],
                title: 'Giorgio by Moroder',
                album_id: 0,
                image: require('@/assets/images/randomAccessMemories.jpg'),
                genres: [GenresEnum.house],
                duration_in_seconds: 544
            },
            {
                id: 3,
                authors_id: [0],
                title: 'Within',
                album_id: 0,
                image: require('@/assets/images/randomAccessMemories.jpg'),
                genres: [GenresEnum.house],
                duration_in_seconds: 228
            },
            {
                id: 4,
                authors_id: [0,5],
                title: 'Instant Crush',
                album_id: 0,
                image: require('@/assets/images/randomAccessMemories.jpg'),
                genres: [GenresEnum.house],
                duration_in_seconds: 337
            },
            {
                id: 5,
                authors_id: [0,2],
                title: 'Lose Yourself to Dance',
                album_id: 0,
                image: require('@/assets/images/randomAccessMemories.jpg'),
                genres: [GenresEnum.house],
                duration_in_seconds: 353
            },
            {
                id: 6,
                authors_id: [0,2],
                title: 'Touch',
                album_id: 0,
                image: require('@/assets/images/randomAccessMemories.jpg'),
                genres: [GenresEnum.house],
                duration_in_seconds: 498
            }
            // {
            //     id: 7,
            //     authors_id: [0,2],
            //     title: 'Get Lucky',
            //     album_id: 0,
            //     image: require('@/assets/images/randomAccessMemories.jpg'),
            //     genres: [GenresEnum.house],
            //     duration_in_seconds: 240
            // },
            // {
            //     id: 8,
            //     authors_id: [0],
            //     title: 'Beyond',
            //     album_id: 0,
            //     image: require('@/assets/images/randomAccessMemories.jpg'),
            //     genres: [GenresEnum.house],
            //     duration_in_seconds: 240
            // },
            // {
            //     id: 9,
            //     authors_id: [0],
            //     title: 'Motherboard',
            //     album_id: 0,
            //     image: require('@/assets/images/randomAccessMemories.jpg'),
            //     genres: [GenresEnum.house],
            //     duration_in_seconds: 240
            // },
            // {
            //     id: 10,
            //     authors_id: [0,4],
            //     title: 'Fragments of Time',
            //     album_id: 0,
            //     image: require('@/assets/images/randomAccessMemories.jpg'),
            //     genres: [GenresEnum.house],
            //     duration_in_seconds: 240
            // },
            // {
            //     id: 11,
            //     authors_id: [0,3],
            //     title: "Doin' it Right",
            //     album_id: 0,
            //     image: require('@/assets/images/randomAccessMemories.jpg'),
            //     genres: [GenresEnum.house],
            //     duration_in_seconds: 240
            // },
            // {
            //     id: 12,
            //     authors_id: [0],
            //     title: "Contact",
            //     album_id: 0,
            //     image: require('@/assets/images/randomAccessMemories.jpg'),
            //     genres: [GenresEnum.house],
            //     duration_in_seconds: 240
            // }
        ]; 
    }
}


const songsStore = new SongsStore();

export default songsStore;