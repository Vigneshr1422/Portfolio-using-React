import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Card';
import Sidebar from './components/Sidebar/Container';
import Footer from './Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';


const ExperienceCard = ({ company, role, duration, details }) => (
  <div className="relative group bg-gray-800/60 p-6 rounded-2xl shadow-lg border border-cyan-500/30 hover:border-cyan-400 transition duration-300">
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-900/30 to-cyan-800/30 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur-sm" />
    
    <div className="relative z-10 text-white">
      <h3 className="text-2xl font-semibold mb-1 text-cyan-300">{company}</h3>
      <p className="text-lg font-medium text-sky-200">{role}</p>
      <p className="text-sm text-gray-300 italic mb-4">{duration}</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
        {details.map((point, index) => (
          <li key={index} className="pl-2">{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const skillBars = (skills) =>
  skills.map((skill, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-800/70 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="relative z-10">
        <h3 className="text-xl sm:text-lg md:text-lg font-bold text-white mb-2">{skill.name}</h3>
        {skill.level && (
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-sky-400 to-cyan-300 h-2 rounded-full transition-all duration-700"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        )}
      </div>
    </div>
  ));

  function Home() {
    const [sending, setSending] = useState(false);
  
    // Initialize formData from localStorage or default values
    const [formData, setFormData] = useState(() => {
      const savedData = localStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : { name: '', email: '', message: '' };
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSending(true);
  
      // Sending email with emailjs
      emailjs
        .send(
          'service_bwipo6o',     // Replace with your EmailJS service ID
          'template_0ninx8j',    // Replace with your EmailJS template ID
          formData,
          '1K4Z1DQiS0AVGorrW'   // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear form on success
            localStorage.removeItem('formData'); // Remove data from localStorage
          },
          (error) => {
            toast.error('Failed to send message!');
            console.error(error);
          }
        )
        .finally(() => {
          setSending(false);
        });
    };
  
    // Save formData to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem('formData', JSON.stringify(formData)); // Store form data in localStorage
    }, [formData]);
  
    const [isVisible, setIsVisible] = useState({});
  
    const skills = [
      { name: "React.js", level: 65 },
      { name: "Tailwind CSS", level: 75 },
      { name: "MySQL", level: 60 },
      { name: "Node.js", level: 65 },
      { name: "Mongo DB", level: 70 },
      { name: "GitHub", level: 75 },
      { name: "Firebase", level: 50 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 70 },
    ];
  
    const languages = [
      { name: "Java", level: 80 },
      { name: "Javascript", level: 60 },
    ];
  
    const otherskills = [
      { name: "Problem Solving" },
      { name: "Debugging" },
      { name: "Team Working" },
      { name: "Content Writing" },
    ];
  
    // Scroll animation observer
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [target.id]: true }));
            }
          });
        },
        { threshold: 0.1 }
      );
  
      document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
// function Home() {
//   const [sending, setSending] = useState(false);
// const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   message: ''
// });

// const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   setSending(true);

//   emailjs
//     .send(
//       'service_bwipo6o',     // Replace with your EmailJS service ID
//       'template_0ninx8j',    // Replace with your EmailJS template ID
//       formData,
//       '1K4Z1DQiS0AVGorrW'      // Replace with your EmailJS public key
//     )
//     .then(
//       (response) => {
//         toast.success('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       },
//       (error) => {
//         toast.error('Failed to send message!');
//         console.error(error);
//       }
//     )
//     .finally(() => {
//       setSending(false);
//     });
// };
//   const [isVisible, setIsVisible] = useState({});

//   const skills = [
//     { name: "React.js", level: 65 },
//     { name: "Tailwind CSS", level: 75 },
//     { name: "MySQL", level: 60 },
//     { name: "Node.js", level: 65 },
//     { name: "Mongo DB", level: 70 },
//     { name: "GitHub", level: 75 },
//     { name: "Firebase", level: 50 },
//     { name: "HTML", level: 85 },
//     { name: "CSS", level: 70 },
//   ];

//   const languages = [
//     { name: "Java", level: 80 },
//     { name: "Javascript", level: 60 },
//   ];

//   const otherskills = [
//     { name: "Problem Solving" },
//     { name: "Debugging" },
//     { name: "Team Working" },
//     { name: "Content Writing" },
//   ];

