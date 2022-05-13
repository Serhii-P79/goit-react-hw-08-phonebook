import { ContactForm, ContactCounter, Filter, ContactList } from 'components';
import { Container } from './ContactsPage.styled';

export function ContactsPage() {
  return (
    <Container>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <ContactCounter />
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
