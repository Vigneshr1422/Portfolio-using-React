import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CertificatePreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const data = [
    { id: 1, title: 'Cloud Infrastructure Foundations Associate- Oracle', by: 'Oracle', image: '/Oracle_Vignesh_R.jpg' },
    { id: 2, title: 'IBM Web Development with HTML, CSS, JavaScript', by: 'IBM', image: '/ibm.png' },
    { id: 3, title: 'Foundations of Cybersecurity by Google', by: 'Google', image: '/cyber.png' },
    { id: 4, title: 'Technical Support Fundamentals by Google', by: 'Google', image: '/ts.png' },
    { id: 5, title: 'Cloud Computing and Distributed Systems- NPTEL', by: 'NPTEL', image: '/cc.jpg' },
    { id: 6, title: 'Introduction to SQL by Simplilearn (10 Hours)', by: 'Simplilearn', image: '/sql.png' },
  ];

  const certificate = data.find(item => item.id === parseInt(id));

  if (!certificate) {
    return <div className="text-white p-10 text-center">Certificate not found</div>;
  }

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => navigate(-1), 400); // delay must match transition
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 flex flex-col items-center justify-center text-white font-semibold transform transition-all duration-500 ease-in-out ${
        isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <div className="max-w-3xl w-full bg-gray-800/70 border border-gray-600 rounded-xl p-6 shadow-2xl">
        <p className="text-3xl font-bold py-3 text-center">Certificate Preview</p>
        <hr className="mb-6 border-gray-600" />

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-white mb-1 text-center">{certificate.title}</h3>
          <p className="text-sm text-gray-400 mb-4 text-center">Issued by: {certificate.by}</p>

          <div className="mt-2">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="rounded-lg w-[80%] max-w-[600px] h-auto shadow-lg mx-auto"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-lg text-sm font-medium"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificatePreview;
