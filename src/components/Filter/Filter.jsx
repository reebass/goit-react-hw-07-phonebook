
import { useDispatch, useSelector } from 'react-redux';
import { setQueryFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label, InputFilter } from './Filter.styled';



export const Filter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getFilter)
  const onChange = evt => dispatch(setQueryFilter(evt.currentTarget.value))

  return (
    <Label>
      {' '}
      Find contacts by name
      <InputFilter type="text" onChange={onChange} value={value}/>
    </Label>
  );
};
