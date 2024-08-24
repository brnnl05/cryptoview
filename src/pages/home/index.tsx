import { useState, FormEvent } from 'react'
import styles from './home.module.css'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

export function Home() {

  const [input, setInput] = useState("")

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    if(input === "") return;

    navigate(`/detail/${input}`)
  }

  function handleGetMore(){
    alert("teste")
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Digite o nome da moeda...ex: bitcoin"
          value={input}
          onChange={ (event) => setInput(event.target.value) }
        />
        <button type="submit" >
          <BsSearch size={30} color="#FFF" />
        </button>
      </form>


      <table>
        <thead>
          <tr>
            <th scope="column">Moeda</th>
            <th scope="column">Valor mercado</th>
            <th scope="column">Preço</th>
            <th scope="column">Volume</th>
            <th scope="column">Mudança 24h</th>
          </tr>
        </thead>

        <tbody id="tbody">

          <tr className={styles.tr}>

            <td className={styles.tdLabel} data-label="Moeda">
              <div className={styles.name}>
                <Link to={"/detail/bitcoin"}>
                  <span>Bitcoin</span> | BTC 
                </Link>
              </div>
            </td>

            <td className={styles.tdLabel} data-label="Valor mercado">
              1T
            </td>

            <td className={styles.tdLabel} data-label="Preço">
              8.000
            </td>

            <td className={styles.tdLabel} data-label="Volume">
              2B
            </td>

            <td className={styles.tdProfit} data-label="Mudança 24h">
              <span>1.20</span>
            </td>
          </tr>
        </tbody>
      </table>

      <button className={styles.buttonMore} onClick={handleGetMore}>
        Carregar mais
      </button>

    </main>
  )
}
  

  