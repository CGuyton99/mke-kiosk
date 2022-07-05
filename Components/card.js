import React from 'react';
// import Router from './Router';

export default function Card(props) {
    // console.log(props);
    // console.log(props.images);
    let newClassName = `color_bg ${props.alt}`
    let bg_img = `url(${props.images})`
    let { title, old_price, newPrice, rupess, exp_date } = props

    // const link1 = (url) => {
    //     console.log("first");
    // }
    return (

        <div className="card" >
            {/* <a href='https://county.milwaukee.gov/EN/Human-Resources'><img src= {bg_img}/></a> */}
            <div className="warpper">
                <div className={newClassName}></div>
                <div className="card_img" style={{"backgroundImage": bg_img}}>

                </div>

                <div className="cardInfo">
                    <h1>{title}</h1>
                    <p className="date_">{exp_date}</p>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="price old_price">{rupess}{old_price}</p>
                            <p className="price newPrice">{rupess}{newPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
