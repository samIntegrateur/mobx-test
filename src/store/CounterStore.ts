// import { action, computed, observable } from 'mobx';
//
// export class CounterStore {
//     @observable
//     count = 0;
//
//     @action
//     increment() {
//         this.count++;
//     }
//
//     @action
//     decrement() {
//         this.count++;
//     }
//
//     @action
//     reset() {
//         this.count = 0;
//     }
//
//     @computed
//     get doubleCount() {
//         return this.count * 2;
//     }
// }
//
// export function createCounterStore(): CounterStore {
//     return new CounterStore();
// }

export interface CounterStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    setCount: (newCount: number) => void;
}

export function createCounterStore(): CounterStore {
    return {

        count: 0,

        increment() {
            this.count++;
        },

        decrement() {
            this.count--;
        },

        setCount(newCount) {
         this.count = newCount;
        }

    } as CounterStore;
}
