import React from 'react';
import IframePic from './IframePic.jsx';
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
    return (
        <div className="album py-5 bg-light">
            <div id="tab0" />
            <div id="tab1" />
            <div id="tab2" />
            <div id="tab3" />
            <div id="tab4">
                <Container>
                    <Row>
                        {prints.map((item, key) => {
                            return (
                                <Col md="4" key={key}>
                                    <Card className="mb-4 box-shadow">
                                        <CardImg
                                            top
                                            width="100%"
                                            src={item.src}
                                            alt={item.altText}
                                        />
                                        <CardBody>
                                            <CardText>
                                                {item.displayLink}
                                                <br />
                                                {item.link}
                                            </CardText>
                                            <IframePic
                                                name={item.displayLink}
                                                link={item.link}
                                            />

                                            {/* <iframe
                                            src="https://y7g7g.csb.app/"
                                            title="W3Schools Free Online Web Tutorials"
                                        /> */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <ButtonGroup>
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
                                                </ButtonGroup>
                                                <small className="text-muted">
                                                    {item.time}
                                                </small>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Album;
