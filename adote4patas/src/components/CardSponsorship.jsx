import Btn from "./Button";
function CardSponsorship({img, nome, tipo, info,}) {
    return (
         <>
            <div className='step no-border-step'>
                {<img src={img} alt="" className="adpt-img"/>}
                <h4>{nome}</h4>
                <p>{tipo}</p>
                <p>Sobre: {info}</p>
                <Btn content="Apadrinhar" />
            </div>
       </>
    );
}

export default CardSponsorship;