import {Title, Avatar} from '../components'
import * as D from '../data'
import {useOrCreate} from './useOrCreate'

export default function CreateOrUseTest() {
  // prettier-ignore
  const headTexts = useOrCreate<string[]>('headTexts', function() {
    return ['No.', 'Name', 'Job Title', 'Email Adress']
  })
  console.log('headTexts >>' + headTexts)

  const users = useOrCreate<D.IUser[]>('users', function () {
    return D.makeArray(10).map(D.makeRandomUser)
  })
  console.log('users>>' + users)

  const head = useOrCreate('head', function () {
    return headTexts.map(function (text) {
      return <th key={text}>{text}</th>
    })
  })

  const body = useOrCreate('children', function () {
    return users.map(function (user, index) {
      return (
        <tr key={user.uuid}>
          <th>{index + 1}</th>
          <td className="flex items-center">
            <Avatar src={user.avatar} size="1.5rem" />
            <p className="ml-2">{user.name}</p>
          </td>
          <td>{user.jobTitle}</td>
          <td>{user.email}</td>
        </tr>
      )
    })
  })

  return (
    <div className="mt-4">
      <Title>CreateOrUseTest</Title>
      <div className="p-4 mt-4 overflow-x-auto">
        <table className="table w-full table-zebra table-compact">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}
