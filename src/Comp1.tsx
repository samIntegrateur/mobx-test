import React from 'react';
import { observer } from 'mobx-react-lite';
import { useCounterStore } from './store/CounterContext';

// nb: which type ? (or prefer useObserver)
const Comp1 = observer(() => {

    const store = useCounterStore();

    return (
       <p>count : {store.count}</p>
    );
});

export default Comp1;
