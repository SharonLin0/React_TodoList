import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/filter'
import { FilterState } from '../common/utils'

const Container = styled.div`
  display: flex;
`

const BtnFilter = styled.button`
  width: min-content;
  padding: 6px 12px;
  margin-right: 12px;
  background-color: ${(props) => (props.active ? '#f5d15d' : '#bebebe')};
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  font-size: 18px;
  color: #fff;
  letter-spacing: 1.6px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f5d15d;
  }
`

function Filter(props) {
  const dispatch = useDispatch()

  return (
    <Container>
      <BtnFilter
        active={props.selected === FilterState.ALL}
        onClick={() => dispatch(actions.setFilter(FilterState.ALL))}
      >
        All
      </BtnFilter>
      <BtnFilter
        active={props.selected === FilterState.TODO}
        onClick={() => dispatch(actions.setFilter(FilterState.TODO))}
      >
        Todo
      </BtnFilter>
      <BtnFilter
        active={props.selected === FilterState.DONE}
        onClick={() => dispatch(actions.setFilter(FilterState.DONE))}
      >
        Done
      </BtnFilter>
    </Container>
  )
}

export default Filter