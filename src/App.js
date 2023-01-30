import styled from 'styled-components'
import './App.css'
import TaskList from './components/TaskList'
import TaskAdd from './components/TaskAdd'

const Wrapper = styled.div`
  width: 80%;
  height: 85vh;
  border-radius: 10px;
  background-color: #232931;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  margin: 16px auto;
`

const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
`

function App() {
  return (
    <Wrapper>
      <Title>todo list</Title>
      <TaskAdd />
      <TaskList />
    </Wrapper>
  )
}

export default App
