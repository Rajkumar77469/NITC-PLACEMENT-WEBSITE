import Layout from '../Layout/Layout';
import Adminhome from './../Admin/Adminhome';
import Companyhome from './../company/Companyhome';
import Interviewhome from './../interview/interviewhome';
import { useState } from 'react';
const Mainpage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      {!activeComponent && (
        <Layout>
          <div>
            <button onClick={() => renderComponent('Adminhome')}>Student</button>
            <button onClick={() => renderComponent('Companyhome')}>Companyhome</button>
            <button onClick={() => renderComponent('Interviewhome')}>Interviewhome</button>
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