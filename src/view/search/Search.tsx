import React, { useState, useEffect } from "react"
import { Breadcrumb, Card, Button } from 'react-bootstrap'
import { connect } from "react-redux";
import { initListAction, newPaginationAction, selectPelisAction } from "../../store/actions/ListAction";
import TitlebarImageList from '../../components/list/listImagen'
import { array } from "yargs";
import { getPelis } from '../../service/api'


function Search() {
    const [listPelis, setListPelis] = useState({})
    useEffect(() => {
        setListPelis(getPelis())
        initListAction(listPelis)
    });
    return (<div className="conatiner">
        <h3>Lista de Películas</h3>
        <div className="row">
            <div className="col-3 m-1 border">
                filtros
            </div>
            <div className="col m-1 border">
                <TitlebarImageList ></TitlebarImageList>
                {/*   <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bthJ4RYhyvaf5kg4t8Fc8zKkMF0.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}
            </div>
        </div>

    </div>

    )
}
const mapDispachToPtops = {
    initListAction,
    newPaginationAction,
    selectPelisAction
}
export default connect(null, mapDispachToPtops)(Search);



