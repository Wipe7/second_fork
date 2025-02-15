import styled from 'styled-components'
import { Produto as ProdutoType } from '../App'
import ProdutoComponent from '../components/Produto'

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin: 40px 0;
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: red;
`

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const ProdutosContainer = ({
  produtos,
  favoritos,
  favoritar,
  adicionarAoCarrinho
}: Props) => {
  return (
    <ProdutosGrid>
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some((f) => f.id === produto.id)}
          favoritar={favoritar}
          aoComprar={adicionarAoCarrinho}
        />
      ))}
    </ProdutosGrid>
  )
}

export default ProdutosContainer
