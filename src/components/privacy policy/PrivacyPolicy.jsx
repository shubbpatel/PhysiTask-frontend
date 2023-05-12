import React from "react";
import "./privacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: [Date]</p>
      <p>
        At PhysiTask, we are committed to protecting your privacy. This Privacy
        Policy outlines our policies and practices regarding the collection,
        use, and disclosure of your personal information when you use our
        website and mobile application. <br />
        <br />
        By using our services, you agree to the collection and use of
        information in accordance with this Privacy Policy.
      </p>
      {/* Add more sections of the privacy policy as needed */}
      {/* ... */}
      <h2>Information Collection and Use</h2>
      <p>
        While using PhysiTask, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you. Personally identifiable information may include, but is
        not limited to:
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Date of birth</li>
          <li>Payment information</li>
        </ul>
        We use this information to provide and improve our services, to contact
        you regarding your account and our services, and to comply with any
        applicable laws and regulations.
      </p>
      <h2>Log Data</h2>
      <p>
        We collect information that your browser sends whenever you visit our
        website or use our mobile application ("Log Data"). This Log Data may
        include information such as your computer's Internet Protocol ("IP")
        address, browser type, browser version, the pages of our website or
        mobile application that you visit, the time and date of your visit, the
        time spent on those pages, and other statistics.{" "}
      </p>
      <h2>Cookies</h2>
      <p>
        Cookies are files with a small amount of data, which may include an
        anonymous unique identifier. Cookies are sent to your browser from a
        website and stored on your computer's hard drive. We use cookies to
        collect information and to improve our services. You can instruct your
        browser to refuse all cookies or to indicate when a cookie is being
        sent. However, if you do not accept cookies, you may not be able to use
        some portions of our services.{" "}
      </p>
      <h2>Service Providers</h2>
      <p>
        We may employ third-party companies and individuals to facilitate our
        services, to provide the services on our behalf, to perform
        service-related activities, or to assist us in analyzing how our
        services are used. These third parties have access to your personal
        information only to perform these tasks on our behalf and are obligated
        not to disclose or use it for any other purpose.{" "}
      </p>
      <h2>Security</h2>
      <p>
        The security of your personal information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage is 100% secure. While we strive to use commercially
        acceptable means to protect your personal information, we cannot
        guarantee its absolute security.{" "}
      </p>
      <h2>Links to Other Sites</h2>
      <p>
        Our services may contain links to other sites that are not operated by
        us. If you click on a third-party link, you will be directed to that
        third party's site. We strongly advise you to review the Privacy Policy
        of every site you visit. We have no control over and assume no
        responsibility for the content, privacy policies, or practices of any
        third-party sites or services.{" "}
      </p>
      <h2>Children's Privacy</h2>
      <p>
        Our services are not intended for use by anyone under the age of 13
        ("Children"). We do not knowingly collect personally identifiable
        information from children under 13. If you are a parent or guardian and
        you are aware that your child has provided us with personal information,
        please contact us. If we discover that a child under 13 has provided us
        with personal information, we will delete such information from our
        servers immediately.{" "}
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
        Changes to this Privacy Policy are effective when they are posted on
        this page.{" "}
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul>
        <li>By email: support@physitask.com</li>
        <li>By phone: +91 1234567890</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
