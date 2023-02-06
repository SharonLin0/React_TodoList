import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { Text } from '../common/utils'
import '../index.css'

const Wrapper = styled.div`
  min-height: 85vh;
  border-radius: 10px;
  background-color: #232931;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  margin: 16px;

  @media (min-width: 1440px) {
    min-height: 80vh;
    margin: 48px;
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
`

function App() {
  const filterStatus = useSelector((store) => store.filterReducer)

  return (
    <Wrapper>
      <Title>{Text.TITLE}</Title>
      <TodoAdd />
      <Routes>
        <Route path="/" element={<TodoList filter={filterStatus}/>} />
        <Route path="todo" element={<TodoList filter={filterStatus}/>} />
        <Route path="done" element={<TodoList filter={filterStatus}/>} />
      </Routes>
    </Wrapper>
  )
}

export default App
