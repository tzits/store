import styled from 'styled-components'

export const AuthContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;
    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
  }
`
