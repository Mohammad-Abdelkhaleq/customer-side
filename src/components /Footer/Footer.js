import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

 function Footer() {
  return (

    <div>

  <link
    href="//netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  {/* <link
    href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  /> */}
  <hr className="hr-or" />
  {/* <span className="span-or">or</span> */}
  <hr className="hr-or" />
  <hr className="hr-or" />
  <footer className="nb-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="about">
            <img
              src="images/logo.png"
              className="img-responsive center-block"
              alt=""
            />
           
            <div className="social-media">
              <ul className="list-inline">
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">LOCATION</h2>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" />Amman-Jordan
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-phone mr-3"/> +9607781084
                </a>
                <a href="http://www.nextbootstrap.com/" title="">
                <i class="fa fa-envelope-o mr-3"/> TicketEase@gmail.com
                </a>
        
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">QUCK LINKS</h2>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> HOME
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> About Us
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> FAQ's
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">Security &amp; privacy</h2>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> Terms Of Use
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> Return / Refund
                  Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">OPENING HOUR</h2>
            <li><i class="fa fa-check"> Sat-Mon: 8 AM-5 PM </i></li>
            <li><i class="fa fa-check"> Tus-Thu: 8 Am-7 PM </i></li>
            <li><i class="fa fa-times"> Friday: Closed </i></li>  
          </div>
        </div>
      </div>
    </div>
    <section className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>Copyright © 2023. Ticket Ease.</p>
          </div>
          <div className="col-sm-6" />
        </div>
      </div>
    </section>
  </footer>
</div>
    
    // <MDBFooter bgColor='light' className='text-center text-lg-start text-muted h-50'>
    //   <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
    //     <div className='me-5 d-none d-lg-block'>
    //       <span>Get connected with us on social networks:</span>
    //     </div>

    //     <div>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="facebook-f" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="twitter" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="google" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="instagram" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="linkedin" />
    //       </a>
    //       <a href='' className='me-4 text-reset'>
    //         <MDBIcon fab icon="github" />
    //       </a>
    //     </div>
    //   </section>

    //   <section className=''>
    //     <MDBContainer className='text-center text-md-start mt-5'>
    //       <MDBRow className='mt-3'>
    //         <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>
    //             <MDBIcon icon="gem" className="me-3" />
    //             ticket ease
    //           </h6>
    //           <p>
    //             you can submite your complian here and one of our team will contact you as soon as possible
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               react
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               express.js
    //             </a>
    //           </p>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               Ticket ease
    //             </a>
    //           </p>
              
    //         </MDBCol>

    //         <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
    //           <p>
    //             <a href='#!' className='text-reset'>
    //               FAQ
    //             </a>
    //           </p>
              
    //         </MDBCol>

    //         <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
    //           <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
    //           <p>
    //             <MDBIcon icon="home" className="me-2" />
    //             New York, NY 10012, US
    //           </p>
    //           <p>
    //             <MDBIcon icon="envelope" className="me-3" />
    //             info@example.com
    //           </p>
    //           <p>
    //             <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
    //           </p>
              
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>

    //   <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    //     © 2021 Copyright: alrights reserved Ticket ease.
    //   </div>
    // </MDBFooter>


  );
}
export default Footer;