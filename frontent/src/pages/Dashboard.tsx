import { useState } from "react"
import "../App.css"
import Header from "../components/Header"
import Content from "../components/Content"
import { Sidebar } from "../components/Sidebar"
import { CreateContentModal } from "../components/CreateContentModal"
import ShareContentModal from "../components/ShareContentModal"

function Dashboard() {
  const [open, setOpen] = useState(true);
  const [popup, setPopup] = useState(false);
  const [share, setShare] = useState(false);

  return (
    <div className="h-screen w-full flex">
      <ShareContentModal share={share} setShare={setShare} />
      <CreateContentModal popup={popup} setPopup={setPopup} />

      <Sidebar isOpen={open} setOpen={setOpen} />

      <main className="flex-1 bg-white flex-col px-2">
        <Header isOpen={open} setOpen={setOpen} setPopup={setPopup} setShare={setShare} />
        <Content />
      </main>

    </div>
  )
}

export default Dashboard