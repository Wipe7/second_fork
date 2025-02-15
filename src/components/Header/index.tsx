import styled from 'styled-components'
import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

// Definindo o tipo das props
type Props = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

// Criando os componentes estilizados
const HeaderContainer = styled.header`
  background-image: linear-gradient(
    45deg,
    ${props => props.theme.corPrincipal},
    ${props => props.theme.corSecundaria}
  );
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;
`

const Title = styled.h1`
  font-size: 18px;
  flex: 1;
  font-style: italic;
  color: ${props => props.theme.corFundo};
`

const CartInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 18px;
    margin-right: 8px;
    margin-left: 16px;
  }

  span {
    color: ${props => props.theme.corFundo};
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`

const Header = ({ itensNoCarrinho, favoritos }: Props) => {
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <HeaderContainer>
      <Title>EBAC Sports</Title>
      <CartInfo>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </CartInfo>
    </HeaderContainer>
  )
}

export default Header
