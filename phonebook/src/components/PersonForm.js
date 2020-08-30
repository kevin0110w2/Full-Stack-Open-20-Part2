import React from 'react'

const PersonForm = ({ addPerson, newName, handleNameChange, newNo, handleNoChange }) => {
    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNo} onChange={handleNoChange} />
        </div>
        <div>
          <button type="submit">
            add
        </button>
        </div>
      </form>
    )
  }

  export default PersonForm;