import React, { useState } from 'react'

const ManageData = () => {
    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number + 15)}>Somar 15</button>
        </div>
  )
}

export default ManageData