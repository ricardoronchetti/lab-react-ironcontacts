import { useState } from 'react'
import './App.css'
import contactsArray from "./contacts.json"
import hasWon from './components/hasWon'

function App() {

  const [contacts, setContacts] = useState(contactsArray.splice(0, 5))

  const changeContact = event => setContacts(event.target.value)

  return <table className="App">
    <p><strong>IronContacts</strong></p>
    <article>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(elm => {
            return (
              <tr key={elm._id}>
                <td><img src={elm.pictureUrl} alt={elm.name} /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                {/* 
                <td>if (elm.wonOscar) {
                    return <td>trophy</td>
                  } else if (elm.wonEmmy){
                    return <td>star</td>
                  } else {
                  }</td> */}

                <td>hasWon props={elm.wonOscar}</td>
                <td>hasWon props={elm.wonEmmy}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </article>
  </table>
}

export default App