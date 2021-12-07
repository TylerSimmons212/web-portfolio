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
                    <p>I graduated and was certified by <a href="https://devmountain.com" target="_blank" >DevMountain</a> in April of 2019 as a full-stack developer.</p>
                    <p>Thanks to the blessing of a family, I have had the opportunity to work closely with different marketing agencies and their clients and start my road to specializing in e-commerce development.</p>
                    <p>I've always been a techy my whole life. Loving the details, advancements, and capabilities that technology has developed to become, I always knew that I wanted to be a part of it. As my brothers pursued careers in Marketing, they were significant influences in my choice to pursue web development.</p>
                    <p>Other than my excitement in following the latest news in technology developments. I'm also a big film junkie, and I love a good story. That's part of why I love UI development and working with marketing teams to help tell a company's story. </p>
                </section>
            </div>
        </div>
    )
}

export default About