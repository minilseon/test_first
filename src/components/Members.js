import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Member from './Member'

export default function Members() {
  return (
    <div>
      <h2>회원 리스트</h2>
      <ul>
        <li><Link to='/members/family'>Family</Link></li>
        <li><Link to='/members/silver'>Silver</Link></li>
        <li><Link to='/members/gold'>Gold</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/*' element={<div>등급을 클릭하시면 해당 회원정보를 볼수 있습니다.</div>} />
        <Route path=':memberShip' element={<Member />}/>
      </Routes>
    </div>
  )
}
