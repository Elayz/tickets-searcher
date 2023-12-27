import Header from "../header/header";
import ContentSection from "../contentSection/contentSection";
import React from "react";
import AviaService from "../../apiSerwise";
import  { connect } from 'react-redux';
import * as actions from "../../actions";



const Main = ({ loadTicketsData }) => {
    let data
    const serv = new AviaService();
    function onLoad() {
        serv.getInfo()
            .then((res) => {
                data=res.tickets
                loadTicketsData(data)
            })
            .catch((err) => console.error(`smth is wrong: ${err}`))
    }
    window.onload = onLoad;



    return (
        <div>
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
// const mapDispatchToProps = (dispatch) => { //для функций из редьюсера
//     const { onSortTickets } = bindActionCreators(actions, dispatch);
//     return {
//         onSortTickets
//     }
// };
export default connect(mapStateToProps, actions)(Main);