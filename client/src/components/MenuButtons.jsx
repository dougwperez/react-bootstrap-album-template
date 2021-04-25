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
        <div className="topcorner">
            <div className={classes.root}>
                <Fab
                    className="fab"
                    color="primary"
                    aria-label="help"
                    fontSize="large"
                >
                    <HelpOutlineIcon className="svg_icons1" />
                </Fab>
                <Fab className="fab" color="secondary" aria-label="Github">
                    <GitHubIcon className="svg_icons2" />
                </Fab>
            </div>
        </div>
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
