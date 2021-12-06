import React, { useState, useEffect } from 'react';
import './featured.css';
import cro from '../../images/icons8-conversion-100.png';
import seo from '../../images/icons8-search-100.png';
import ss from '../../images/icons8-speed-100.png';
import crow from '../../images/icons8-conversion-100-2.png';
import seow from '../../images/icons8-search-100-2.png';
import ssw from '../../images/icons8-speed-100-2.png';


function Featured () {
    const [version, setVersion] = useState(false)

    let toggleVersion = () => {
        setVersion(!version)
        console.log(version)
    }

    useEffect(()=>{
        
    },[version])

    return(
        <div className="featured">
        {version==false?
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F2F2F2" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="featured-body">
            <h1>Developing Specifically for E-Commerce</h1>
            <section>
                <h2>Optimizing For Peak Performance</h2>
                <div className="tiles">
                    <div className="tile">
                        <img src={cro} alt="" />
                        <p>Conversion Rate Optimization</p>
                    </div>
                    <div className="tile">
                        <img src={ss} alt="" />
                        <p>Site Speed Optimization</p>
                    </div>
                    <div className="tile">
                        <img src={seo} alt="" />
                        <p>Search Engine Optimization</p>
                    </div>
                </div>
            </section>
            <section className="abtest">
                <h2>A / B Testing</h2>
                <p>A/B Testing allows marketers and businesses to test different variations of something whether it be a website, an email, or an ad to find what perfoms better.</p>
                <div className="switcher">


                    <h3>Test a different version of this section</h3>
                <label className="switch">
                    <input type="checkbox" onClick={toggleVersion}></input>
                    <span className="slider round"></span>
                </label>
                </div>
            </section>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F2F2F2" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,160C960,149,1056,75,1152,48C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>:
        <div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D2D0FF" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="featured-body2">
            <h1>Developing with E-Commerce in Mind</h1>
            <section>
                <h2>Get The Best Performance</h2>
                <div className="tiles2">
                    <div className="tile2">
                    <div className="tile-img">
                        <img src={crow} alt="" />
                    </div>
                        <p>Conversion Rate Optimization</p>
                    </div>
                    <div className="tile2">
                    <div className="tile-img">
                        <img src={ssw} alt="" />
                    </div>
                        <p>Site Speed Optimization</p>
                    </div>
                    <div className="tile2">
                    <div className="tile-img">
                        <img src={seow} alt="" />
                    </div>
                        <p>Search Engine Optimization</p>
                    </div>
                </div>
            </section>
            <section className="abtest2">
                <h2>A / B Testing</h2>
                <p>A/B Test a website, an email, or an ad to find the best performers.</p>
                <div className="switcher2">


                    <h3>Test a different version of this section</h3>
                <label className="switch">
                    <input type="checkbox" onClick={toggleVersion}></input>
                    <span className="slider round"></span>
                </label>
                </div>
            </section>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D2D0FF" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,160C960,149,1056,75,1152,48C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    }
        
    
        </div>
    )
}

export default Featured