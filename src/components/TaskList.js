import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FilterState } from '../common/utils'
import FilterSection from './FilterSection'
import TaskItem from './TaskItem'

const Wrapper = styled.div`
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 780px;
    min-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 480px;
    min-width: 340px;
  }
`

const Container = styled.div`
  background-color: #bebebe;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
`

function TaskList() {
  const storeDefaultTask = useSelector((store) => store.todoReducer)
  const filterStatus = useSelector((store) => store.filterReducer)

  const renderTaskList = () => {
    return storeDefaultTask.map((task, index) => {
      return ((filterStatus === FilterState.ALL) ||
      (filterStatus === FilterState.TODO && !task.isDone) ||
      (filterStatus === FilterState.DONE && task.isDone)) && (<TaskItem key={task.name} task={{...task, idx: index}} />)
    })
  }

  return (
    <Wrapper>
      <FilterSection selected={filterStatus}/>
      <Container>
        {renderTaskList()}
      </Container>
    </Wrapper>
  )
}

export default TaskList