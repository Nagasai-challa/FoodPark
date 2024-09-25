const Contact = () => {
    return (
        <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg border-t-4 border-green-500">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Info</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <span className="text-green-600 font-semibold">Name:</span>
                    <span className="ml-2 text-gray-700">NagaSai Challa</span>
                </div>
                <div className="flex items-center">
                    <span className="text-green-600 font-semibold">Email:</span>
                    <a href="mailto:nagasaichalla1234@gmail.com" className="ml-2 text-blue-600 hover:underline">
                        nagasaichalla1234@gmail.com
                    </a>
                </div>
                <div className="flex items-center">
                    <span className="text-green-600 font-semibold">Mobile:</span>
                    <span className="ml-2 text-gray-700">+91 6281xxxx26</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
