import { useState } from "react"
export default function FormCadastro() {
      const [usuario, setUsuario] = useState('')
  return (
    <div>
        <h2>Feed de Comentários</h2>
        <input type="text"
        placeholder="Nome do Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        />
    </div>
  )
}