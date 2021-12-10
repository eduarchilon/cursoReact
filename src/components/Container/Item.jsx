import './Item.css';
import {Link} from 'react-router-dom';

function Item({item}) {
    


    const {id, title, price, pictureUrl, descripcion} = item;

    return (
        <div className="card__container" id={id}>
            <img src={pictureUrl} alt="imagen" />
            <div className="card__cuerpo">
                <h3>{title}</h3>
                <h4>$ {price}</h4>
            </div>
            <div className="card__descripcion">
                <p>{descripcion}</p>
            </div>
            <div className="btn-detail">
                <Link to={`/detail/${id}`}>
                    <button>Ver Detalle</button>
                </Link>
            </div>
        </div>
    )
}


export default Item;