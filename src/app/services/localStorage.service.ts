import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() { }

    // set local storage
    setItem(key , value) {
        localStorage.setItem(key, value);
    }

    // get local storage
    getItem(key , value) {
        const data = localStorage.getItem(key);
        return data;
    }

    // remove local storage
    removeItem(key) {
        localStorage.removeItem(key);
    }
}
