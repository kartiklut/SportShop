import {Component} from "@angular/core";
import { Cart } from "../model/cart.model";
@Component({
    templateUrl: "cartDetail.Component.html"
})
export class CartDetailComponent{
    constructor(public cart: Cart) { }
}