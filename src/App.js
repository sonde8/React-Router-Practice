import './App.css';
import { Routes, Route } from 'react-router-dom' 
import Main from './pages/Main'
import About from './pages/About'
import MyPage from './pages/MyPage'
import Product from './pages/Product'

function App() {
  /* React-Router-Dom
    1. npm i react-router-dom 설치
    2. index.js로 가서 App을 BrowserRouter로 감싸주기
      - Type Error : Cannot read properties of undefined
        -> BrowserRouter를 감싸주지 않았기 때문에 생기는 오류, 라우팅을 잘못한 경우
        -> HTML5의 HistoryAPI를 사용하여 URL과 UI를 동기화 해주는 Router

    3. 페이지 만들기
      - 페이지 역할을 해주는 컴포넌트 
      - 컴포넌트를 요청할 조건 path (Routes, Route)
        Routes : 여러 Route를 감싸서 그 중 사용자 요청 조건에 맞는
                라우트 하나만 렌더링 해준다
        Route : 여러 경로
                - 필수속성 2가지 path, element
                - path (경로) : 사용자가 이렇게 요청했을 때
                - element (컴포넌트) : 어떤 컴포넌트를 보여줄지
  */

  return (
    <div>
      {/* Routes 밖에 있는 요소들은 라우트  처리와 관계없이 고정
        - 상단바, 하단바 등등 고정되어있어야하는 요소들은 Routes 밖에 위치
      */}
      <h1>React-Router-Dom 실습</h1>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
