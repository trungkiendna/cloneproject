import * as React from 'react';
import * as moment from 'moment';
import { Helmet } from 'react-helmet';
import { API_URL } from '../configs';

export const Project = (props) => {
    const [persons, setPersons] = React.useState([]);
    const [projectIndex, setProjectIndex] = React.useState(0);

    React.useEffect(() => {
        if (persons.length <= 0) {
            fetch(API_URL + "/prjcts")
                .then(res => res.json())
                .then(
                    (result) => {
                        setPersons(result)
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        }
    })

    const currentProject = persons[projectIndex];

    if (persons.length === 0) {
        return null;
    }

    return (
        <div>
            <Helmet>
                <title>Project</title>
                <meta charSet="utf-8" />
                <meta name="description" content="A React.js application" />
            </Helmet>
            <div className="container-fluid pj-body">
                <div className="row pj-img">
                    <div className="col">
                        <div
                            style={{
                                backgroundImage: `url('${API_URL}${currentProject.desc.image.url}')`
                            }}
                            className="pj-content__fake-img"
                        >
                        </div>
                    </div>
                </div>
                {/* /// */}
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">

                            <h1>{currentProject.title}</h1>
                            <p>
                                {currentProject.desc.text1}<br />
                                {currentProject.desc.text2}<br />
                                {currentProject.desc.text3}<br />
                                {currentProject.desc.text4}<br />
                                <br />
                                {currentProject.desc.text5}<br />
                                {currentProject.desc.text6}<br />
                            </p>
                            <div className="client">
                                <span><b>Client: </b> {currentProject.client.name}</span>
                                <span><b>Date: </b>  {moment(currentProject.client.created_at).format('DD/MM/YYYY')}</span>
                                <span><b>Share: </b>  {currentProject.client.share}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pj-footer">
                <div
                    onClick={() => {
                        if (projectIndex !== 0) {
                            setProjectIndex(projectIndex - 1)
                        } else {
                            setProjectIndex(persons.length - 1)
                        }
                    }} className="pre-pj">
                    <a>
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;
                                <b>PREVIOUS PROJECT</b>
                    </a>

                </div>

                <div className="touch">
                    <a href="#">
                        <i className="fa fa-windows"></i>
                    </a>
                </div>

                <div
                    onClick={() => {
                        if (projectIndex < persons.length - 1) {
                            setProjectIndex(projectIndex + 1)
                        } else {
                            setProjectIndex(0)
                        }
                    }} className="next-pj">
                    <a>
                        <b>NEXT PROJECT</b>&nbsp;
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}