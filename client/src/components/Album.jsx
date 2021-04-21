import React from 'react';
import IframePic from './IframePic.jsx';
import { Paper } from '@material-ui/core';
import {
    Button,
    ButtonGroup,
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
    Container,
    Row
} from 'reactstrap';

const Album = ({ prints }) => {
    console.log('PRINTS.lenth', prints.length);
    const DivGroup = [
        { tag: 'tab0' },
        { tag: 'tab1' },
        { tag: 'tab2' },
        { tag: 'tab3' },
        { tag: 'tab4' }
    ];
    return (
        <div className="album py-5 bg-light">
            <div id="tab0" />
            <div id="tab1" />
            <div id="tab2" />
            <div id="tab3" />
            {/* for (var i = 0; i < prints.length; i++){
                console.log(prints[i])
            } */}

            {DivGroup.map((item, key) => {
                if (prints.length < 7) {
                    console.log('mpaed prints', prints);
                }
                return <div id={item.tag} />;
            })}

            {/* <div id="tab4"> */}

            <div id="tab4">
                <a href="#" class="arrow left" />
                <Container>
                    <Row className="Row-class">
                        {prints.map((item, key) => {
                            console.log('KEY', key);
                            if (key < 6) {
                                var idTag = 'tab4';
                                return (
                                    <Col md="4" key={key}>
                                        {/* <Paper elevation={3} /> */}
                                        <Card className="mb-4 box-shadow">
                                            <CardImg
                                                top
                                                width="100%"
                                                src={item.src}
                                                alt={item.altText}
                                            />

                                            <CardBody>
                                                <CardText>
                                                    {/* {item.displayLink} */}
                                                    {item.title}
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        {/* <ButtonGroup>
                                                            <Button
                                                                outline
                                                                color="secondary"
                                                                size="sm"
                                                            >
                                                                View
                                                            </Button>
                                                            <Button
                                                                outline
                                                                color="secondary"
                                                                size="sm"
                                                            >
                                                                Edit
                                                            </Button>
                                                        </ButtonGroup> */}
                                                        <small className="text-muted">
                                                            {item.time}
                                                        </small>
                                                    </div>
                                                </CardText>
                                                <div class="iframe-container">
                                                    <IframePic
                                                        name={item.displayLink}
                                                        link={item.link}
                                                        width="100%"
                                                        frameborder="0"
                                                        title="Responsive iframe example"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen
                                                    />
                                                </div>

                                                {/* <iframe
                                            src="https://y7g7g.csb.app/"
                                            title="W3Schools Free Online Web Tutorials"
                                        /> */}
                                            </CardBody>
                                        </Card>
                                    </Col>
                                );
                            }
                        })}
                    </Row>
                </Container>
                <a href="#" class="arrow right" />
            </div>
        </div>
    );
};

export default Album;
