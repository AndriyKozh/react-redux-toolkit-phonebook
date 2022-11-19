import PhoneBookList from 'components/Contact/PhoneBookList';
import { useSelector } from 'react-redux';

const Phonebook = () => {
  const contactList = useSelector(state => state.contacts.contacts);
  const contactFilter = useSelector(state => state.contacts.filter);

  const filtredContact = contactList.filter(contact =>
    contact.user.nameUser.toLowerCase().includes(contactFilter)
  );
  console.log(filtredContact);

  return (
    <div className="contacts">
      {filtredContact.map((contact, index) => {
        return <PhoneBookList key={index} {...contact} />;
      })}
    </div>
  );
};

export default Phonebook;
