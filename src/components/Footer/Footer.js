import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="card">
            <div className="inner-page-container need-help-container">
                <h2>Need Help?</h2>
                <div className="page-center-content cotactUs-container">
                    <div className="row mob-center">
                        <div className="col-sm-4 col-md-5 text-right">
                            <h3>Customer Service</h3>
                        </div>
                        <div className="col-sm-8 col-md-7 text-left">
                            <ul>
                                <li>8 AM - 8 PM EST
                        
                                    1.888.LUTRON1 (588-7661)</li>
                                <li><a id="Link-OnlineService-Support" href="https://www.lutron.com/en-US/Service-Support/Pages/Assistance/ContactCustomerService.aspx" target="_blank"  rel="noopener noreferrer"  >Customer Service Online</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="row marT-30">
                        <div className="col-sm-4 col-md-5 text-right">
                            <h3>Technical Support 24/7</h3>
                        </div>
                        <div className="col-sm-8 col-md-7 text-left">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-7 col-md-6">
                                            Email:
                                        </div>
                                        <div className="col-xs-6 col-sm-5 col-md-6 padL-0"> <a id="ctl00_m_g_ffadaebf_54ac_426b_8564_420e205f619a_ctl00_hlkSupportEmail" shape="rect" href="mailto:systemsupport@lutron.com?subject=Caseta Where to Buy&amp;body=Thank you for your Lutron support request. To appropriately address your needs, please provide the following information.%0A%091)%09Name%0A%092)%09City%0A%093)%09State%0A%094)%09Phone Number (optional)%0A%095)%09Request Details%0A%0APlease note: You should receive an auto acknowledgement shortly after submitting your request. If you don&#39;t hear from us, please check your spam folder.">systemsupport@lutron.com</a>
                            
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-7 col-md-6">
                                            Search &amp; share solutions online:
                                        </div>
                                        <div className="col-xs-6 col-sm-5 col-md-6 padL-0">
                                            <a id="Link-SupportComunity-Support" target="_blank"  rel="noopener noreferrer"  href="https://forums.lutron.com/?utm_source=lutron_web&amp;utm_medium=footer&amp;utm_campaign=lutron_web_referral">Lutron Support Community</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-7 col-md-6">
                                            Phone:
                                        </div>
                                        <div className="col-xs-6 col-sm-5 col-md-6 padL-0">
                                            1.844.588.7661
                                        </div>
                                    </div>
                                            
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-7 col-md-6">
                                            Fax:
                                        </div>
                                        <div className="col-xs-6 col-sm-5 col-md-6 padL-0">
                                            610.282.3769
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
