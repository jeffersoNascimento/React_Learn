import Item from './Item'

function List() {

    return(
        <>
          <h1>Minha Lista</h1>
          <ul>
            <Item marca="Ferrari" ano_lancamento={1995}/>
            <Item marca="Mercedes" ano_lancamento={2015}/>
            <Item marca="BMW" ano_lancamento={2000}/>
            <Item />
          </ul>
        </>
    )

}

export default List