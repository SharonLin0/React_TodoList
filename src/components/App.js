import styled from 'styled-components'
import TaskList from './TaskList'
import TaskAdd from './TaskAdd'
import { Text } from '../common/utils'
import '../App.css'

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
      <Title>{Text.TITLE}</Title>
      <TaskAdd />
      <TaskList />
    </Wrapper>
  )
}

export default App
