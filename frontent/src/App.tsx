import "./App.css"
import Button from "./components/Button"

function App() {
  

  return (
    <div>
      <Button 
      variant={"primary"} 
      size={"md"} 
      text={"Share Brain"} 
      startIcon={<i className="fa-solid fa-share-nodes"></i>}
      onClick={() => "asdf"} />
    </div>
  )
}

export default App