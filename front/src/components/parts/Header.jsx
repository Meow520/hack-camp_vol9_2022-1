import "../../styles/App.css"


export const Header = ({name}) => {
  return (
      <div 
        className = "text-xl text-white text-center font-bold bg-blue-700 opacity-80 py-3 ">
        消えちゃっと-{name} room
      </div>      
  )
}