//   // Scroll animation observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(({ isIntersecting, target }) => {
//           if (isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-sky-900 min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="container mx-auto px-8 py-16 sm:py-16">
  <div className="flex flex-col md:flex-row gap-8">
    <aside className="w-full md:w-1/4">
      <Sidebar />
    </aside>

    <main className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-10">
    <div
          id="card1"
          data-animate
          className={`transition-all duration-[2000ms] transform ${isVisible.card1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <Container />
        </div>

        <div className="relative group overflow-hidden rounded-2xl" data-animate id="video-container">
          <DotLottieReact
            src="https://lottie.host/a28cd18a-3640-4c4f-9e17-110741eb59eb/eUaGvGjnmj.lottie"
            loop
            autoplay
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  </div>
</div>

      <Section id="about" title="About Me">
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Image on the left */}
    <div className="md:w-1/3 w-full">
      <img
        src="/vignesh_standlike_hero.jpg" // replace with your actual image path
        alt="Vignesh R."
        className="rounded-2xl shadow-lg w-full h-auto"
      />
    </div>

    {/* Text on the right */}
    <div className="md:w-2/3 w-full text-white space-y-4">
  <h3 className="text-3xl font-bold text-cyan-300">Hi, I'm Vignesh R.</h3>
  <p className="text-lg leading-relaxed text-gray-200 text-justify">
  I'm a passionate software developer from Karaikudi, Tamil Nadu, with a strong foundation in Java, SQL, React, and modern
   web technologies. I hold an MCA from M. Kumarasamy College of Engineering and have gained hands-on experience through 
   internships in IoT and Web Development.
  </p>
  <p className="text-lg leading-relaxed text-gray-200 text-justify">
  I enjoy solving problems, building practical applications, and continuously exploring new technologies. 
  My goal is to contribute to impactful tech projects and grow as a skilled full-stack developer. </p>
</div>

  </div>
</Section>


      <Section title="Experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceCard
            company="Imbed Software, Karaikudi"
            role="IoT Intern"
            duration="May 2023 – Aug 2023"
            details={[
              "Enhanced reliability of IoT communication by 20%",
              "Optimized communication protocols to improve system performance and data efficiency"
            ]}
          />
          <ExperienceCard
            company="OctaNet"
            role="Virtual Intern"
            duration="Jan 2024 – Feb 2024"
            details={[
              "Completed virtual internship focusing on web development",
              "Collaborated on team projects using version control (GitHub)"
            ]}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Expertise">
      <div className="relative text-center mb-6">
  <div className="inline-block animate-float">
    <DotLottieReact
      src="https://lottie.host/1e7db0e5-0a14-4bfe-9f0e-6816f0609845/srEbxW56jH.lottie"
      loop
      autoplay
      style={{ height: '50px', width: '50px' }}
    />
  </div>
</div>

        <SkillGroup title="Programming Languages">{skillBars(languages)}</SkillGroup>
        <SkillGroup title="Development Skills">{skillBars(skills)}</SkillGroup>
        <SkillGroup title="Other Skills">
          {otherskills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-xl sm:text-lg md:text-lg font-bold text-white mb-2">{skill.name}</h3>
              </div>
            </div>
          ))}
        </SkillGroup>
      </Section>

      <Section id="contact" title="Contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left Side - Address */}
    <div className="space-y-6 text-center lg:text-left">
      <div className="flex justify-center lg:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-16 h-16 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10.5L12 4l9 6.5M4.5 12v7.5a.75.75 0 00.75.75H9v-6h6v6h3.75a.75.75 0 00.75-.75V12"
          />
        </svg>
      </div>

      <div>
        <p className="text-4xl font-black tracking-tight mb-4 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">Our Address</p>
        <p className="text-lg text-white font-semibold">
          No 5, Sivanantha Madam Lane<br />
          Koviloor Road ,<br />
          Karaikudi ,<br />
          Sivaganga - 630001 <br />
          Tamil Nadu
        </p>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <div>
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-black tracking-tight uppercase mb-4 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-lg text-white font-semibold">
          Feel free to reach out if you’d like to collaborate – you’re just a few clicks away!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div>
          <label className="block text-lg text-white font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Enter Name"
          />
        </div>

        <div>
          <label className="block text-lg text-white font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Enter Your Mail id"
          />
        </div>

        <div>
          <label className="block text-lg text-white font-semibold">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <div className="text-center lg:text-left">
          <button
            type="submit"
            disabled={sending}
            className={`font-semibold px-6 py-3 rounded-lg shadow transition 
              ${sending ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  </div>
  
</Section>







      <Footer />

      {/* Custom Animation CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// Reusable Components
const Section = ({ title, children }) => (
  <section className="py-20 bg-gradient-to-b from-gray-900 to-sky-900">
    <div className="container mx-auto px-10">
      <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const ExperienceItem = ({ company, role, duration }) => (
  <div className="my-5 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300">
    <div className="relative z-10 text-white">
      <h3 className="text-xl font-bold mb-2">{company}</h3>
      <p>{role}</p>
      <p>{duration}</p>
    </div>
  </div>
);

const SkillGroup = ({ title, children }) => (
  <>
    <h2 className="text-xl font-black m-5 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
      {title}
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{children}</div>
  </>
);

const FloatingImage = ({ src }) => (
  <div className="relative text-center mb-6">
    <div className="inline-block animate-float">
      <img src={src} alt="Floating Icon" className="h-16 w-16 mx-auto rounded-md" />
    </div>
  </div>
);

export default Home;
