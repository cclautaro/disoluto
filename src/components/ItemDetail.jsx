
const img = require.context('../assets');

const ItemDetail = ({item}) => {
  return (
    <div>
        <ul>
            <li>{item.title}</li>
            <li>Categoria: {item.category}</li>
            <li>Descripcion: {item.desc}</li>
            <li>Precio: {item.price}</li>
        </ul>
        <img src={img(`./${item.id}.jpg`)} className = "w-[640px] h-[640px]"/>
        {item.colors.map( i => <li key={i}>{i}</li>)}

    </div>
  )
}
export default ItemDetail

// Queda pendiente darle un mejor formato a esta seccion y a todo en general.
// Tambien separar en carpetas.