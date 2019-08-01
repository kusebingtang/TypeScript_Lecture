// let add: (x: number, y: number) => number
// interface Add {
//     (x: number, y: number): number
// }
type Add = (x: number, y: number) => number
let add: Add = (a: number, b: number) => a + b

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib = (() => {}) as Lib
    lib.version = '1.0.0'
    lib.doSomething = () => {}
    return lib;
}
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()