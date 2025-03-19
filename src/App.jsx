import { useState } from 'react';
import { useEffect } from 'react';
import { db } from './config/Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useDisclouse } from '@headlessui/react';
import Navbar from './components/Navbar';
import First from './components/First';

function App() {
  const [count, setCount] = useState(0)

  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };


  return (
    <>
    <div className='mx-auto max-w-[378px] px-3'>
   <Navbar />
   <First />
    </div>
    </>
  );
}

export default App
