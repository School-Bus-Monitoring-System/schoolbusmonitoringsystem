import React from "react";
import Layout from "../../components/Layout/Layout";
import MainView from "../../sections/MainView";

// Import the CookieConsent component (--save-dev) -> Dependency
import CookieConsent from "react-cookie-consent";

// This is the home page component.
const HomePage = () => {
  return (
    <Layout>
      {/* Attaching all main components for home page in Main View*/}
      {/* List of Components in Main View:
        * Navbar
        * Status - Login or Logout
        * OnBus
        * View Live
        * About
        * Contact
        * Footer
      */}
      <MainView />

      {/* Attaching CookieConsent */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px", borderRadius: "8px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </Layout>
  );
};

export default HomePage;
