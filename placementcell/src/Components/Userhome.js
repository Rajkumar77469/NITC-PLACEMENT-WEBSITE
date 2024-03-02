
import Layout from "./Layout/Layout";

const Userhome = () => {
  return (
    <div>
      <h1>Welcome to User Panel</h1>
      <Layout /> {/* Rendering the Layout */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <button style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>View Profile</button> {/* View Profile Button */}
        <button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Contact</button> {/* Contact Button */}
      </div>
    </div>
  );
};

export default Userhome;


 // <span style={{ fontSize: '24px', marginRight: '10px' }}>🔔</span> {/* Notification sign */}
