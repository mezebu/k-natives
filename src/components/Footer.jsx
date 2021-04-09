import React from "react";
import { Container } from "react-bootstrap";
import FooterLogo from "../assests/k-footer.png";

function Footer() {
  return (
    <div className="footer-page">
      <Container>
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12 mt-2">
                <img
                  class="img-responsive"
                  src={FooterLogo}
                  alt="logo"
                  width="150px"
                />

                <div>
                  <ul>
                    <li>
                      <a href="tel:9876543210">+380731184766</a>
                    </li>
                    <li>
                      <a href="foo">kharkivnatives@gmail.com</a>
                    </li>
                    <li>
                      <a href="foo">Ukraine kharkiv Bakulina 16</a>
                    </li>
                  </ul>
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
