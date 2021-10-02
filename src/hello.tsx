import React, {FC} from 'react';
import {Inner} from './Inner';
import {useStore} from './store';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const message = useStore(it => it.message);
  return <div>
    <h1>Count: {message}</h1>
    <Inner/>
  </div>;
}
