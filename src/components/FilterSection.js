// TODO: button list use const params
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const BtnFilter = styled.button`
  width: min-content;
  padding: 6px 12px;
  margin-right: 12px;
  background-color: #bebebe;
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  color: #fff;
  letter-spacing: 1.6px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #ffc236;
  }
`

function Filter() {
  return (
    <Container>
      <BtnFilter>All</BtnFilter>
      <BtnFilter>Todo</BtnFilter>
      <BtnFilter>Done</BtnFilter>
    </Container>
  )
}

export default Filter