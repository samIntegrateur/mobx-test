import React, { useRef } from 'react';
import { observer, useObserver } from 'mobx-react-lite';
import { useCounterStore } from './store/CounterContext';

// nb: which type ? (or prefer useObserver)
const Comp2: React.FC = () => {

    const store = useCounterStore();
    const inputEl = useRef<HTMLInputElement>(null);

    return useObserver(() => (
        <>
            <button type="button" onClick={() => store.increment()}>
                increment
            </button>
            <button type="button" onClick={() => store.decrement()}>
                decrement
            </button>

            <input type="number" ref={inputEl} />
            <button type="button" onClick={() => {
                if (inputEl?.current?.value) {
                    store.setCount(+inputEl.current.value)
                }
            }}>OK</button>
        </>
    ));
}

export default Comp2;
