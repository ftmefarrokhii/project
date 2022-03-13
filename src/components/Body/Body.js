import Ticket from "./Ticket";
import KharidTicket from "./KharidTicket";
import Esterdad from "./Esterdad";
import TicketReserve from "./Ticket-Reserve";
import Vip from "./Vip";
import { Fragment } from "react";


const Body = () =>{
    return(
        <Fragment>
            <Ticket/>
            <KharidTicket/>
            <Esterdad/>
            <TicketReserve/>
            <Vip/>
        </Fragment>  
    );
};

export default Body;