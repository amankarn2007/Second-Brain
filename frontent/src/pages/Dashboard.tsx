import { useState } from "react"
import "../App.css"
import Header from "../components/Header"
import Content from "../components/Content"
import { Sidebar } from "../components/Sidebar"
import { CreateContentModal } from "../components/CreateContentModal"
import ShareContentModal from "../components/ShareContentModal"
import FetchContent from "../hooks/FetchContent"
import { ShareNotesLink } from "../components/ShareNotesLink"

function Dashboard() {
  const [open, setOpen] = useState(true); //sidebar state
  const [popup, setPopup] = useState(false); //addContent state
  const [share, setShare] = useState(false); //all notes share state
  const [singleShare, setSignleShare] = useState(false); //single notes share state
  const [contentId, setContentId] = useState(""); //isme Card se content id store hoga

  const { content, fetch } = FetchContent(); //to fetch again when new content added. we've to pass fetch through props. here we'll access content and pass in "Content" bcs if we access content in "Content" then refresh will re-render only "Dashboard component", not our "Content component".
  

  return (
    <div className="h-screen w-full flex overflow-hidden">
      <ShareContentModal share={share} setShare={setShare} />
      <CreateContentModal popup={popup} setPopup={setPopup} refresh={fetch} />
      <ShareNotesLink singleShare={singleShare} setSignleShare={setSignleShare} contentId={contentId} />

      <Sidebar isOpen={open} setOpen={setOpen} />

      <main className="flex-1 bg-white flex-col px-2 overflow-y-scroll">
        <Header isOpen={open} setOpen={setOpen} setPopup={setPopup} setShare={setShare} />
        <Content content={content} refresh={fetch}  setSignleShare={setSignleShare} setContentId={setContentId} />
      </main>

    </div>
  )
}

export default Dashboard