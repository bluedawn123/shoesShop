import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from './data.js';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')} }>Test</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ 
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
              {
                shoes.map( (a, i) => {
                  return(
                    <Card shoes={shoes[i]} i={i} />
                  )
                })
              }
              </div>
            </div>
          </>
         } />

        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> } />

        <Route path="/about" element={ <About/> } >
          <Route path="member" element={ <div>멤버들</div>}></Route>
          <Route path="location" element={ <div>위치</div>}></Route>
        </Route>

        <Route path="*" element={ <div>없는 페이지입니다.</div> } />
      </Routes>
    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i +1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
