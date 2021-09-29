import './Footer.css'

const Footer = () => {
     return(
            <div className="footerMainDiv">
               <div>
                   <h2 className="text-center pt-3"> School Daze </h2>
                   <div className="text-center mt-5">
                       <ul>
                           <li className="liFooter"> Home </li>
                           <li className="liFooter"> About </li>
                           <li className="liFooter"> Vission </li>
                           <li className="liFooter"> Misson </li>
                           <li className="liFooter"> Meeting </li>
                       </ul>
                   </div>
                   <div className="text-center mt-5">
                       <ul>
                           <li className="liFooter"> <i className="fab fa-facebook"></i> </li>
                           <li className="liFooter"> <i className="fab fa-linkedin"></i> </li>
                           <li className="liFooter"> <i className="fab fa-whatsapp-square"></i> </li>
                           <li className="liFooter"> <i className="fab fa-twitter-square"></i> </li>
                           <li className="liFooter"> <i className="fab fa-google"></i> </li>
                       </ul>
                   </div>
                   <div className="text-center mt-4">
                       <p style={{fontSize: "20px" }}> &copy 2021 All rights reserved  SchooleDaze </p>
                   </div>
               </div>
            </div>
     )
}

export default Footer;