const arr1: number[] = [5, 10, 20, 100, 45];
const [firstNum, secondNum]: number[] = arr1;
const sum: number = firstNum + secondNum;

type Person = {
    name: string;
    surname: string;
    age: number;
};

const obj1: Person = {
    name: "Ali",
    surname: "Hilal",
    age: 19,
};

const { name: personName, surname: personSurname, ...rest }: Person = obj1;

if (firstNum > 0 && firstNum % 2 === 0) {
    console.log("true");
} else {
    console.log("false");
}

if (firstNum === secondNum || rest.age !== secondNum) {
    console.log("true");
} else {
    console.log("false");
}

if (sum > rest.age) {
    console.log("Array win");
} else {
    console.log("Object win");
}

const userName: string = "Xasi";
console.log(userName === obj1.name ? "True Name" : "False Name");
