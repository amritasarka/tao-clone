import styled from 'styled-components'

const Home = () => {
  return (
    <Wrap>
        <Main>

        </Main>
        <Features>

        </Features>
    </Wrap>
  )
}

export default Home

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`
const Main = styled.div`
    display: flex;
    height: 83vh;
    width:100vw;
    background: url('/images/background1.webp');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 83vh;
        background-image: linear-gradient(135deg, #BB2225 0%, #F2A341 100%);
        opacity: .95;
    }
`

const Features = styled.div`
    display: flex;
    height: 83vh;
    width:100vw;
    background: url('/images/background2.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`

