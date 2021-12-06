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
                    <p>I graduated and was certified by <a href="https://devmountain.com" target="_blank" >DevMountain</a> in April of 2019 as a full stack developer.</p>
                    <p>Thanks to the blessing of families I then had the oppurtunity to work closely with a couple different marketing agencies to work with their clients and start my rode to specialising in e-commerce development.</p>
                    <p>I've always been a techy my whole life. Loving the details, advancements, and capabilities that technology has developed to be in the world I always knew that I wanted to be apart of it. As my brothers pursued careers in Marketing, they were big influences in my choice to pursue web development. </p>
                    <p>Other then my excitement in following the latest news in technology developments. I'm also a big film junkie. I love a good story. That's part of the reason why I love UI developent and working with marketing teams to help tell a companies story. </p>
                </section>
            </div>
        </div>
    )
}

export default About