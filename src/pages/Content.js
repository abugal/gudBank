import React from "react";
import styled from "styled-components";
import SmallHead from "./SmallHead";
import blockchain from '../assets/bchain.png';

const Content = () => {
    return ( 
        <ContentStyle>
            <div className="content">
                <div className="left">
                    <SmallHead title={"BANK WITH US & SAY NO CRYPTO!"} identifier={'Before'}/>
                    <h1>
                        We are here to help you growth your wealth.
                    </h1>
                    <p>
                        Spread your risk, and open a Flexible Fixed Deposit Account with us today.

                    </p>
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </ContentStyle>
    );
}

const ContentStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .left{
        text-align: center;
    }
    
    

    .content{
        color: yellow;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
                font-size: 1.5em;
            }
        }
        .right{
            position: absolute;
            right: -11%;
            bottom: -1%;
            width: 60%;
        }
    }
`;

export default Content ;