import { MoveRight, Github, Star, Zap, Cloud, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 min-h-screen flex justify-center items-center">
        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Manage <span className="text-cyan-400">Anywhere, Everywhere</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Your all-in-one solution for project management and task tracking
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg transition duration-300">
            Get Started <MoveRight className="ml-2 h-5 w-5" />
          </Button>
        </MotionDiv>
      </main>

      {/* Features Bento Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="h-8 w-8 text-yellow-400" />,
              title: "Lightning Fast",
              description: "Blazing fast performance for all your projects",
            },
            {
              icon: <Cloud className="h-8 w-8 text-blue-400" />,
              title: "Cloud Sync",
              description: "Access your data from anywhere, anytime",
            },
            {
              icon: <Lock className="h-8 w-8 text-green-400" />,
              title: "Secure",
              description: "Bank-level security for your sensitive information",
            },
            {
              icon: <Star className="h-8 w-8 text-purple-400" />,
              title: "Intuitive UI",
              description: "User-friendly interface for effortless management",
            },
            {
              icon: <Github className="h-8 w-8 text-gray-400" />,
              title: "Open Source",
              description: "Transparent and community-driven development",
            },
            {
              icon: <MoveRight className="h-8 w-8 text-red-400" />,
              title: "Customizable",
              description: "Tailor the app to fit your unique workflow",
            },
          ].map((feature, index) => (
            <MotionDiv
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
            Pricing <span className="text-cyan-400">Simplified</span>
          </h2>
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform -skew-y-3 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-blue-500/20 transform skew-y-3 rounded-3xl"></div>

            {/* Pricing card */}
            <div className="relative bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    Open Source
                  </h3>
                  <p className="text-5xl font-black mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                    Free Forever
                  </p>
                </div>
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="mt-4 md:mt-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
                    Get Started
                  </button>
                </MotionDiv>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                {[
                  {
                    icon: <Zap className="text-cyan-400" />,
                    text: "Unlimited projects",
                  },
                  {
                    icon: <Users className="text-cyan-400" />,
                    text: "Community support",
                  },
                  {
                    icon: <Cloud className="text-cyan-400" />,
                    text: "Cloud integration",
                  },
                  {
                    icon: <Star className="text-cyan-400" />,
                    text: "Regular updates",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* GitHub CTA Section */}
      <section className="bg-gray-900 min-h-screen flex flex-col gap-6 justify-center items-center">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
          Wanna <span className="text-cyan-400">Contribute ?</span>
        </h2>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 text-center bg-gray-800 p-10 mx-48 rounded-3xl shadow-lg"
        >
          <h2 className="text-4xl font-extrabold mb-8 text-white">
            Join Our <span className="text-cyan-400">Open Source</span>{" "}
            Community
          </h2>
          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
            >
              <Github className="mr-3 h-6 w-6" />
              Star us on GitHub
            </Link>
          </MotionDiv>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Your star helps us grow. Join thousands of developers already
            benefiting from our project.
          </p>
        </MotionDiv>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 Controllad. made with &hearts; by @adamst27.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </MotionDiv>
        </div>
      </footer>
    </div>
  );
}
