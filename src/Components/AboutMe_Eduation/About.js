import './about.css';
import selfimg from '../../images/self.jpeg';

function About () {


    return(
        <div className="about">
            <h1>More About Me</h1>
            <div className="about-body">
            <div className="self-img">
                <img src={selfimg} alt="selfimg" />
            </div>
                <section className="about-text">
                    <p>I graduated from and was certified by <a href="https://devmountain.com" target="_blank" >DevMountain</a> in April of 2019 as a full-stack developer.</p>
                    <p>Thanks to the blessing of family, I have had the opportunity to work closely with different marketing agencies and their clients which started my road to specializing in e-commerce development.</p>
                    <p>I've been a techy my whole life. I love the details, advancements, and capabilities of technology. I always knew that I wanted to be a part of it. My brothers pursued careers in Marketing which significant influenced my decision to pursue web development.</p>
                    <p>I'm also a big film junkie, and I love a good story. That's part of why I love UI development and working with marketing teams to help tell a company's story. </p>
                </section>
            </div>
        </div>
    )
}

export default About