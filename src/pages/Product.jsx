import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {

  /* 
  - url의 파라미터 정보를 가져올 수 있다.
  - 물품의 고유한 ID값을 사용하는데 적합하다.
  - 한가지 정보만 사용 가능.

  <Route path='/경로이름:파라미터정보'></Route>
  let {파라미터정보} = useParams()
  */

  let {num} = useParams()

  const [query, setQuery] = useSearchParams()
  console.log('인기글 여부 : ', query.get('best'));
  console.log('신규글 여부 : ', query.get('new'));
  

  return (
    <div>Product</div>
  )
}

export default Product