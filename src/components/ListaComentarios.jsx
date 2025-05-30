import comentarios from "../data/comentarios"

export default function ListaComentarios(){
    return(
        <>
        <h2>Comentários</h2>
        <ul>
            {comentarios.map((comentario)=> (
                <li key={comentario.id}>{comentario.nome}</li>
            ))}
        </ul>
        </>
    )
}