import type React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute( {children}: {children: React.ReactNode} ){
    const token = localStorage.getItem("token");

    if(!token){
        return <Navigate to={"/login"} />;
    }

    return <>{children}</>
}

//we have to return element(<></>) because we applied ProtectedRoute in Routes, andd Routes always need to render somethig