import { CounterStore, createCounterStore } from './CounterStore';
import React, { FC, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';


export const CounterStoreContext = React.createContext<CounterStore | null>(null);

export const CounterStoreProvider: FC = ({ children }) => {
    const store = useLocalStore(() => createCounterStore());

    return (
        <CounterStoreContext.Provider value={store}>{children}</CounterStoreContext.Provider>
    );
}

export const useCounterStore = (): CounterStore => {
    const store = useContext(CounterStoreContext);

    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
}
