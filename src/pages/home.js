import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/home.css'
import { Link } from 'react-router-dom';
import FAQItem from '../components/Faq';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const faqs = [
  { question: 'What are the restrictions on resume format?', answer: 'There are no restrictions on the resume format barring a few mentioned below. The top heading of your resume should be your Name, Department, year of study, and contact information. A table of educational qualifications should follow it including 10th, 12th marks, and CPI(UG and PG both if applicable) in reverse chronological order.' },
  { question: 'What should be the name of the resume file (one page)?', answer: 'The resume file should be named as RollNumber_Name__Program_Department_ResumeNumber. For example, a student with the following details: Roll number: 190351, Name: Gyanendra Kumar, Program - BTech(BT), Department : Mechanical(ME) should name the resume files as 190351_Gyanendra_BT_ME_1, 190351_Gyanendra_BT_ME_2, 190351_Gyanendra_BT_ME_3' },
  { question: 'How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?', answer: 'JEE Mains/JEE Adv. ranks have to be mentioned in the numbers, not percentile. For eg, AIR 1234 in JEE Mains 2019. If someone wants to mention their rank in their department, a mail from the HoD of the department is required. Definitely mention the year of Activity or Achievement' },
  { question: 'When is a Project Verification Form (PVF) required?', answer: 'A PVF is needed to be signed by your mentor for any intern/project done under an IITK professor or any external organization (no PVF is needed for projects under institute clubs or course projects). Kindly ask your mentor/ Guide to send the filled PVF from his / her official email address to spoproofs2022@gmail.com.Only PVFs received on the given ID will be considered.Also, ask your mentor to mark you in cc.The PVF can be downloaded from here(spo.iitk.ac.in/docs/2021-22/PVF.doc). The subject and content of the project written on your resume should match that written on the PVF.' },
  { question: 'How to verify online courses/online projects?', answer: 'For verification of online courses/online projects, you will need to submit the pdf certificate issued by the concerned organization. While mentioning the same on your resume, you will have to specify that the course/project was an online course/project.' },

  // Add more FAQs as needed
];

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
return(

  <div>
    <Navbar />
    <div className="resources" id='resources'>
      <p className="resourceHead">Resources</p>
     <div className="listContainer">
     <Link to="https://spo.iitk.ac.in/docs/2021-22/deferred_placement_policy.pdf" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">Deffered Placement Policy</p>
    </div> </Link>
    <Link to="https://spo.iitk.ac.in/assets/2023-24/Placement_Policy_2023-24.pdf" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">Placement Policy</p>
    </div> </Link>
    <Link to="https://spo.iitk.ac.in/assets/2023-24/Internship-Policy-2023-24.pdf" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">Internship-Policy</p>
    </div> </Link>
    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdV3sWKB-GSbFNkHdGSSP7N4ydybbFYumTjBSIAaZw04Na-xQ/viewform" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">PPT Absence Form</p>
    </div> </Link>
    <Link to="https://docs.google.com/document/d/1zQg3xr6Ca0jHFWPn6o2ZCyi7ypxtjdFoYdIT4pZwncc/edit" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">Corporate Internship Waiver Form</p>
    </div> </Link>
    <Link to="https://spo.iitk.ac.in/docs/2021-22/List-of-companies.pdf" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">List of companies</p>
    </div> </Link>
    <Link to="https://drive.google.com/file/d/1Td9Z5gMgMO6U9mn8tXTS86IZ2Rs0LpWB/view" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">Previous Year Internship Proforma</p>
    </div> </Link>
    <Link to="https://drive.google.com/file/d/1VSVDkvSQO0Gi270WlxXeFr_ctxqtUERF/view" className='resourcesList'>
    <div className="listBox">
      <p className="resourcesTitle">Previous Year Placement Proforma</p>
    </div> </Link>
    </div> 
    </div> 

    <div className="roadMap" id='roadMap'>
      <p className="roadMapTitle">Preparation Roadmaps</p>
    <div className="listContainer">
      <Link to="https://spo.iitk.ac.in/assets/Roadmap_ME.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">Mechanical core</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_EE.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">Electrical core</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_Analytics.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">Analyst</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_PM.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">Product management</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_SDE.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">SDE</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_Consulting.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">Consulting</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_MSE.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">MSE Core</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_CHE.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">CHE Core</p>
       </div> </Link>
       <Link to="https://spo.iitk.ac.in/assets/Roadmap_AE.pdf" className='resourcesList'>
      <div className="listBox">
      <p className="resourcesTitle">AE Core</p>
       </div> </Link>
    </div>
    </div>
    <div className="faq" id='faq'>
      <p className="faqTitle">FAQs</p>
     <div className="question" style={{marginLeft:"3%",width:"94%"}}>
    {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div> 
    </div>
    <Footer />
  </div>
  
);
}
export default Home;
