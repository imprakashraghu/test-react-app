import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Customer() {

    const { id } = useParams()

  return (
    <div>Customer {id}</div>
  )
}

export default Customer