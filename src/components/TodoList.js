import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions/todo'
import { FilterState, Text } from '../common/utils'
import FilterSection from './FilterSection'
import TodoItem from './TodoItem'
import iconMarkAll from '../assets/mark.png'

const Wrapper = styled.div`
  display: ${(props) => (props.todo.length ? 'block' : 'none')};
  margin: 0 auto;
  max-width: 480px;
  min-width: 300px;

  @media (min-width: 1440px) {
    max-width: 780px;
    min-width: 600px;
  }
`

const Counter = styled.span`
  padding: 8px 0;
`

const Container = styled.div`
  background-color: #F3F3F3;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  min-width: 300px;
  min-height: 280px;

  @media (min-width: 1440px) {
    min-width: 600px;
  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`

const BtnMarkAll = styled.span`
  display: flex;
  background-color: #dbcb9e;
  border: 1px solid #dbcb9e;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
`

const Clear = styled.span`
  display: ${(props) => (props.isHaDoneTodos ? 'inline-block' : 'none')};
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function TodoList(props) {
  const dispatch = useDispatch()
  const storedTodos = useSelector((store) => store.todoReducer)

  const renderTodoList = () => {
    return storedTodos.map((todo) => {
      return ((props.filter === FilterState.ALL) ||
      (props.filter === FilterState.TODO && !todo.isDone) ||
      (props.filter === FilterState.DONE && todo.isDone)) && (<TodoItem key={todo.id} todo={todo} />)
    })
  }

  const getIsHasDoneTodos = () => storedTodos.some(todo => todo.isDone)
  const getTodoCountText = () => {
    let unDoneTodos = storedTodos.filter(todo => !todo.isDone)
    return `${unDoneTodos.length} ${unDoneTodos.length >= 2 ? Text.COUNTER_SUFFIX_PLURAL : Text.COUNTER_SUFFIX}`
  }

  return (
    <Wrapper todo={storedTodos}>
      <FilterSection selected={props.filter}/>
      <Container>
        {renderTodoList()}
        <Counter>{getTodoCountText()}</Counter>
      </Container>
      <Footer>
        <BtnMarkAll onClick={() => dispatch(actions.doneAllTodo())}>
          <img src={iconMarkAll} alt="mark all" />
          {Text.COMPLETE_ALL}
        </BtnMarkAll>
        <Clear
          isHaDoneTodos={getIsHasDoneTodos()}
          onClick={() => dispatch(actions.clearDoneTodo())}>
          {Text.REMOVE_COMPLETED}
        </Clear>
      </Footer>
    </Wrapper>
  )
}

export default TodoList