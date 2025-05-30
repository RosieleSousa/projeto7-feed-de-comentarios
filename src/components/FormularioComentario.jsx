import { useState } from "react"
export default function FormCadastro() {
      const [comentario, setComentario] = useState('')
  return (
    <div>
        <input type="text"
        placeholder="Digite seu Comentário..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}/>
    </div>
  )
}