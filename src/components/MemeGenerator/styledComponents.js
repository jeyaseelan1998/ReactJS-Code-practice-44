import styled from 'styled-components'

export const AppContainer = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div `
    display:flex;
    flex-direction: column;
`

export const Heading = styled.h1 `
    font-family: 'Open Sans';
    font-size: 38px;
    font-weight: 700;
    color: #35469c;
`

export const Label = styled.label `
    color: #7e858e;
    font-family: 'Open sans';
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
`

export const Input = styled.input `
    color:  #5a7184;
    font-family: 'Open sans';
    font-weight: 600;
    font-size: 14px;
    padding: 10px;
    margin-bottom: 15px;
`

export const Button = styled.button `
    padding: 12px 24px;
    color:  #fff;
    font-family: 'Open sans';
    font-weight: 600;
    font-size: 14px;
    background-color: #0b69ff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`

    // background-image: url('https://assets.ccbp.in/frontend/react-js/nature-img.png');
export const MemeContainer = styled.div `
    background-size: cover;
    margin-left: 25px;
    height: 350px;
    width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

export const MemeText = styled.p `
    color:  #fff;
    font-family: 'Open sans';
    font-weight: 600;
`
    // font-size: 14px;