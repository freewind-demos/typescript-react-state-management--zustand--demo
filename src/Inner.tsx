import React, {FC} from 'react';
import {useStore} from './store';

type Props = {}

export const Inner: FC<Props> = ({}) => {
  const [count, updateStore] = useStore(store => [store.message, store.updateStore])
  return <div>
    <input value={count} onChange={(event) => updateStore({message: event.target.value})}/>
  </div>;
}
