import linkedIn from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'

export default function Contact() {
    return (
        <div id="contact" className="min-h-screen p-4 flex justify-center items-center">
            <div className="max-w-5xl">
                <h1 className="text-7xl font-semibold mb-8">Contact</h1>
                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="border-2 bg-purple border-black rounded-lg">
                        <a href="https://linkedin.com/in/yash-sawant-b0676b271/" target="_blank" className="p-4 flex justify-center items-center hover:bg-hover-shadow transition-all">
                            <img src={linkedIn} alt="LinkedIn Profile" className="size-16" />
                        </a>
                    </div>
                    <div className="border-2 bg-orange border-black rounded-lg">
                        <a href="https://instagram.com/yashs903/" target="_blank" className="p-4 flex justify-center items-center hover:bg-hover-shadow transition-all">
                            <img src={instagram} alt="Instagra Profile" className="size-16" />
                        </a>
                    </div>
                    <div className="border-2 bg-green border-black rounded-lg">
                        <a href="https://github.com/blue56789/" target="_blank" className="p-4 flex justify-center items-center hover:bg-hover-shadow transition-all">
                            <img src={github} alt="GitHub Profile" className="size-16" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}