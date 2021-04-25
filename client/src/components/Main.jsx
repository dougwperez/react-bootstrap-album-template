import React from 'react';
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';
import SearchBar from './SearchBar.jsx';
import MenuButtons from './MenuButtons.jsx';

const Main = ({ album, prints, getPrints, prints1, prints2, prints3 }) => {
    return (
        <main role="main">
            <MenuButtons />
            <Jumbotron className="text-center" className="frosted-glass">
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
