interface Obj {
    a4: string;
    b4: number;
}
type ReadonlyObj = Readonly<Obj>

type PartialObj = Partial<Obj>

type PickObj = Pick<Obj, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>
