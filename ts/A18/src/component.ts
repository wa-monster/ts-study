// namespace Components {
export interface User {
  name: string;
}
export class Header {
  constructor() {
    const ele = document.createElement("div");
    ele.innerHTML = "我来组成头部";
    document.body.appendChild(ele);
  }
}
export class Body {
  constructor() {
    const ele = document.createElement("div");
    ele.innerHTML = "我来组成身体s";
    document.body.appendChild(ele);
  }
}

export class Footer {
  constructor() {
    const ele = document.createElement("div");
    ele.innerHTML = "我来组成尾巴";
    document.body.appendChild(ele);
  }
}
// }
