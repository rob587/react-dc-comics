

const ComicsCard = () => {
  return (
    <div className="card">
        <img 
        src={comic.thumb} 
        alt={comic.series} 
        />
        <h5>{comic.series}</h5>                  
    </div> 
    
  )
}

export default ComicsCard
