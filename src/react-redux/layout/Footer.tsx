import * as React from 'react';

interface ToDoListProps {

}

export class Footer extends React.Component<ToDoListProps> {

    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <div className="footer-copied">
                                    <h3>Piroll Design, Inc.</h3>
                                    <span> © 2017 Piroll. All rights reserved.<br />
                                    Designed by robirurk.<br />
                                    </span>
                                </div>
                            </div>


                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="footer-contact">
                                    <a href="#">
                                        hello@pirolltheme.com<br />
                                        +44 987 065 908
                                    </a>
                                </div>
                            </div>

                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                <div className="footer-contact">
                                    <a href="#"> Project </a>
                                    <a href="#"> About </a>
                                    <a href="#"> Services </a>
                                    <a href="#"> Carreer </a>
                                </div>
                            </div>

                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                <div className="footer-contact">
                                    <a href="#"> News </a>
                                    <a href="#"> Events </a>
                                    <a href="#"> Contact </a>
                                    <a href="#"> Legals </a>
                                </div>
                            </div>

                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                <div className="footer-social">
                                    <a href="#"> Facebook </a>
                                    <a href="#"> Twitter </a>
                                    <a href="#"> Instagram </a>
                                    <a href="#"> Dribble </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default (Footer)