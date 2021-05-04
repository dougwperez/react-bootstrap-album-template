import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpIcon from '@material-ui/icons/Help';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';

import { Button, ButtonGroup, Tooltip, Fade } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

const MenuButtons = () => {
    const classes = useStyles();
    return (
        <>
            <div className="topRightCorner">
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Button className="fab-button-right">
                        <Fab
                            className="fab"
                            color="primary"
                            aria-label="help"
                            fontSize="small"
                        >
                            <HelpOutlineIcon className="svg_icons1" />
                        </Fab>
                    </Button>{' '}
                    {/* <Tooltip title="Delete">
                        <div>Herro</div>
                    </Tooltip> */}
                    <Button className="fab-button-right">
                        <Fab
                            className="fab"
                            color="primary"
                            aria-label="Github"
                            fontSize="small"
                            onClick={() =>
                                window.open(
                                    'https://github.com/dougwperez/react-bootstrap-album-template',
                                    '_blank'
                                )
                            }
                        >
                            {/* <a href="https://www.linkedin.com/in/doug-perez/"> */}
                            <a>
                                <GitHubIcon className="svg_icons2" />
                            </a>
                            {/* </a> */}
                        </Fab>
                    </Button>
                </ButtonGroup>
            </div>
            <div className="topLeftCorner">
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Button className="fab-button-left">
                        <Fab
                            className="fab"
                            color="primary"
                            aria-label="Settings"
                            fontSize="small"
                        >
                            <SettingsIcon className="svg_icons1" />
                        </Fab>
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default MenuButtons;

// <div className="topcorner">
// <div className="buttons">
//     <div className="action_btn">
//         <button
//             name="submit"
//             className="frosted-glass"
//             className="fabbtn"
//             type="submit"
//             value="Save"
//             onclick="myFunction()"
//         >
//             Help
//         </button>
//         <button
//             name="submit"
//             className="frosted-glass"
//             type="submit"
//             value="Cancel"
//             onClick="location.href='http://www.example.com'"
//         >
//             Github
//         </button>

//         <p id="saved" />
//     </div>
// </div>
// </div>
