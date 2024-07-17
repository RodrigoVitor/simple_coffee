import { useEffect } from 'react'
import styles from './App.module.css'
import { useState } from 'react'
import { TypesOfCoffee } from './components/types_of_coffe'

function App() {
  const [data, setData] = useState()
  const imgExample = "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"

  async function api() {
    await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
      .then(response => response.json())
      .then(res => {
        setData(res)
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    api()
  }, [])

  return (
    <div className={styles.container_bg}>
      <div className={styles.bg_image} />
      <div className={styles.content}>
        <h1>Nossa Coleção</h1>

        <p className={styles.description}>
          Apresentando nossa coleção de cafés, uma seleção de cafés exclusivos <br /> de diferentes tipos de torra e origem, torrados em pequenos <br /> lotes e enviados frescos semanalmente
        </p>

        <div className={styles.navegation_links}>
          <a href="#" className={styles.active}>Todos Produtos</a>
          <a href="#">Disponivel agora</a>
        </div>

        <div className={styles.show_our_coffee}>
          {data && (
              <TypesOfCoffee data={data} />
            )}
        </div>

      </div>
    </div>
  )
}

export default App
