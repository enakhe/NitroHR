import { Component, Fragment } from 'react';
import Header from '../../components/Utils/Header';
import Showcase from '../../components/Home/Showcase';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Fragment>
                <div className="bg-white">
                    <Header />
                    <Showcase />
                </div>
            </Fragment>
        )
    }
}