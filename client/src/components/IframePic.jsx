import React from 'react';

export default class IframePic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('this.props.link', this.props.link);
        // let codePenFrame = this.props.link.replace('/pen/', '/full/');
        // console.log('codePenFrame', codePenFrame);
        if (this.props.name === 'codepen.io') {
            let codePenFrame = this.props.link.replace('/pen/', '/full/');
            return <iframe src={codePenFrame} title="codepen iframe" />;
        }
        if (this.props.name === 'codesandbox.io') {
            let split = this.props.link.split('/s/');
            let identifier = split[1];
            let codeSandboxFrame = `https://codesandbox.io/embed/${identifier}?fontsize=14&hidenavigation=1&theme=dark&view=preview`;

            return <iframe src={codeSandboxFrame} />;
        }
        if (this.props.name === 'jsfiddle.net') {
            // let split = this.props.link.split('/s/');
            // let identifier = split[1];
            // let codeSandboxFrame = `https://codesandbox.io/embed/${identifier}?fontsize=14&hidenavigation=1&theme=dark&view=preview`;
            // console.log('identifier', identifier);
            let removeHttp = this.props.link.substring(6);
            let jsFiddleFrame = removeHttp.concat('embedded/result/');
            console.log('jsFiddleFrame', jsFiddleFrame);
            return (
                <iframe
                    width="100%"
                    height="300"
                    src={jsFiddleFrame}
                    allowfullscreen="allowfullscreen"
                    allowpaymentrequest
                    frameborder="0"
                />
            );
        } else {
            return <div>Not codepen</div>;
        }
    }
}

{
    /* <iframe
    width="100%"
    height="300"
    src="//jsfiddle.net/Daniel_Hug/pvk6p/embedded/result/"
    allowfullscreen="allowfullscreen"
    allowpaymentrequest
    frameborder="0"
/>; */
}
