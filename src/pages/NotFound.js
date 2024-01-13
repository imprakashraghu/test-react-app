import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => navigate('/', { state: { phoneNumber: '1234567890', data: [] } }), 2000)
  }, [])

  return (
    <div>NotFound</div>
  )
}

export default NotFound