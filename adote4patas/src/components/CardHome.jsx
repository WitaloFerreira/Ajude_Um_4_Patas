

function CardHome({img, title, description}) {
    return(
       <>
        <div className='step no-border-step'>
            {<img src={img} alt="" className="card-img"/>}
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
       </>
    );
}
export default CardHome;