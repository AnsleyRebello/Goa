
// blueprint : toyota

export class Todo{

    // sno ----- Js
    // sno: number ---- Ts
    sno: number;
    title: string;
    desc: string;
    active: boolean;
    
    constructor(sno: number, title: string, desc: string, active: boolean) {
        this.sno = sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }
}

//  Todo todo1  = new Todo("this is title","description", true)

// this = referring to current object