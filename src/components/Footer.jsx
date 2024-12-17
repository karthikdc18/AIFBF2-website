import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="w-8 h-8 mr-2 text-orange-300" />
              <span className="text-xl font-bold text-orange-300">AIFBF</span>
            </div>
            <p className="text-sm">
              Empowering financial borrowers across India with actionable insights and lawful solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-orange-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Our Objectives</a></li>
              <li><a href="#sectors" className="hover:text-blue-400 transition-colors">Our Sectors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-orange-300 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-orange-300" />
                <span>info@aifbf.org</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-orange-300" />
                <span>+91 8792006430</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-300" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-orange-300  mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-400"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} AIFBF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
