import { Component, Fragment } from 'react';
import Header from '../../components/Utils/Header';
import Showcase from '../../components/Home/Showcase';
import Footer from '../../components/Utils/Footer';
import Companies from '../../components/Home/Companies';
import Feature from '../../components/Home/Feature';
import ThirdPartyService from '../../components/Home/ThirdPartyService';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Fragment>
                <div className="bg-white">
                    <Header />
                    <Showcase />
                    <Companies />
                    <Feature />
                    <ThirdPartyService />
                    <Footer />
                </div>
            </Fragment>
        )
    }
}