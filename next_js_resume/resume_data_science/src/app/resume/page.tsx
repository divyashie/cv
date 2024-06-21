"use client";

import Head from 'next/head';
import resumeData from '../../resumeData.json';
import Image from 'next/image';

const Resume = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact Me</a>
      </nav>

      <div className="page-content">
        <div className="white-box">
          <Image
            src="/Designer.jpg" // Path to your image
            alt="Description of image"
            width={500} // Specify the width of the image
            height={300} // Specify the height of the image
            layout="responsive" // This can be different based on your layout needs
          />
        </div>
        <div className="text-box">
          <div className="text-content">
            <section id="education" className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p>{edu.studyType} in {edu.area}</p>
                  <p>{edu.startDate} – {edu.endDate}</p>
                  <p>GPA: {edu.gpa}</p>
                  <p>Coursework: {edu.courses.join(', ')}</p>
                </div>
              ))}
            </section>

            <section id="skills" className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p>{skill.keywords.join(', ')}</p>
                </div>
              ))}
            </section>

            <section id="experience" className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Experience</h2>
              {resumeData.work.map((job, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p>{job.position}</p>
                  <p>{job.startDate} – {job.endDate}</p>
                  <p>{job.summary}</p>
                  <ul className="list-disc list-inside">
                    {job.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section id="projects" className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Projects</h2>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="list-disc list-inside">
                    {project.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                  </ul>
                  {project.url && <p>GitHub: <a href={project.url} className="text-blue-400 hover:underline">{project.url}</a></p>}
                </div>
              ))}
            </section>

            <section id="certifications" className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Certifications</h2>
              {resumeData.certificates.map((cert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      <div className="scroll-guide">
        <a href="#education"></a>
        <a href="#skills"></a>
        <a href="#experience"></a>
        <a href="#projects"></a>
        <a href="#certifications"></a>
      </div>
    </div>
  );
};

export default Resume;