import { PhonebookBlock, PhoneBookItem, PhoneBookBtn } from './Contacts.style';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/phoneSlice';

const PhoneBookList = ({ id, user }) => {
  const dispatch = useDispatch();

  return (
    <PhonebookBlock>
      <PhoneBookItem>
        {user.nameUser}: {user.numberUser}
      </PhoneBookItem>
      <PhoneBookBtn
        type="button "
        onClick={() => dispatch(deleteContact({ id }))}
      >
        Delete
      </PhoneBookBtn>
    </PhonebookBlock>
  );
};

export default PhoneBookList;
