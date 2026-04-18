import ItemClassificacao from "../ItensClassificacao/ItemClassificacao";

interface ClassificarImcProps {
    vImc: number
}

export default function ClassificarImc(props: ClassificarImcProps) {
    return (
        <section className="itens_classificacao flex justify-between items-start w-full gap-12">
            <ItemClassificacao 
                background={props.vImc < 18.5? "item_selecionado" : "item_nao_selecionado" }
                titulo="Abaixo do Peso" 
                subtitulo="Abaixo de 18.5"/>
            <ItemClassificacao 
                background={props.vImc >= 18.5 && props.vImc < 24.9? "item_selecionado" : "item_nao_selecionado"}
                titulo="Peso Normal" 
                subtitulo="18.5 - 24.9"/>
            <ItemClassificacao 
                background={props.vImc >= 24.9 && props.vImc < 29.9? "item_selecionado" : "item_nao_selecionado"} 
                titulo="Sobrepeso" 
                subtitulo="25.0 - 29.9"/>
            <ItemClassificacao 
                background={props.vImc >= 29.9 && props.vImc < 34.9? "item_selecionado" : "item_nao_selecionado"} 
                titulo="Obesidade Grau I" 
                subtitulo="30.0 - 34.9"/>
            <ItemClassificacao 
                background={props.vImc >= 34.9 && props.vImc <= 39.9? "item_selecionado" : "item_nao_selecionado"}
                titulo="Obesidade Grau II" 
                subtitulo="35.0 - 39.9"/>
            <ItemClassificacao 
                background={props.vImc > 40.0? "item_selecionado" : "item_nao_selecionado"} 
                titulo="Obesidade Grau III" 
                subtitulo="Acima de 40.0"/>
        </section>
    )
}