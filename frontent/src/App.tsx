import "./App.css"
import Button from "./components/Button"
import Card from "./components/Card"
import { Sidebar } from "./components/Sidebar"

function App() {
  

  return (
    <div className="h-screen w-full flex">
      <Sidebar />

      <main className="flex-1 bg-white flex-col">
        <Header />

        <Content />
      </main>

    </div>
  )
}

export default App


function Header() {
  return(
    <div className="flex justify-between items-center px-12 py-2">
      <h1 className="text-3xl font-medium">All Notes</h1>

      <div className="flex items-center">
        <Button variant="primary" size="md" text="Share Brain" 
          startIcon={<span className="material-symbols-outlined">share</span>} 
          onClick={() => ""} 
        />

        <Button variant="secondary" size="md" text="Add Content" 
          startIcon={<i className="fa-solid fa-plus"></i>} 
          onClick={() => ""} 
        />
      </div>
      
    </div>
  )
}

function Content() {
  return(
    <div className="pt-2 px-12 flex">

      <Card 
        projectName="Notes Testing" 
        heading="heading testing"
        description="this is a description testing. dont try to craash our app, we'll file an case to you. this web application is for taking notes, links, posts etc."  
        tags="#productivity" 
        type="notes"
      />

      <Card 
        projectName="Youtube Testing"
        tags="#productivity" 
        type="youtube"
        link="https://youtu.be/xTtL8E4LzTQ?si=fpWyrGrEQ1rqnoJU"
      />

      <Card 
        projectName="X Post Testing"
        tags="#100xDevs" 
        type="x"
        link="https://x.com/kirat_tw/status/2015858697055174841"
      />

    </div>
  )
}