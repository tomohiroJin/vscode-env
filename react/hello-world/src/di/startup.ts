import { doPrint } from "./implement";

const impls = {DoPrint: doPrint};

export const create = <T>(): T ={
    return impls[T];
}