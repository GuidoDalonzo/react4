import { useState, useEffect } from react
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import { getFetch } from '../../helpers/getFetch'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    useEffect(()=> {
        getFetch
        .then(resp => setProducto(resp(prod => prod.id === '1')))
        .catch(err => console.log(err))
        .finally(() => setloading(false))
    }, [])

  return (
    <div><ItemDetail></ItemDetail> </div>
  )
}

export default ItemDetailContainer