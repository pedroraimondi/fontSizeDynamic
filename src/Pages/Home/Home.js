import { useState } from 'react';
import AccessibilityToolbar from '../../Components/AccessibilityToolbar';
import * as S from './Home.styles';

export default function Home(){
  const [fontSize, setFontSize] = useState(1);

  const defaultProps = { fontSize };

  return(
    <S.Home>
      <AccessibilityToolbar {...defaultProps} setFontSize={setFontSize} />
      <S.Title {...defaultProps} >Snoopy, </S.Title>
      <S.SectionOne {...defaultProps} >
        <S.Paragraph {...defaultProps} >hoje um sucesso absoluto nas tiras de quadrinhos, na televisão, na Internet – tem até seu próprio site -, no teatro e em outras mídias, é um cachorro da raça beagle, protagonista da história originalmente intitulada Peanuts, criada pelo quadrinista Charles Schulz.</S.Paragraph>
        <S.Paragraph {...defaultProps} >Em 2000 esta clássica narrativa atingiu os 50 anos de existência, como um estrondoso êxito de seu criador, que a trouxe à vida em 02 de outubro de 1950, depois de percorrer uma verdadeira odisséia para ver sua tira aprovada. A turma que frequenta estes famosos quadrinhos foi gerada em 1947, conhecida então como Lil’ Folks ou, em português, Gente Pequena. Esta história era publicada no periódico St. Paul Pioneer Press, mas foi suspensa depois de dois anos, quando o autor insistiu para que ela fosse editada todos os dias, o que culminou em sua dispensa do jornal.</S.Paragraph>
      </S.SectionOne>
      <S.SectionTwo {...defaultProps} >
        <img alt="Personagem Snoopy sentado olhando para a esquerda" src="https://www.infoescola.com/wp-content/uploads/2009/08/snoopy.gif"/>
        <S.Paragraph {...defaultProps} >Mas Schulz sempre foi persistente, e assim continuou aprimorando sua obra e remetendo o resultado de seus esforços para a United Feature Syndicate, distribuidora de histórias em quadrinho, que invariavelmente a rejeitava. Na segunda metade de 1950, porém, tudo mudou. Após uma visita à diretoria deste sindicato, sua idéia foi finalmente aceita, com a condição de que ele mudasse seu título, batizando-a de Peanuts, nome com o qual ele concordou a contragosto. O curioso, porém, é que Snoopy ainda não existia nos primeiros episódios, aparecendo posteriormente como um filhote de cachorro adotado por Charlie Brown, um dos personagens principais da tira, que depois passa a ser um contraponto do cãozinho.</S.Paragraph>
        <S.Paragraph {...defaultProps} >A história logo se tornou uma espécie de cult no universo dos quadrinhos e, aos poucos, em outros espaços. Nasceram as animações, os espetáculos teatrais – uma peça da Broadway, Good Man, Charlie Brown, vencedora de dois prêmios Tony -, e inúmeros produtos licenciados pelos gestores das tiras, entre eles camisetas, relógios, videogames, e outros mais. O sucesso foi tão amplo, que Snoopy deixou suas marcas até mesmo na Lua, durante a visita dos astronautas, em 1969, transportado pela cápsula que ali aterrissou pela primeira vez. Atualmente são produzidas aproximadamente 355 milhões de tiras, publicadas em 2600 periódicos, em pelo menos 26 idiomas; as animações conquistam cerca de 6,6 milhões de infantes em todo o Planeta, só no Nickelodeon, canal fechado dos EUA. Sem falar no site, que é visitado todos os dias por 2 milhões de internautas.</S.Paragraph>
        <S.Paragraph {...defaultProps} >Snoopy, que originalmente se chamaria Sniffy, foi ao longo de dois anos um cachorro comum, sem falas. Em 19 de outubro de 1952 ele falou pela primeira vez, procedimento que daí em adiante foi adotado incessantemente por seu criador. Aos poucos ele passa a caminhar nas duas patas e a habitar o universo onírico, no qual assume distintas personalidades, contrapondo-se ao seu proprietário, Charlie Brown, um irremediável integrante do mundo real.</S.Paragraph>
        <S.Paragraph {...defaultProps} >As histórias giram em torno das aventuras e desventuras destes dois distintos personagens; Snoopy, que ao adormecer no telhado de sua casa alimenta sonhos extraordinários, que dão origem a episódios altamente criativos, nos quais ele assume as mais variadas personas, desde um aviador que combateu na Primeira Guerra Mundial a um escritor frustrado, mas persistente, passando por Joe Cool, que se transforma ao se ocultar por trás de óculos de sol, em uma atitude zen e displicente. E Charlie Brown, que junto a sua turma responde pela essência filosófica da história, que já inspirou diversas pesquisas acadêmicas, até mesmo uma tese do italiano Umberto Eco. Isto porque Schulz transmite, por meio de crianças, debates, questões e aflições do universo adulto. Alguns vêem nestas tiras um viés até mesmo terapêutico. Este quadro de personagens especiais, que conquista adeptos em todas as partes do mundo, se completa com a presença de um pássaro singular, o célebre Woodstock, companheiro de Snoopy.</S.Paragraph>
        <S.Paragraph {...defaultProps} >O Beagle fala um pouco de francês, é claustrofóbico, detesta doce de côco e biscoitos, tem uma casa ampla o bastante para conter uma piscina e até mesmo obras de arte, morre de medo das frações de gelo suspensas sobre sua morada e não obteve sucesso no curso de geometria. Além disso, criou sua própria coreografia, a Snoopy Dance.</S.Paragraph>
      </S.SectionTwo>
      <S.Footer>
        <S.ParagraphBold {...defaultProps} >Fontes</S.ParagraphBold>
        <S.Link {...defaultProps} href="http://pt.wikipedia.org/wiki/Snoopy">http://pt.wikipedia.org/wiki/Snoopy</S.Link>
        <S.Link {...defaultProps} href="http://hq.cosmo.com.br/TEXTOS/quadrindex/qsnoopy.shtm">http://hq.cosmo.com.br/TEXTOS/quadrindex/qsnoopy.shtm</S.Link>
      </S.Footer>
    </S.Home>
  )
}