import { makeAutoObservable } from "mobx";

class PlayerStore {

    private _isPlaying: boolean = false;

    constructor(){
        makeAutoObservable(this);
    }

    get isPlaying(): boolean {
        return this._isPlaying;
    }

    set isPlaying(val: boolean) {
        this._isPlaying = val;
    }

    play() {
        this.isPlaying = true;
    }

    pause() {
        this.isPlaying = false;
    }
}

const playerStore = new PlayerStore();

export default playerStore;