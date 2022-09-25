import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contSlice';
import styled from '@emotion/styled';
import Button from 'components/ButtonStiled/Button';

const ContactFormWrap = styled.form`
  display: flex;
  width: max-content;
  flex-direction: column;
  background-color: ${p => p.theme.colors.muted};
  gap: ${props => props.theme.space[2]}px;
  margin-left: ${p => p.theme.space[1]}px;
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  input:focus,
  input:hover {
    outline: none;
    border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.primary};
  }
`;

function SignUpForm() {
  const contactsState = useSelector(state => state).contacts;

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    contactsState.find(contact => contact.name.toLowerCase() === name)
      ? alert(name + ' is already in contacts')
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <ContactFormWrap onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Tel</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </ContactFormWrap>
  );
}

export default SignUpForm;
