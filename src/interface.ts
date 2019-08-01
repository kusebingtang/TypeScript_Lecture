interface List {
    readonly id: number;
    name: string;
    // [x: string]: any;
    age?: number;
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
        //  value.id++//Cannot assign to 'id' because it is a read-only property.
    })
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
    ]
}

//使用类型断言1
render({
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
    ]
} as Result)

//使用类型断言2
render(<Result>{
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
    ]
})
render(result)

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['a', 'b']

console.log(chars)
console.log(chars[0])

interface Names {
    [x: string]: any;
    // y: number;
    [z: number]: number;
}

let names: Names = [1,2,3]
console.log(names)