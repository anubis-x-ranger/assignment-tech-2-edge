const CharacterRow=({item})=>{
  return(
  <div className="rows">
    <p>{item.name}</p>
    <p>{item.age}</p>
    <p>{item.profession}</p>
    <img src={`https://demo.tech2edge.co/samples/${item.img}`} alt=""/>
    {/* <div className="modal fade" id="imageModal">
    
    </div> */}
  </div>
  )
}
export default CharacterRow;