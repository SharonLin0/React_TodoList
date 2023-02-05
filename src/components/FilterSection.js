import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/filter'
import { FilterState, Text } from '../common/utils'

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
      {Object.keys(FilterState).map(state => (
        <BtnFilter
          key={state}
          active={props.selected === state}
          onClick={() => dispatch(actions.setFilter(state))}
        >
          {Text[`FILTERSTATE_${state}`]}
        </BtnFilter>
      ))}
    </Container>
  )
}

export default Filter