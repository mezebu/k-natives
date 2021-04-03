import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assests/NativesLogo.png";

function Footer() {
  return (
    <div classNameName="footer-page">
      <Container>
        {/* <Row classNameName="text-center">
          <div classNameName="footer-contents container">
            <div classNameName="footer-contents-left">
              <p>hello there sdjkd lkjdlkjs jlkdldls</p>
            </div>
            <div classNameName="footer-contents-right">
              <div classNameName="footer-right-items">
                <p>hello there sdjkd lkjdlkjs jlkdldls</p>
              </div>

              <div classNameName="footer-right-items">
                hello there sdjkd lkjdlkjs jlkdldls
              </div>

              <div classNameName="footer-right-items">
                hello there sdjkd lkjdlkjs jlkdldls
              </div>
            </div>
          </div>
        </Row> */}

        <footer class="footer layout_padding text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <a href="index.html">
                  <img
                    class="img-responsive"
                    src={Logo}
                    alt="logo"
                    width="150px"
                  />
                </a>
                <div class="footer_link_heading">
                  <div class="footer_menu margin_top_30">
                    <ul>
                      <li>
                        <a href="tel:9876543210">+380731184766</a>
                      </li>
                      <li>
                        <a href="foo">kharkivnatives@gmail.com</a>
                      </li>
                      <li>
                        <a href="foo">Ukraine kharkiv Balulina 16</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div class="footer-link-heading">
                      <h3>FEATURED COURSES</h3>
                    </div>
                    <div class="footer_menu">
                      <ul>
                        <li>
                          <a href="foo">Starting Soon</a>
                        </li>
                        <li>
                          <a href="foo">Just Added</a>
                        </li>
                        <li>
                          <a href="foo">Most Viewed</a>
                        </li>
                        <li>
                          <a href="foo">Top Paid</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-12">
                    <div class="footer-link-heading">
                      <h3>CATEGORIES</h3>
                    </div>
                    <div class="footer_menu">
                      <ul>
                        <li>
                          <a href="foo">Corporate English</a>
                        </li>
                        <li>
                          <a href="foo">Business</a>
                        </li>
                        <li>
                          <a href="foo">Conversation</a>
                        </li>
                        <li>
                          <a href="foo">Grammar and vocabulary</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-12">
                    <div class="footer-link-heading">
                      <h3>USEFUL LINKS</h3>
                    </div>
                    <div class="footer_menu">
                      <ul>
                        <li>
                          <a href="foo">FAQs</a>
                        </li>
                        <li>
                          <a href="foo">Success Stories</a>
                        </li>
                        <li>
                          <a href="foo">Shop</a>
                        </li>
                        <li>
                          <a href="foo">Privacy policy</a>
                        </li>
                        <li>
                          <a href="foo">Contact search</a>
                        </li>
                        <li>
                          <a href="foo">Jobs and vacancies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
