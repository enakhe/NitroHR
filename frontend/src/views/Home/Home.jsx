import { Component, Fragment } from 'react';
import Header from '../../components/Utils/Header';
import Showcase from '../../components/Home/Showcase';
import Footer from '../../components/Utils/Footer';
import Companies from '../../components/Home/Companies';
import Feature from '../../components/Home/Feature';
import TypeOfCompanies from '../../components/Home/TypeOfCompanies';
import Testimonials from '../../components/Home/Testimonials';
import Stats from '../../components/Home/Stats';
import Blog from '../../components/Home/Blog';
import Newsletter from '../../components/Home/Newsletter';

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
                    <TypeOfCompanies />
                    <Testimonials />
                    <Stats />
                    <Blog />
                    <Newsletter />
                    <Footer />
                </div>
            </Fragment>
        )
    }
}