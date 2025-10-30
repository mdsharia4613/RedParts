

const Footer = () => {

    return (
        <div className="bg-gray-800">
            <footer className="footer sm:footer-horizontal  text-base-content p-10 container mx-auto">
                <nav>
                    <h6 className="footer-title">Contacts us</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Delivery Information</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Returns</a>
                    <a className="link link-hover">Site Map</a>
                </nav>
                <nav>
                    <h6 className="footer-title">My Account</h6>
                    <a className="link link-hover">Store Location</a>
                    <a className="link link-hover"> Whish List</a>
                    <a className="link link-hover">gift Certificates</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Newsletter</h6>
                    <p className="text-xs w-80">Enter Your email sddress blow to subscribe to our newsletter and keep up to date white discounts and spicial offers.</p>
                    <div className="space-y-2 space-x-2">
                        <input className="bg-gray-900 px-2 py-1.5 " type="email"  placeholder="user@example.com"/>
                        <input className="bg-red-700 px-2 py-1" type="submit" value="subscribe" />
                    </div>
                    
                </nav>
            </footer>
        </div>



    );
};

export default Footer;