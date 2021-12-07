import './skills.css'
import liquid from '../../images/liquid.png'




function Skills () {


    return(
        <div className="skills">
                <h1>My Skills</h1>
                <div className="skills-body">
                    <section>
                        <h2>Development:</h2>
                        
                        <ul className="skills-ul">
                            <li className="skills-li">
                                <i class="fab fa-html5"></i>
                                <p>HTML 5</p>
                            </li>
                            <li className="skills-li">
                                <i class="fab fa-react"></i>
                                <p>React</p>
                            </li>
                            <li className="skills-li">
                                <i class="fab fa-css3-alt"></i>
                                <p>CSS 3</p>
                            </li>
                            <li className="skills-li">
                                <i class="fab fa-js-square"></i>
                                <p>Javascript</p>
                            </li>
                            <li className="skills-li">
                                <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png"/>
                                <p>JQuery</p>
                            </li>
                            <li className="skills-li">
                                <img src={liquid}/>
                                <p>Liquid</p>
                            </li>
                            <li className="skills-li">
                                <img src="https://img.icons8.com/material-outlined/96/000000/api-settings.png"/>
                                <p>REST</p>
                            </li>
                            <li className="skills-li">
                                <img src="https://img.icons8.com/material-outlined/96/000000/json.png"/>
                                <p>JSON</p>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>E-Commerce:</h2>
                        <ul className="skills-ul">
                            <li className="skills-li">
                                <i class="fab fa-shopify"></i>
                                <p>Shopify</p>
                            </li>
                            <li className="skills-li">
                                <i class="fab fa-wordpress"></i>
                                <p>Wordpress</p>
                            </li>
                            <li className="skills-li">
                                <img src="https://img.icons8.com/color/96/000000/google-analytics.png"/>
                                <p>Google Analytics</p>
                            </li>
                            <li className="skills-li">
                                <i class="far fa-file-code"></i>
                                <p>Marketing Pixel Integration</p>
                            </li>
                            <li className="skills-li">
                                <i class="fab fa-hubspot"></i>
                                <p>CRM (Hubspot, etc..)</p>
                            </li>
                        </ul>

                    </section>
                </div>

            </div>
    )
}

export default Skills