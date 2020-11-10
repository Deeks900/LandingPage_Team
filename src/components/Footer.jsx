import React from 'react';
function Footer(){
    return(
            <footer> 
                <div class = "row">
                  <div class = "column">
                     <h4>IIITIANS Network</h4>
                    <p>A Never Ending Network</p>
                  </div>
                  <div class = "column">
                  <ul>
                      <li class = "col-heading">Product</li>
                      <li>Why IITIANS</li>
                      <li>Inspiration</li>
                      </ul>
                  </div>
                  <div class = "column">
                  <ul>
                      <li class = "col-heading">Company</li>
                      <li>About Us</li>
                      <li>NewsRoom</li>
                      </ul>
                  </div>
                  <div class = "column">
                  <ul>
                      <li class = "col-heading">Policies</li>
                      <li>Terms</li>
                      <li>Privacy</li>
                      <li>Guidelines</li>
                      </ul>

                  </div>
                </div>
                
                <div class = "bottom">
                <hr />
                <p>&copy;{new Date().getFullYear()} IITIANS Network.INC | All Rights Reserved | Terms Of Service | Privacy</p>
                </div>
            </footer>
           


    );
}
export default Footer;