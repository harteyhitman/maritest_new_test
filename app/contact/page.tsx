import Footer from '../components/footer';
import Navbar from '../components/navbar';
import contact from './contact.module.css';

const Contacts = () => {
  return (
    <div className={contact['contacts']}>
      <Navbar />
      <Footer 
        className={contact["contact-main"]} 
        contactFooter={contact["contact-footer"]} 
        supportPartners={contact['partners']} 
        joinSupport={contact['support']}  
        contactUs={contact['contact-us']}
        formatted={contact['new-form']}
        inputContact={contact['input-contact']}
        inputContactArea={contact['text-area-input']}
        messageBtn={contact['message-btn']}
        ContactsLogo={contact['logo-contact']}
        ContactsLine={contact['line-contact']}
        contactCopyright={contact['contact-copyright']}
      />
    </div>
  );
}

export default Contacts;
