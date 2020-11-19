class Add{
x: number;
y: number;

constructor(x:number, y:number){
this.x=x;
this.y=y;
}

Display(){
    console.log(this.x);
    console.log(this.x);
    console.log("Hello");
    console.log("sum= "+this.x+this.y);
}

}

let add= new Add(2, 3);
add.Display();