import { Resources } from "./resources.router"
import { Web } from "./web"

export class Router{
    constructor(app: any){
        new Web(app)
        new Resources(app)
    }
}