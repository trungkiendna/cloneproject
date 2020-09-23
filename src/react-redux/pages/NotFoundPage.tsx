import * as React from 'react';
import { Helmet } from 'react-helmet';

interface ToDoListProps {

}

export class NotFoundPage extends React.Component<ToDoListProps> {

    render() {
        return (
            <div className="error404">
                <Helmet>
                    <title>Không tìm thấy trang</title>
                    <meta name="description" content="This is a different description for this route." />
                </Helmet>
                <img src={require('../images/error.png')} />
                <h1>Error 404 : Page <code>{location.pathname}</code> not found !!!!</h1>
            </div>
        );
    }
}