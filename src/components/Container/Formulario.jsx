import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import '../Container/Item.css';
import CodOrder from './CodOrder';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import getFirestore from '../../Firebase/fireBase';

function Formulario(){

      const {cartList, addBuyer, priceTotal, buyerList} = useCartContext()

        const [datos, setDatos] = useState({
            nombre: '',
            telefono: '',
            email: '',
            vEmail:''
        })
        const [idOrder, setIdOrder] = useState('')
        const [load, setLoad] = useState(true)

      const  handleInputCahnge =(event)=>{
        console.log(event.target.value)
        setDatos({
          ...datos, 
          [event.target.name] : event.target.value
       })
    }

    addBuyer(datos)
      
    const generarOrden=(e)=>{
        e.preventDefault()
        const orden = {}

        orden.date= firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer ={nombre: buyerList.nombre,
                     telefono: buyerList.telefono,
                      email: buyerList.email,
                        vEmail: buyerList.vEmail}
        orden.total = priceTotal()

        orden.items = cartList.map(cartItem =>{
            const id= cartItem.id
            const nombre = cartItem.title
            const precio = cartItem.price
            return {id, nombre, precio}
        })

        setLoad(false)

        const db = getFirestore()
        //guardamos
        db.collection('orders').add(orden)
        .then(resp=> setIdOrder(resp.id))


    }



    return (
        <Fragment>
            <div>
            <form className="form" onSubmit={generarOrden}>
                <input type="text" name="nombre" placeholder="Nombre" 
                onChange={handleInputCahnge}/>
                <input type="tel" name="telefono" placeholder="Telefono" 
                onChange={handleInputCahnge}/>
                <input type="email" name="email" placeholder="Email"
                onChange={handleInputCahnge}/>
                <input type="email" name="vEmail" placeholder="Validar email" v
                onChange={handleInputCahnge}/>
                <button type="submit">Generar Orden</button>
            </form>
            {/* <h3>{datos.nombre} - {datos.email}</h3> -- aca compruebo si recibo los onChange*/}
            </div>
            {!load ?
                idOrder!=='' && 
                <CodOrder order={idOrder}/>
                :
                <Link to="/cartEmpty">
                    
                </Link>
            }
        </Fragment>
    )
}

export default Formulario
