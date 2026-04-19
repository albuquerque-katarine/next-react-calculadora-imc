import { useState } from "react";
import ClassificarImc from "../ClassificarImc/ClassificarImc";
import FormImc from "../FormImc/FormImc";
import Header from "../Header/Header";
import TotalImc from "../TotalImc/TotalImc";

export default function PesoIdeal() {

    const [peso,setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const [imc, setImc] = useState<number>(0);

    function calcularImc() {        
        let calcImc = peso / (altura * altura);
        if(Number.isNaN(calcImc)) {
            setImc(0);
        }
        else {
            setImc(calcImc); 
        }
    }

    return(
        <div className='pesoideal flex flex-col w-full'>
            <section className='pesoideal_row flex w-full justify-center items-center gap-10'>
                <div className='pesoideal_coluna flex flex-col justify-center items-center '>
                    <Header/>
                    <TotalImc vImc={imc.toFixed(1)}/>
                </div>
                <div className='pesoideal_coluna flex flex-col justify-center items-center text-left'>
                    <FormImc vPeso={peso} vAltura={altura} setPeso={setPeso} setAltura={setAltura} funcCalcular={calcularImc}/>
                    <ClassificarImc vImc={imc}/>
                </div>
            </section>
            <footer className='flex flex-col justify-center items-center w-full h-20'>
                <h5>Portfólio@2026</h5>
            </footer>
        </div>
    );
}