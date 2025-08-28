// Update the import path to the correct location of Navbar
import Navbar from '../components/navbar/navbar';

const links = [
  { label: 'Admin', href: '/admin' },
  { label: 'Student', href: '/student' },
  { label: 'Teacher', href: '/teacher' }
];

const Homepage = () => {
  return (
    <>
      <Navbar links={links} />
      <div className=''>Homepage</div>
    </>
  );
};

export default Homepage;