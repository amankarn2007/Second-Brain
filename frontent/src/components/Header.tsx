import Button from "./Button";
import { type Dispatch, type SetStateAction } from "react"
import { useNavigate } from "react-router-dom";
interface headerProps{
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
  setPopup: Dispatch<SetStateAction<boolean>>
  setShare: Dispatch<SetStateAction<boolean>>
}

function Header(props: headerProps) {
  let navigate = useNavigate();

  return(
    <div className="flex justify-between items-center pr-12 pl-4 py-2">

      <div className="flex items-center">
        { !props.isOpen && 
          <div className="pl-2 text-xl opacity-60 hover:opacity-100 scale-100 hover:scale-125 transition-transform cursor-pointer">
            <i className="fa-solid fa-bars" onClick={() => props.setOpen(prev => !prev)}></i>
          </div>
        }
        <h1 className="text-3xl font-medium pl-8">All Notes</h1>
      </div>

      <div className="flex items-center">
        <Button variant="primary" size="md" text="Share Brain" 
          startIcon={<span className="material-symbols-outlined">share</span>} 
          onClick={() => props.setShare(prev => !prev)} 
        />

        <Button variant="secondary" size="md" text="Add Content" 
          startIcon={<i className="fa-solid fa-plus"></i>} 
          onClick={() => props.setPopup(prev => !prev)} 
        />

        <div className="pl-2 hover:underline" onClick={() => navigate("/")}>
          <label className="text-xl text-blue-800">Logout</label>
          <i className="fa-solid fa-arrow-right-from-bracket px-2"></i>
        </div>
      </div>
      
    </div>
  )
}

export default Header;