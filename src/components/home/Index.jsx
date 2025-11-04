import React from 'react'
import Container from './../common/Container';
import {imgProvider} from '../../helpers/imgProvider'

const Header = () => {
    
  return (
    <section>
        <Container>
             <picture>
                <img src={imgProvider.logo} alt="" />
             </picture>
        </Container>
    </section>
  )
}

export default Header