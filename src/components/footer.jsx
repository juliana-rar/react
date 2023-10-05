import React from "react";


const Footer=()=>{
    return(
        <div className="footer">
            <br />
            <div className="sb__footer section__padding">
                <br />
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Recursos</h4>
                        <a href="https://www.wired.com/">
                            <p>Wired</p>
                        </a>
                        <a href="https://arstechnica.com/">
                            <p>Arstechnica</p>
                        </a>
                        <a href="https://techcrunch.com/?guccounter=1">
                            <p>Tech Crunch</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="https://www.culturavegana.com/">
                            <p>Cultura Vegana</p>
                        </a>
                        <a href="https://www.escohotado.org/">
                            <p>Antonio Eschotado</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        {/* <h4>Company</h4> */}
                        <br />
                        <a href="/about">
                                <p>About</p>
                        </a>
                        <a href="/contactus">
                            <p>Contacto</p>
                        </a>
                    </div>

                </div>
                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} TrustINFO.    All rights reserved
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms-conditions"><div><p>Términos y condiciones</p></div></a>
                        <a href="/privacy"><div><p>Privacidad</p></div></a>
                        <a href="/cookies"><div><p>Política de cookies</p></div></a>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Footer;