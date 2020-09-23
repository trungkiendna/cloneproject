import * as React from 'react';
import { Helmet } from 'react-helmet';

import axios from 'axios';
import { API_URL } from '../configs';

export const Home = () => {
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        if (images.length === 0) {
            axios.get('http://192.168.4.106:1337/homes')
                .then(res => {
                    const homeData = res.data[0];
                    setImages(homeData.image)

                });
        }
    })

    return (
        <main>
            <Helmet>
                <title>Home</title>
                <meta charSet="utf-8" />
                <meta name="description" content="A React.js application" />
            </Helmet>
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h1>
                                UI/UX & Graphic Designer
                        </h1>
                            <p>
                                I am a Graphic & Web Designer based in New York, specializing<br />
                            in User Interface and Development
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-body">
                <div className="row">
                    {images.map((image, index) => {
                        return (
                            <div
                                key={index}
                                className="col-xs-3 col-sm-6 col-md-6 col-lg-3 item-bd"
                            >
                                <img src={`${API_URL}${image.url}`} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}