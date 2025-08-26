import Comicslist from "./Comicslist"


const Main = () => {
  return (
    <main>
        
        <div className="bg-comics">

        <div className="overlap-btn">
            <div className="btn-box">
            <button>Current Series</button>
            </div>
        </div>
        
        </div>

      <Comicslist />

        <div className="content-div">
            <div className="imgs-text">
                <img className="tag" src="../src/assets/img/card.png" alt="" />
                <h3>Digital Comics</h3>
            </div>
            <div className="imgs-text">
                <img className="tag" src="../src/assets/img/merch.png" alt="" />
                <h3>Digital Comics</h3>
            </div>
            <div className="imgs-text">
                <img className="tag" src="../src/assets/img/sub.png" alt="" />
                <h3>Digital Comics</h3>
            </div>
            <div className="imgs-text">
                <img className="tag" src="../src/assets/img/shop.png" alt="" />
                <h3>Digital Comics</h3>
            </div>
            <div className="imgs-text">
                <img className="tag" src="../src/assets/img/power.svg" alt="" />
                <h3>Digital Comics</h3>
            </div>
            
        
        </div>
    </main>
  )
}

export default Main
