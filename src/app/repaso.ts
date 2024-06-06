// Primera Forma

export class Person {
  public name: string;
  public age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  get getName(): string {
    return this.name;
  }

  set SetName(newName: string) {
    this.name = newName;
  }
}

// Otra forma de inicializar un objeto:
export class Employee {
  constructor(
    public name: string,
    public salary: string,
  ) {}
}

export class Student extends Person {
  constructor(
    name: string,
    age: number,
    public student_id: string,
  ) {
    super(name, age);
  }
}

// RECOMENDACIÓN PARA ANGULAR: Inyección de dependencias

class Person2 {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Student2 {
  constructor(
    public student_id: string,
    public person: Person,
  ) {}
}
