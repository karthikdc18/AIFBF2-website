import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true); // Display success message on form submit
  };

  const handleClose = () => {
    setIsSubmitted(false); // Close the popup when the close button is clicked
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-tr from-green-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={<span className="text-orange-400 text-4xl font-bold">Get In Touch</span>}
          subtitle="We're here to help with your financial advocacy needs"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@aifbf.org" className="text-gray-600">info@aifbf.org</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+918792006430" className="text-gray-600">+91 8792006430</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
ANDAPURA VILLAGE, ATTIBELE HOBLI, <br/>
  ANEKAL TALUK, ELECTRONIC CITY POST,<br/> Bengaluru  Karnataka, 560100
</p>


                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition-colors
"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Success Message Popup */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <span className="text-xl">&times;</span>
                </button>
                <div className="text-center">
                  <span className="text-3xl text-green-600">✔</span>
                  <h3 className="mt-4 text-lg font-semibold text-orange-400">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mt-2">Your message has been sent. We will get back to you shortly.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
