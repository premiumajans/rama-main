import {makeAutoObservable} from 'mobx';
import {settings} from "@/interfaces/common";

class AppStore {
    search: boolean = false
    menu: boolean = false
    settings: settings[] = []

    constructor() {
        makeAutoObservable(this)
    }

    changeSearch = () => {
        this.search = !this.search
    }

    changeSettings = () => {
        fetch('https://rama.pleskdemo.com/api/settings')
            .then(res => res.json())
            .then(res => {
                this.settings = res.settings
            })
    }

    changeMenu = () => {
        this.menu = !this.menu
    }
}

const store = new AppStore();
export default store;
