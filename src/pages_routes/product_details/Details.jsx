import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const { proId } = useParams();

    console.log(proId);
    
  return (
    <div>Details</div>
  )
}
