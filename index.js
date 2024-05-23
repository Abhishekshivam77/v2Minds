const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Shape {
    constructor(drawChar, rows, columns) {
        this.drawChar = drawChar;
        this.rows = rows;
        this.columns = columns;
    }

    draw(alignment) {
        //  subclasses >>>>>
    }
}

class Triangle extends Shape {
    draw(alignment) {
        for (let i = 1; i <= this.rows; i++) {
            let line = this.drawChar.repeat(i);
            if (alignment.toLowerCase() === "left") {
                console.log(line);
            } else if (alignment.toLowerCase() === "right") {
                console.log(line.padStart(this.rows, ' '));
            } else if (alignment.toLowerCase() === "center") {
                const spaces = ' '.repeat((this.rows - i));
                console.log(spaces + line + spaces);
            } else {
                console.log("Invalid alignment!");
            }
        }
    }
}

class Square extends Shape {
    draw(alignment) {
        this.drawRectangle(alignment);
    }

    drawRectangle(alignment) {
        for (let i = 0; i < this.rows; i++) {
            let line = this.drawChar.repeat(this.columns);
            if (alignment.toLowerCase() === "left") {
                console.log(line);
            } else if (alignment.toLowerCase() === "right") {
                console.log(line.padStart(this.columns + this.rows - 1, ' '));
            } else if (alignment.toLowerCase() === "center") {
                const spaces = ' '.repeat((this.columns + this.rows - 1 - this.columns) / 2);
                console.log(spaces + line + spaces);
            } else {
                console.log("Invalid alignment!, Check..");
            }
        }
    }
}

class Rectangle extends Shape {
    draw(alignment) {
        this.drawRectangle(alignment);
    }

    drawRectangle(alignment) {
        for (let i = 0; i < this.rows; i++) {
            let line = this.drawChar.repeat(this.columns);
            if (alignment.toLowerCase() === "left") {
                console.log(line);
            } else if (alignment.toLowerCase() === "right") {
                console.log(line.padStart(this.columns + this.rows - 1, ' '));
            } else if (alignment.toLowerCase() === "center") {
                const spaces = ' '.repeat((this.columns + this.rows - 1 - this.columns) / 2);
                console.log(spaces + line + spaces);
            } else {
                console.log("Invalid alignment!");
         }
     }
    }
}

function getShapeInstance(shapeType, drawChar, rows, columns) {
    switch (shapeType.toLowerCase()) {
        case "triangle":
            return new Triangle(drawChar, rows, columns);
        case "square":
            return new Square(drawChar, rows, rows);
        case "rectangle":
            return new Rectangle(drawChar, rows, columns);
        default:
            throw new Error("Invalid shape type!");
       }
} 

rl.question('Shape Type (rectangle, square, triangle): ', (shapeType) => {
    rl.question('Alignment (left, right, center): ', (alignment) => {
        rl.question('Draw with: ', (drawChar) => {
            rl.question('Rows: ', (rows) => {
                rl.question('Columns: ', (columns) => {
                    rows = parseInt(rows);
                    columns = parseInt(columns);

                    try {
                        const shape = getShapeInstance(shapeType, drawChar, rows, columns);
                        shape.draw(alignment);
                    } catch (error) {
                        console.error(error.message);
                    }

                    rl.close();
             });
            });
           });
    });
});
