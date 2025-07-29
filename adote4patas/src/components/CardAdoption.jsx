import Btn from "./Button";
function CardAdoption({img, nome, tipo, info, sexo}) {
    return (
         <>
            <div className='step no-border-step'>
                {<img src={img} alt="" className="adpt-img"/>}
                <h4>{nome}</h4>
                <p>{tipo}</p>
                <p>{sexo}</p>
                <p>Sobre: {info}</p>
                <Btn content="Adotar" />
            </div>
       </>
    );
}

export default CardAdoption;