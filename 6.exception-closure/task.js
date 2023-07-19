function parseCount(result){
  let num = Number.parseFloat(result);
  if(num !== num){
    throw new Error ("Невалидное значение");
  }
  return num;
}

function validateCount(result){
  try {
    return parseCount(result);
  } catch (error) {
    return error;
  }
}

class Triangle{
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    if(a + b < c || a + c < b || b + c < a){
      throw new Error ("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter(){
    return this.a + this.b + this.c;
  }
  get area(){
    const p = 0.5 * (this.a + this.b + this.c);
    const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Math.round(result * 1000) / 1000;
  }
}

function getTriangle(a, b, c){
  try {
    return new Triangle (a, b, c);
  } catch (error) {
    console.log("Ошибка! Треугольник не существует");
    return error;
  }
} 