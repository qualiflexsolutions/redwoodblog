import type { FindContacts } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Contacts from 'src/components/Contact/Contacts'

export const QUERY = gql`
  query FindContacts {
    contacts {
      id
      name
      email
      message
      phone
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No contacts yet. '}
      <Link
        to={routes.newContact()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contacts }: CellSuccessProps<FindContacts>) => {
  return <Contacts contacts={contacts} />
}
