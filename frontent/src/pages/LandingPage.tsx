import { Link } from "react-router-dom";


function LandingPage() {
    return(
        <div className="h-screen w-full bg-[#b6d4b2]">
            <header className="h-25 w-full bg-gray-100 flex justify-center">
                <div className="w-full flex  items-center pb-2">
                    <span className="material-symbols-outlined text-5xl! text-blue-700 ml-5">neurology</span>
                    <h2 className="text-2xl font-medium ml-2">Second Brain</h2>
                </div>

                <div className="flex w-2/4 justify-center items-center pb-2 gap-3">
                    <div className="px-5 bg-blue-100 py-2 rounded-4xl hover:bg-blue-200">
                        <Link to={"/"}> About us </Link>
                    </div>
                    <div className="px-5 bg-blue-100 py-2 rounded-4xl hover:bg-blue-200">
                        <Link to={"/"}> Contact Us </Link>
                    </div>
                    <div className="px-5 bg-blue-100 py-2 rounded-4xl hover:bg-blue-200">
                        <Link to={"/signup"}> Signup </Link>
                    </div>
                    <div className="px-5 py-2 bg-blue-100 rounded-4xl hover:bg-blue-200">
                        <Link to={"/login"}> Login </Link>
                    </div>
                </div>
            </header>

            <div className="flex-1">
                <Main />
            </div>

        </div>
    )
}

export default LandingPage;

function Main() {
    return(
        <div className="">
            <img src="./public/cover.png" alt="background-image" 
            className="h-[calc(100vh-100px)] w-full object-contain" />
        </div>
    )
}