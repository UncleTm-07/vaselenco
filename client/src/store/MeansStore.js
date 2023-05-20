import {makeAutoObservable} from "mobx";

export default class MeansStore {
    constructor() {
        this._means = []
        makeAutoObservable(this)
    }

    setMeans(means) {
        this._means = means
    }
    get means() {
        return this._means
    }

}
