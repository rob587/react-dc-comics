

const ComicsCard = ({ thumb, series}) => {
  return (
    <div className="card">
        <img 
        src={thumb} 
        alt={series} 
        />
        <h5>{series}</h5>                  
    </div> 
    
  )
}

export default ComicsCard
