import React from 'react';

const Price = () => {
    const [header] =React.useState({
        mainHeader:'price',
        subHeading:'God so loved the world',
        text:'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life'
    });
    const [state] = React.useState([
        {
        id:1,
        heading:'Basic',
        price:'50',
        msg1:'50Gb storage space' ,
        msg2:'20Gb monthly bandwidth' ,
        msg3:'my sql database' ,
        msg4:'100 Email account' ,
        msg5:'10 free domain name' ,
    },
    {
        id:2,
        heading:'Standard',
        price:'50',
        msg1:'50Gb storage space' ,
        msg2:'20Gb monthly bandwidth' ,
        msg3:'my sql database' ,
        msg4:'100 Email account' ,
        msg5:'10 free domain name' ,
    },
    {
        id:3,
        heading:'Premium',
        price:'50',
        msg1:'50Gb storage space' ,
        msg2:'20Gb monthly bandwidth' ,
        msg3:'my sql database' ,
        msg4:'100 Email account' ,
        msg5:'10 free domain name' ,
    },
 ] );
  return (
      <div className="prices">
          <div className="container">
          <div className="common">
            <h3 className="heading">
           {header.mainHeader}
            </h3>
            <h1 className="mainHeader">
            {header.subHeading}
            </h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
            </div>
              <div className="row">
                  {state.map(prices =>(
                      <div className="col-4" key={prices.id}>
                          <div className="price">
                              <div className="priceHeading">$ {prices.heading}</div>
                              <div className="price__rs"><span>$</span>{prices.price}</div>
                              <ul>
                                  <li> {prices.msg1}</li>
                                  <li> {prices.msg2}</li>
                                  <li> {prices.msg3}</li>
                                  <li> {prices.msg4}</li>
                                  <li> {prices.msg5}</li>
                              </ul>
                              <div className="price_btn">
                                  <a herf="" className="btn btn-outline">purchase</a>
                              </div>
                            
                          </div>
                      </div>
                  ))}
              </div>

          </div>

      </div>
   ) ;
};

export default Price;
