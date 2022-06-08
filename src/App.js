import Layout from './Components/Layout/Layout.js'
import Home from './Components/Pages/Home.js'
import ContactUs from './Components/Pages/ContactUs.js'
import PageNotFound from './Components/Pages/PageNotFound.js';
import SignIn from './Components/Pages/SignIn.js';

import './App.css';

function App() {
  return (
    <Layout >
      <ContactUs />
    </Layout>
  );
}

export default App;
