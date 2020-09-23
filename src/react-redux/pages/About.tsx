import * as React from 'react';
import { Helmet } from 'react-helmet';

interface ToDoListProps {

}

export class About extends React.Component<ToDoListProps> {

    render() {
        return (
            <div className="about">
                <Helmet>
                    <title>About</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="A React.js application" />
                </Helmet>
                <div className="about-header">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h1>Amelia Woods</h1>
                            <p>
                                I am a Graphic & Web Designer based in New York, specializing<br />
                                in User Interface Design and Development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-statistical">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                                <div className="about-icon">
                                    <img src={require('../images/pe-7s-portfolio.png')} />
                                    <div className="about-content">
                                        <div className="number">
                                            <span>548</span>
                                        </div>
                                        <div className="text">
                                            <span>PROJECTS COMPLETED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                                <div className="about-icon">
                                    <img src={require('../images/pe-7s-clock.png')} />
                                    <div className="about-content">
                                        <div className="number">
                                            <span>1465</span>
                                        </div>
                                        <div className="text">
                                            <span>WORKING HOURS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                                <div className="about-icon">
                                    <img src={require('../images/pe-7s-star.png')} />
                                    <div className="about-content">
                                        <div className="number">
                                            <span>612</span>
                                        </div>
                                        <div className="text">
                                            <span>POSITIVE FEEDBACKS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                                <div className="about-icon">
                                    <img src={require('../images/pe-7s-like.png')} />
                                    <div className="about-content">
                                        <div className="number">
                                            <span>735</span>
                                        </div>
                                        <div className="text">
                                            <span>HAPPY CLIENTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="about-body">
                    <div className="row">
                        <div className="col-xs-6 col-sm-12 col-md-12 col-lg-6 about-img">
                        </div>

                        <div className="col-xs-6 col-sm-12 col-md-12 col-lg-6 about-me">
                            <div className="content">
                                <h2>About Me</h2>
                                <p>
                                    Given let waters air sea had you'll, may seed abundantly fish.<br />
                                            Were, you'll earth forth winged above brought. Own darkness<br />
                                            they're him can't fourth sea place have.<br /><br />

                                            So the above May stars cattle fruitful face shall. Tree it, winged.<br />
                                            Every signs male firmament us. Morning him.
                                        </p>
                                <div>
                                    <img src={require('../images/signature.png')} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="about-footer">
                    <div className="title">
                        <h2>Need a Project?</h2>
                        <p>
                            Let us know what you're looking for in an agency. We'll take a look and see<br />
                            if this could be the start of something beautiful.
                        </p>
                        <a href="#">
                            LET'S TALK
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}