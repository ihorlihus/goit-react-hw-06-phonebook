import styled from '@emotion/styled';
import Button from './../ButtonStiled/Button';
import { useDispatch } from 'react-redux';
import { delContact } from '../../redux/contSlice';

const ListItemWrap = styled.li`
  display: flex;
  width: 300px;
  background-color: ${p => p.theme.colors.muted};
  justify-content: space-between;
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${props => props.theme.space[2]}px;
`;

const List = styled.ul`
  padding-left: ${p => p.theme.space[1]}px;
`;

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelContact = id => {
    dispatch(delContact(id));
  };

  return (
    <>
      {contacts.length > 0 ? (
        <List>
          {contacts.map(contact => {
            return (
              <ListItemWrap key={contact.id}>
                {contact.name}: {contact.number}
                <Button onClick={() => handleDelContact(contact.id)}>
                  Delete
                </Button>
              </ListItemWrap>
            );
          })}
        </List>
      ) : (
        <p>No any contact! add new</p>
      )}
    </>
  );
};

export default ContactList;
