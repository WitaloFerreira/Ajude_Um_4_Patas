function CardAdoption({img, nome, categoria}){
    return (
         <>
            <div className='step no-border-step'>
                {<img src={img} alt="" className="adpt-img"/>}
                <h4>{nome}</h4>
                <p>{categoria}</p>
            </div>
       </>
    );
}

export default CardAdoption;