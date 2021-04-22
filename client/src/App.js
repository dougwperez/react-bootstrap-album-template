import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import albumItems from './data/album';
import socialLinks from './data/socialLinks';

import './App.scss';
import axios from 'axios';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.getPrints = this.getPrints.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.nextPrints = this.nextPrints.bind(this);
        this.state = {
            collapsed: true,
            socialLinks: socialLinks,
            album: albumItems,
            apiResponse: '',
            prints: [],
            prints1: [],
            prints2: [],
            prints3: [],
            start: 0,
            queryState: ''
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

    getPrints(query) {
        console.log('testing query', query);
        this.setState({ queryState: query });
        let start = 0;
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        // res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
        axios
            .all([
                axios.get(
                    `${proxyurl}https://customsearch.googleapis.com/customsearch/v1/siterestrict?num=9&cx=dc1c0a26376a66714&q=${query}&start=${start}&num=6&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0`
                ),
                axios.get(
                    `${proxyurl}https://customsearch.googleapis.com/customsearch/v1/siterestrict?num=9&cx=dc1c0a26376a66714&q=${query}&start=${7}&num=6&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0`
                ),
                axios.get(
                    `${proxyurl}https://customsearch.googleapis.com/customsearch/v1/siterestrict?num=9&cx=dc1c0a26376a66714&q=${query}&start=${14}&num=6&key=AIzaSyCfI6Dgf4vFzx60JupuHtviiS_tGIjbFj0`
                )
            ])
            //  res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
            // .then(response => {
            .then(
                axios.spread((response1, response2, response3) => {
                    // this.setState({
                    //     prints: response1.data.items.concat(
                    //         response2.data.items
                    //     )
                    // });
                    this.setState({
                        prints1: response1.data.items,
                        prints2: response2.data.items,
                        prints3: response3.data.items
                    });
                    // this.setState({ prints: response2.data.items });

                    // this.getPrints(query);
                })
            )
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
        // this.getPrints();
        // this.challengesByUser();
    }

    nextPrints() {
        this.setState({ start: 7 });
        this.getPrints();
    }

    render() {
        return (
            <div>
                {/* <Header
                    collapsed={this.state.collapsed}
                    toggleNavbar={this.toggleNavbar}
                    socialLinks={this.state.socialLinks}
                /> */}
                <button onClick={() => this.nextPrints()}>NEXT</button>
                <Main
                    album={this.state.album}
                    prints={this.state.prints}
                    prints1={this.state.prints1}
                    prints2={this.state.prints2}
                    prints3={this.state.prints3}
                    getPrints={this.getPrints}
                />
                <Footer />
                <button onClick={() => this.nextPrints()}>NEXT</button>
            </div>
            // this.setState({count: this.state.count+1})
        );
    }
}
