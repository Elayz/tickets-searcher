import Header from "../header/header";
import ContentSection from "../contentSection/contentSection";
import React from "react";
import AviaService from "../../apiSerwise";
import  { connect } from 'react-redux';
import * as actions from "../../actions";
import classes from "./app.module.scss";

const serv = new AviaService();
serv.getId()

const Main = ({ loadTicketsData, allDataIsLoaded }) => {
    let data
    function onLoad() {
        serv.getInfo()
            .then((res) => {
                let iterv = setInterval(() => {
                    if(res.stop !== true){
                        data=res.tickets
                        loadTicketsData(data)
                        onLoad();
                        clearInterval(iterv);
                    }else{
                        clearInterval(iterv);
                        allDataIsLoaded();
                        return 0;
                    }
                },200)
            })
            .catch((err) => {
                onLoad()
            })
    }
    window.onload = onLoad;



    return (
        <div className={classes.main}>
            <Header></Header>
            <ContentSection></ContentSection>
        </div>
    )
};
const mapStateToProps = (state) => {     //для переменных из стейт
    return {
        data: state,
    }
}
export default connect(mapStateToProps, actions)(Main);