// // // 1.
// // /    let area = height * width;
// //     console.log("the area of your selected rectangle is: " ,area)
// // };
// // let constructor  = new Rectangle(15,30);

// // // 2.
// // let Square = function (angle) {
// //     let area = angle * 4 
// //     console.log("    height: number;
// //     width: number;" ,area)
// // }

// 1.

class Rectangle {
    height: number;
    width: number;

    constructor(height: number,width: number) {
        this.height = height;
        this.width = width;
    }


    area(): string {
        return `The area of your selected rectangle is: ${this.height * this.width}`;
    }

}
let rect = new Rectangle (15, 25)
console.log(rect.area())




// 5.
class Shape {
    draw(): void {
        console.log('drawing a shape');
    }
}

class Circle extends Shape {
    draw(): void {
        console.log('drawing a circle');
    }
}

class Triangle extends Shape {
    draw(): void {
        console.log('drawing a triangle');
    }
}

class Square extends Shape {
    draw(): void {
        console.log('drawing a square');
    }
}

function renderShapes(shapes: Shape[]): void {
    shapes.forEach(shape => {
        shape.draw();
    });
}

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

const shapes: Shape[] = [circle, triangle, square];

renderShapes(shapes);

