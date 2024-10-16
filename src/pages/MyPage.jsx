import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>MyPage
      <hr/>
      <h3>내가 쓴 글</h3>
      <div>
        <Link to ='/product/1'>
          <p>[1] 돈 좀 주실 분</p>
        </Link>
        <Link to ='/product/2?best=true&new=true'>
          <p>[2] 평생 먹고 살만큼</p>
        </Link>
        <Link to ='/product/3'>
          <p>[3] 간절해요</p>
        </Link>
        
      </div>
    </div>
  )
}

export default MyPage