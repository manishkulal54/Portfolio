import React from 'react'

import ModeToggler from './ModeToggler'
import Navbar from './Navbar'

import beginningImg from '../Images/project/beginningProject.png'
import textUtilAppImg from '../Images/project/textUtilsApp.png'
import foodRecipeImg from '../Images/project/foodRecipe.png'

export default function Projects(props) {
    return (
        <>
            <div className="hamburger-pos" style={{ top: '15px' }}>
                <Navbar mode={props.mode} />
            </div>
            <div className="toggleMode">
                <ModeToggler toggleMode={props.toggleMode} mode={props.mode} />
            </div>  
                <h2 className='mt-7'>Projects</h2>
            <div className="container mt-3 mb-3 d-flex flex-wrap justify-content-around align-items-center">

                <div className="card mb-5" style={{width: "18rem",height:'max-content'}}>
                    <img src={beginningImg} className="card-img-top" alt="First project Img"/>
                        <div className="card-body">
                            <h5 className="card-title">First combined project</h5>
                            <p className="card-text">It is the first project with many sub projects</p>
                            <a href="https://bbqlnow0karreseypovyxq.on.drv.tw/mywebsite/main.html" target={"blank"} className="btn btn-primary">Open project</a>
                        </div>
                </div>
                <div className="card mb-5" style={{width: "18rem",height:'max-content'}}>
                    <img src={textUtilAppImg} className="card-img-top" alt="First project Img"/>
                        <div className="card-body">
                            <h5 className="card-title">TextUtils App</h5>
                            <p className="card-text">You can modify your text here </p>
                            <a href="https://manishkulal-textutil.netlify.app" target={"blank"} className="btn btn-primary">Open project</a>
                        </div>
                </div>
                <div className="card mb-5" style={{width: "18rem",height:'max-content'}}>
                    <img src={foodRecipeImg} className="card-img-top" alt="First project Img"/>
                        <div className="card-body">
                            <h5 className="card-title">Food Recipe</h5>
                            <p className="card-text">Search the food Recipe</p>
                            <a href="https://manishkulal-foodrecipe.netlify.app/" target={"blank"} className="btn btn-primary">Open project</a>
                        </div>
                </div>
            </div>
        </>
    )
}
