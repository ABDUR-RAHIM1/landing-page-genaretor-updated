
export const BASE_URL = "https://landing-page-server-k3tv.onrender.com/api/v2"


// endpoints
/*
   user : [
            get -    : /user/all (admin)
            get -  (one)  : /user/one (Jwt)
            post -   : /user/register
            post - : /user/login
            delete-  : /user/delete/:id (admin / user)
   ];
  
    page : [
       create : /page/create (Jwt)
       get :  /page/one/:username/:pageId
       put : /page/one/:pageId
       delete : /page/delete/:pageId
    ]

   orders : [
            post -   : /order/create (costomer) public
            get -   : /order/all
            delete  -  /order/delete/:orderId
   ]
*/