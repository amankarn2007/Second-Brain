import Button from "./Button";
import { type Dispatch, type SetStateAction } from "react"

interface headerProps{
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

function Header(props: headerProps) {
  return(
    <div className="flex justify-between items-center pr-12 pl-4 py-2">
      <div className="flex items-center">
        { !props.isOpen && 
          <div className="pr-5 text-xl opacity-60 hover:opacity-100 cursor-pointer">
            <i className="fa-solid fa-bars" onClick={() => props.setOpen(prev => !prev)}></i>
          </div>
        }
        <h1 className="text-3xl font-medium">All Notes</h1>
      </div>

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

export default Header;