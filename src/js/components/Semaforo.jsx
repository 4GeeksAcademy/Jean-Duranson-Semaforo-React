import React, { useState } from "react";

const Semaforo = () => {

    const [selectedColor, setSelectedColor] = useState("");

    return (
       
        <div className="container-fluid mt-2 d-flex flex-column justify-content-center align-items-center">
            
            <div className="lamp-post bg-black"></div>
            
            <div className="box d-flex flex-column align-items-center bg-black">
                
                <div 
                    onClick={() => setSelectedColor("red")}
                    className={
                        "light red" + (selectedColor === "red" ? " glow" : "")
                    }
                ></div>

                <div 
                    onClick={() => setSelectedColor("yellow")}
                    className={
                        "light yellow" + (selectedColor === "yellow" ? " glow" : "")
                    }
                ></div>

                <div 
                    onClick={() => setSelectedColor("green")}
                    className={
                        "light green" + (selectedColor === "green" ? " glow" : "")
                    }
                ></div>

            </div>
        </div>
    );
};

export default Semaforo;