import * as S from './AccessibilityToolbar.styles';

export default function AccessibilityToolbar({ fontSize, setFontSize }){

  const increaseFontSize = (setState, state) => {
    setState(state + .1)
  }

  const decreaseFontSize = (setState, state) => {
    setState((oldState) => oldState > 0 ? state - .1 : 0)
  }

  return(
    <S.AccessibilityToolbar>
       <button onClick={() => increaseFontSize(setFontSize, fontSize)}>A+</button>
       <button onClick={() => decreaseFontSize(setFontSize, fontSize)}>A-</button>
    </S.AccessibilityToolbar>
  )
}