const Footer = () => {
    return (
        <footer className=" bg-black text-white py-10 mt-10">
            <div className="container mx-auto flex justify-center space-x-10">
                <div className="p-4">
                    <span className="text-2xl font-bold">Food Zone</span>
                    <p>©2024 zaz Pvt. Ltd.</p>
                </div>
                <div className="p-4">
                    <ul className="space-y-2">
                        <li className="font-bold">Company</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Genie</li>
                    </ul>
                </div>
                <div className="p-4">
                    <ul className="space-y-2">
                        <li className="font-bold">Contact us</li>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
