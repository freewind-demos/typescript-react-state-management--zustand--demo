import React, {FC} from 'react';
import {useStore} from './store';

type Props = {}

export const Inner: FC<Props> = ({}) => {
  const [count, update] = useStore(store => [store.message, store.update])
  return <div>
    <input value={count} onChange={(event) => update({message: event.target.value})}/>
  </div>;
}
