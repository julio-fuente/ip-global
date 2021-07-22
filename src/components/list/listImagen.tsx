
import React, { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Pagination } from 'react-bootstrap'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './itemData';
import { connect } from 'react-redux';
//import ModalsInfoFrorm from '../../components/modals/ModalsInfoFrorm';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        imageList: {
            width: '100%',
            height: '100%',
            color: '#E6E6E6',
        },
        icon: {
            color: '#E6E6E6',
        },
    }),
);

const  TitlebarImageList = ({ListReducer}) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [listPelis, setListPelis] = useState({})
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    useEffect(()=>{
        console.log(ListReducer)
    })

    return (
        <div className={classes.root}>
            <ImageList rowHeight={300} cols={4} className={classes.imageList}>
                {itemData.map((item) => (
                    <ImageListItem key={item.id} onClick={handleShow}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                        />
                    </ImageListItem>

                ))}

            </ImageList>
            <hr />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Woohoo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        ListReducer: state.ListReducer
    }
}
export default connect(mapStateToProps)(TitlebarImageList);
