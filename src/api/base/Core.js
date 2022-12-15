import {axiosInstanceV1} from "@/api/base/HTTPBaseService";

export class Core {
    constructor(url) {
        this._axios = axiosInstanceV1
        this.url = url
    }

    get(params) {
        return this._axios.get(this.url, {params})
    }
}