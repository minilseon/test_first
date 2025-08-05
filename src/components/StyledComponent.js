import React from 'react'
import styled, {keyframes} from 'styled-components'

export default function StyledComponent() {

  const Wrap = styled.section`
    background: #ccc;
    // width: 800px;
    width: ${(props) => props.width};
    height: 200px;
    margin: 0 auto;
  `
  const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    line-height: 200px;
    // color: blue;
    color: ${(props) => props.blue ? 'blue' : 'green'};
  `
  const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    // background-color: yellow;
    background-color: ${(props) => props.bg || '#ccc'};
    &:hover {
      background-color: black;
      color: white;
    }
  `
  const FirstButton = styled(Button)`
    border-radius: 50%;
  `
  const Input = styled.input`
    border-radius: 10px;
    width: 150px;
    height: 30px;
    // color: blue;
    color: ${(props) => props.inputColor || 'blue'};
    margin: 5px;
  `
  const InputTwo = styled.input.attrs((props) => ({type: 'text', placeholder: 'input_two'}))`
    color: green;
  `
  const rotate = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
  `
  const Rotate = styled.div`
    margin-top: 100px;
    font-size: 50px;
    display: inline-block;
    animation: ${rotate} 1s infinite linear;
  `

  return (
    <div>
      
      <h1>Styled Components</h1>

      <Wrap width='800px'>
        <Title blue>Front_End</Title>
        <Title>Developer</Title>
      </Wrap>

      <Button>Default Button</Button>
      <Button bg='yellow'>Color Button</Button>
      <FirstButton>First Button</FirstButton>

      <br />

      <Input type='text' placeholder='input_one' inputColor='red' />
      <InputTwo />

      <Rotate>*</Rotate>

    </div>
  )
}
