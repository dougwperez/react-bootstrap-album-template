import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import albumItems from './data/album';
import socialLinks from './data/socialLinks';
import './App.css';
import axios from 'axios';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            socialLinks: socialLinks,
            album: albumItems,
            apiResponse: '',
            prints: []
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    //test

    callAPI() {
        fetch('http://localhost:8000/testAPI')
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    getFiddles() {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        // res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
        axios
            .get(
                `${proxyurl}https://customsearch.googleapis.com/customsearch/v1/siterestrict?num=9&cx=dc1c0a26376a66714&q=note pad&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0`
            )
            //  res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
            .then(response => {
                console.log('authored response.data', response.data.items);
                this.setState({ prints: response.data.items });
            })
            .catch(error => console.log(error));
    }

    //     GET https://customsearch.googleapis.com/customsearch/v1?num=5&key=[YOUR_API_KEY] HTTP/1.1

    // Accept: application/json

    //     GET https://customsearch.googleapis.com/customsearch/v1?cx=dc1c0a26376a66714&q=clock&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0

    //     HTTP/1.1

    // Accept: application/json

    // GET https://customsearch.googleapis.com/customsearch/v1?cx=dc1c0a26376a66714&q=clock&siteSearch=https%3A%2F%2Fjsfiddle.net%2F&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0 HTTP/1.1

    // Accept: application/json

    //   https://cse.google.com/cse?cx=dc1c0a26376a66714

    // getFiddles2() {
    //     axios
    //         .get(
    //             'https://www.googleapis.com/customsearch/v1?key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0&cx=dc1c0a26376a66714:omuauf_lfve&q=clocks'
    //         )
    //         .then(response => {
    //             console.log('Yessss', response);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }

    challengesByUser() {
        const user = 'Voile';
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        axios
            .get(
                `${proxyurl}https://www.codewars.com/api/v1/users/${user}/code-challenges/completed?page=0?access_key=wH8ZhAsdT8xxsxJ1eJx3`
            )
            .then(response => {
                console.log(
                    'challengesByUser response.data.data',
                    response.data.data
                );
                this.setState({ challengeIds: response.data.data });
                //TOO MANY REQUESTS OTHERWISE< UNCOMENT LATER
                //this.getChallenge()
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getFiddles();
        this.challengesByUser();
    }

    render() {
        return (
            <div>
                <Header
                    collapsed={this.state.collapsed}
                    toggleNavbar={this.toggleNavbar}
                    socialLinks={this.state.socialLinks}
                />
                <Main album={this.state.album} prints={this.state.prints} />
                <Footer />
            </div>
        );
    }
}
