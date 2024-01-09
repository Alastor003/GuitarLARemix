import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return [
    {
      title : 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Donec in tristique nibh. Praesent orci tortor, posuere sed convallis at, tincidunt ac mi. Mauris molestie odio ut enim congue, vitae luctus lorem posuere. Cras in dui diam. Aliquam erat volutpat. Praesent orci dui, viverra id accumsan sit amet, scelerisque ut justo. Cras sollicitudin lacus quis convallis sollicitudin. </p>
          <p>Donec in tristique nibh. Praesent orci tortor, posuere sed convallis at, tincidunt ac mi. Mauris molestie odio ut enim congue, vitae luctus lorem posuere. Cras in dui diam. Aliquam erat volutpat. Praesent orci dui, viverra id accumsan sit amet, scelerisque ut justo. Cras sollicitudin lacus quis convallis sollicitudin. </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
