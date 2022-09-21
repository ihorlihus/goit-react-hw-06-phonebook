import { useSelector, useDispatch } from 'react-redux';
import { addContact, delContact } from '../redux/contSlice';
import ContactList from './ContactList';
import SignUpForm from './ContactForm';
import Filter from './Filter';

export const App = () => {
  const contacts = useSelector(state => state).contacts;
  const dispatch = useDispatch();
  console.log(contacts.length);

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // const formSubmitHandler = data => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   const isInName = newContact.name.toLowerCase();
  //   contacts.find(contact => contact.name.toLowerCase() === isInName)
  //     ? alert(data.name + ' is already in contacts')
  //     : setContacts(prevState => [newContact, ...prevState]);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getFiltredContakts = () => {
  //   const normalisedFilter = filter.toLowerCase().trim();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalisedFilter)
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(state => state.filter(contact => contact.id !== contactId));
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <SignUpForm />
      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <ContactList
      // contacts={getFiltredContakts()}
      // onDeleteContact={deleteContact}
      />
    </div>
  );
};
