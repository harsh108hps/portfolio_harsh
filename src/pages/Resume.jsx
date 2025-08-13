import React from "react";

const Resume = () => {
  // Updated Google Drive file details
  const viewUrl = "https://drive.google.com/file/d/10UMm2WXACdFjgdUa-Mp7VqU43BuWkL1h/view";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=10UMm2WXACdFjgdUa-Mp7VqU43BuWkL1h";

  const handleResumeClick = () => {
    // Open in new tab for viewing
    window.open(viewUrl, "_blank");

    // Trigger download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Harsh_Pratap_Singh_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500); // Delay so both actions work smoothly
  };

  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center px-4">
      
      {/* Page Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400">
        Resume
      </h1>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-col items-center text-center space-y-6 max-w-lg">
        
        {/* Gradient Sub-heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400">
          My Resume
        </h2>

        <p className="text-gray-300">
          Click the button below to view and download my resume.
        </p>

        <button
          onClick={handleResumeClick}
          className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 text-black font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
        >
          📄 View & Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;
