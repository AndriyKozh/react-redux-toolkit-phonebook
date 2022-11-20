import { PhonebookBlock, PhoneBookItem, PhoneBookBtn } from './Contacts.style';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/phoneSlice';
import PropTypes from 'prop-types';

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

PhoneBookList.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
};

export default PhoneBookList;
