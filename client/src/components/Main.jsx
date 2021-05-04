import React from 'react';
import Album from './Album';
import { Button, Container, Jumbotron } from 'reactstrap';
import SearchBar from './SearchBar.jsx';
import MenuButtons from './MenuButtons.jsx';

import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpIcon from '@material-ui/icons/Help';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Main = ({ album, prints, getPrints, prints1, prints2, prints3 }) => {
    return (
        <main role="main">
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
