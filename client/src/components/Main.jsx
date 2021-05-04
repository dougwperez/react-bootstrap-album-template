import React from 'react';
import Album from './Album';
import { Container, Jumbotron } from 'reactstrap';
import SearchBar from './SearchBar.jsx';
import MenuButtons from './MenuButtons.jsx';
import Button from 'react-bootstrap/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Main = ({ album, prints, getPrints, prints1, prints2, prints3 }) => {
    return (
        <main role="main">
            <div className="prev btn">
                <Button variant="primary" size="sm">
                    {' '}
                    <NavigateBeforeIcon
                        className="svg_icons3"
                        // className="prev icon"
                    />
                    &nbsp; Previous
                </Button>{' '}
            </div>
            <div className="next btn">
                <Button variant="primary" size="sm">
                    Next <NavigateNextIcon className="svg_icons1" />
                </Button>{' '}
            </div>

            <Jumbotron className="text-center" className="frosted-glass">
                <MenuButtons />
                <Container>
                    <h1 className="jumbotron-heading">BluePrints JS</h1>
                    <p className="lead text-muted" className="subtitle">
                        <strong>
                            The search engine that combs the web for live
                            working code.
                        </strong>
                    </p>

                    <SearchBar getPrints={getPrints} />
                    <p>
                        {/* <Button color="primary" className="mx-1 my-2">
                            Main call to action Get RId of this
                        </Button>
                        <Button color="secondary" className="my-2">
                            Secondary action
                        </Button> */}
                    </p>
                </Container>
            </Jumbotron>
            <div className="topRightCorner" />
            <Album
                album={album}
                prints={prints}
                prints1={prints1}
                prints2={prints2}
                prints3={prints3}
            />
        </main>
    );
};

export default Main;
