import Layout from '../Layout/Layout';
import Adminhome from './../Admin/Adminhome';
import Companyhome from './../company/Companyhome';
import Interviewhome from './../interview/interviewhome';
import { useState } from 'react';
import registersidepic from '../../Components/pages/registersidepic.jpg'
const Mainpage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
  
    {!activeComponent && (
      <Layout>
      <h4 className="heading">WELCOME TO NITC PLACEMENT WEBSITE (Centre for Career Development)</h4>
        <div className="main-container">
          <img className="main-side-image" src={registersidepic} alt="" />
          <div className='adminpagebutton'>
            <button onClick={() => renderComponent('Adminhome')}>Student</button>
            <button onClick={() => renderComponent('Companyhome')}>Companyhome</button>
            <button onClick={() => renderComponent('Interviewhome')}>Interviewhome</button>
          </div>
        </div>
      </Layout>
    )}
  
    <div>
      {activeComponent === 'Adminhome' && <Adminhome />}
      {activeComponent === 'Companyhome' && <Companyhome />}
      {activeComponent === 'Interviewhome' && <Interviewhome />}
    </div>
  </>
  
  );
};

export default Mainpage;