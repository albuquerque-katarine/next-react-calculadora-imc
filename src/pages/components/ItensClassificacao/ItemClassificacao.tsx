interface ItensClassificacaoProps {
    titulo:string;
    subtitulo:string;
    background: any;
}

export default function ItemClassificacao(props: ItensClassificacaoProps) {
    return (
        <article className={`item_classificar flex flex-col justify-center items-center gap-2 ${props.background}`}>
            <h4>{props.titulo}</h4>
            <div className={`flex flex-col justify-center items-center`}>
                <h5>{props.subtitulo}</h5>
            </div>
        </article>
    )
}