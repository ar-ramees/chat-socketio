import React from 'react'
import { useContacts } from '../contexts/ContactProvider'
import { ListGroup } from 'react-bootstrap'

export default function Contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup varient='flush'>
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
