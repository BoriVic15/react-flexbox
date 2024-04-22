import React from "react";
import "./Flexbox.css";
import MyFunctions from "./MyFunctions"
function Flexbox() {
    return (
        <div>
            <div className="container_flex">
                <h2 className="link1">Home</h2>
                <h2 className="link1">News Update</h2>
                <h2 className="link1">Sport</h2>
                <h2 className="link1">Entertainment</h2>
                <h2 className="link1">Politics</h2>
                <h2 className="link1">Religion</h2>
                <h2 className="link1">Education</h2>
            </div> <br />
            <MyFunctions/>
            <div className="grid_container">
                <h2 className="grid1">Lifestyle</h2>
                <h2 className="grid2">Fashion</h2>
                <h2 className="grid3">Music</h2>
                <h2 className="grid4">Information</h2>
                
                <h2 className="grid1">Lifestyle</h2>
                <h2 className="grid2">Fashion</h2>
                <h2 className="grid3">Music</h2>
                <h2 className="grid4">Information</h2>

                <h2 className="grid1">Lifestyle</h2>
                <h2 className="grid2">Fashion</h2>
                <h2 className="grid3">Music</h2>
                <h2 className="grid4">Information</h2>

                <h2 className="grid1">Lifestyle</h2>
                <h2 className="grid2">Fashion</h2>
                <h2 className="grid3">Music</h2>
                <h2 className="grid4">Information</h2>
            </div>
        </div>
    );
}

export default Flexbox;