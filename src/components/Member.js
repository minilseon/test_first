import React from 'react'
import memberList from './data'
import { useParams } from 'react-router-dom'

export default function Member() {

  const {memberShip} = useParams();
  const member = memberList[memberShip];

  return (
    <div>
      <h2>{memberShip}({member.name})</h2>
      <h3>{member.addr}</h3>
    </div>
  )
}
