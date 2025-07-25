import React from 'react'
import heroBg from '../../assets/hero-bg.png'
import { useTheme } from '../../hooks/useTheme'

const Footer = () => {
    const { isDark } = useTheme();

    return (
        <footer
            className={`relative text-white py-12 px-4 border-t ${isDark ? 'border-white/10' : 'border-gray-300'}`}
            style={{
                backgroundColor: !isDark ? '#f8fafc' : 'transparent',
                backgroundImage: isDark ? `url(${heroBg})` : 'none',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white/10'}`}></div>
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className={`w-8 h-8 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded-full flex items-center justify-center`}>
                                <span className={`${isDark ? 'text-white' : 'text-gray-800'} font-medium text-sm`}>O</span>
                            </div>
                            <h3 className={`text-xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>OpiniFi</h3>
                        </div>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
                            Trade your opinions on real-world events and earn rewards from your insights.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                </svg>
                            </a>
                            <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Trading */}
                    <div className="space-y-4">
                        <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Trading</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Sports Markets</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Crypto Markets</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Crypto Markets</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Political Events</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Entertainment</a></li>
                        </ul>
                    </div>

                    {/* Platform */}
                    <div className="space-y-4">
                        <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Platform</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>How It Works</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Trading Guide</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Market Analysis</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Help Center</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact Us</a></li>
                            <li><a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'} backdrop-blur-sm rounded-xl p-6 mb-8 border`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stay Updated</h3>
                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Get the latest market insights delivered to your inbox.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`px-4 py-2 ${isDark ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-400'} border rounded-lg focus:outline-none backdrop-blur-sm flex-1 md:w-64`}
                            />
                            <button className={`${isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'} font-medium px-6 py-2 rounded-lg transition-all duration-200 whitespace-nowrap`}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            © 2025 OpiniFi. All rights reserved.
                        </div>
                        <div className={`flex items-center space-x-6 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span>🔒 Secure</span>
                            <span>⚡ Fast</span>
                            <span>🏆 Trusted</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
