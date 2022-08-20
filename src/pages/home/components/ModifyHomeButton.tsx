import { modifyUser } from '@/redux/slices/user.slice';
import { useDispatch } from 'react-redux';

export default function ModifyHomeButton() {
    const dispatch = useDispatch();
  
    const dispatchAction = () => {
      dispatch(modifyUser({ name: 'Updated', id: 0 }));
    }

    return (
        <button onClick={dispatchAction}>Dispatch Modify Action</button>
    )
}
