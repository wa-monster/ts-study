/// <reference path='./ts'>
import { User, Header, Body, Footer } from "./component";

// namespace Home {
export default class Page {
  constructor() {
    var a: User = {
      name: "",
    };
    new Header();
    new Body();
    new Footer();
  }
}
// }
