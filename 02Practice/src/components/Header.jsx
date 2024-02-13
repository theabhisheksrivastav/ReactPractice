import React from "react";
import { useState , useEffect } from "react";

function Header() {
    
    return (
        <>
            <div className="bg-gray-600 flex justify-start">
            <h2 className="p-5">Icon</h2>
                <div className="flex justify-items-end">
                    <h2 className="p-3">Home</h2>
                    <h2 className="p-3">About</h2>
                    <h2 className="p-3">Contact</h2>

                </div>
            </div>
        </>
    )
}

export default Header;