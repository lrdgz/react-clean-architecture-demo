import { UserEmptyState } from '@/models';
import { createUser } from '@/redux/slices/user.slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMorty } from '../services';

export default function CreateHomeButton() {
    const dispatch = useDispatch();
    const [morty, setMorty] = useState(UserEmptyState);

    const getMorty = async () => {
      await fetchMorty
    }
  
    const dispatchAction = () => {
      dispatch(createUser({ name: 'John Doe', id: 1 }));
    }

    return (
        <button onClick={dispatchAction}>Dispatch Create Action</button>
    )
}
