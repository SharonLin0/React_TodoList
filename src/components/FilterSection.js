import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../actions/filter'
import { FilterState, RouterPath, Text } from '../common/utils'

const Container = styled.div`
  display: flex;
`

const RouterLink = styled.span`
  width: min-content;
  padding: 6px 12px;
  margin-right: 12px;
  background-color: ${(props) => (props.active ? '#90A4AE' : '#bebebe')};
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  font-size: 18px;
  letter-spacing: 1.6px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #90A4AE;
  }
`

function Filter(props) {
  const dispatch = useDispatch()

  return (
    <Container>
      {Object.keys(FilterState).map(state => (
        <RouterLink
          key={state}
          active={props.selected === state}
          onClick={() => dispatch(actions.setFilter(state))}
        >
          <Link to={RouterPath[state]}>{Text[`FILTERSTATE_${state}`]}</Link>
        </RouterLink>
      ))}
    </Container>
  )
}

export default Filter