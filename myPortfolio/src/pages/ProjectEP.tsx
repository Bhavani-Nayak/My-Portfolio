
export default function ProjectEP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white text-gray-800">
      {/* Hero Section */}
      <header className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-indigo-700">
          Your App Name
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          A short catchy tagline about how your app solves problems and makes life easier.
        </p>
        <button className="bg-indigo-600 text-white rounded-2xl px-6 py-3 text-lg hover:bg-indigo-700 transition">
          Download Now
        </button>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          App Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl shadow-md p-6 text-center">
            <div className="mx-auto h-12 w-12 text-indigo-600 mb-4 text-4xl">📱</div>
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p>Simple, intuitive, and easy-to-use interface for everyone.</p>
          </div>
          <div className="rounded-2xl shadow-md p-6 text-center">
            <div className="mx-auto h-12 w-12 text-indigo-600 mb-4 text-4xl">✨</div>
            <h3 className="text-xl font-semibold mb-2">Smart Features</h3>
            <p>AI-powered tools that make your daily tasks effortless.</p>
          </div>
          <div className="rounded-2xl shadow-md p-6 text-center">
            <div className="mx-auto h-12 w-12 text-indigo-600 mb-4 text-4xl">👥</div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p>Connect with users worldwide and share your experiences.</p>
          </div>
          <div className="rounded-2xl shadow-md p-6 text-center">
            <div className="mx-auto h-12 w-12 text-indigo-600 mb-4 text-4xl">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p>Strong encryption and privacy-first policies to protect you.</p>
          </div>
        </div>
      </section>

      {/* Screenshot / Preview Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          App Preview
        </h2>
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x700"
            alt="App Screenshot"
            className="rounded-2xl shadow-xl border"
          />
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-indigo-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Experience It?
        </h2>
        <p className="mb-6">Download the app today and make life simpler.</p>
        <button className="bg-white text-indigo-700 rounded-2xl px-6 py-3 text-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </footer>
    </div>
  );
}
