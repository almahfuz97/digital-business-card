import React from "react"
import self2 from "../Images/self2.JPG"
import Facebook from "../Images/Facebook.png"
import Instagram from "../Images/Instagram.png"
import Twitter from "../Images/Twitter.png"
import GitHub from "../Images/GitHub.png"

function Card() {
    return (
        <section className="main-section">
            <div className="main-card-section">
                <div className="head">
                    <div>
                        <img className="head-pic" src={self2} alt="header picture"></img>
                    </div>
                    <div className="personal-info">
                        <h1 className="name">Abdullah Al Mahfuz</h1>
                        <p className="designation">Full Stack Developer</p>
                        <p></p>
                        <div className="btn-div">
                            <button>
                                Email
                            </button>
                            <button>
                                Linkedin
                            </button>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <div className="about">
                            <h3>About</h3>
                            <p>I am a full stack developer with a particular interest in making things simple and automating daily tasks. I try to keeep up with security and best practices, and am always looking for new things to learn.</p>
                        </div>
                        <div className="interests">
                            <h3>
                                interest
                            </h3>
                            <p>
                                Food expert. Movie Geek. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                            </p>
                        </div>

                    </div>
                </div>
                <footer>

                    <a href="https://www.facebook.com/atomsmasherr/" target="_blank"> <img src={Facebook}></img> </a>
                    <a href="https://www.github.com/almahfuz97" target="_blank"> <img src={GitHub}></img></a>
                    <a href="https://www.twitter.com/atomsmaherr" target="_blank"> <img src={Twitter}></img></a>
                    <a href="https://www.instagram.com/atom_smasher97" target="_blank"> <img src={Instagram}></img></a>

                </footer>

            </div>


        </section >
    )
}

export default Card;