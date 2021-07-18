import styled from 'styled-components/macro'

export const Home = styled.main`
  font-size: ${({ fontSize }) => `${fontSize * 14}px` };
  margin: 5% 10%;
`

export const Paragraph = styled.p`
  font-size: ${({ fontSize }) => `${fontSize * 14}px` };
  margin-bottom: 3rem;
`


export const ParagraphBold = styled.p`
  font-size: ${({ fontSize }) => `${fontSize * 14}px` };
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const Footer = styled.footer`
  font-size: ${({ fontSize }) => `${fontSize * 14}px` };
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a { margin-bottom: 0.5rem; }
`

export const Title = styled.h1`
  font-size: ${({ fontSize }) => `${fontSize * 18}px` };
  
`

export const SectionOne = styled.section`
  font-size: ${({ fontSize }) => `${fontSize * 14}px` };
  
`

export const SectionTwo = styled.section`
  font-size: ${({ fontSize }) => `${fontSize * 14}px` };
  
`

export const Link = styled.a`
  font-size: ${({ fontSize }) => `${fontSize * 14}px` };
  
`