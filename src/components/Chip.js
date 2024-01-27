import React from "react";

export default function Chip({name, deleteChip, key, setFocusedChip, focusedChip}){
    return(
        <>
            <div className="mt-1">            
                <div className={`w-[90px] mx-1 text-center items-center rounded-lg px-2 py-1 text-sm font-medium bg-gray-200 text-gray-600 ${focusedChip === name ? "ring-2 ring-blue-500" : ""}`} 
                    key={key}
                    onClick={setFocusedChip(name)}
                >
                    <span className="text-center">{name}</span>
                    <button className="mx-1 float-right" onClick={()=>deleteChip(name, key)}>X</button>
                </div>
            </div>
        </>
    )
}