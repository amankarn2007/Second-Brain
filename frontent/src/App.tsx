import "./App.css"
import Button from "./components/Button"

function App() {
  

  return (
    <div className="m-6 gap-6">
      <Button 
      variant={"primary"} 
      size={"sm"} 
      text={"Share Brain"} 
      startIcon={<span className="material-symbols-outlined">share</span>}
      onClick={() => "asdf"} />

      <Button 
      variant={"secondary"} 
      size={"md"} 
      text={"Share Brain"} 
      onClick={() => "asdf"} />

      <Button 
      variant={"primary"} 
      size={"lg"} 
      text={"Share Brain"} 
      startIcon={<span className="material-symbols-outlined">share</span>}
      onClick={() => "asdf"} />
    </div>
  )
}

export default App