import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        <div className="faq-item">
          <h3>PhysiTask kaise kaam karta hai?</h3>
          <p>
            PhysiTask 10km ke range ke andar diffrent prakar ke kaamon ke liye
            achhe karmchariyon ko Kamm-dene wale logon se jodta hai. Bas ek
            Task post karein, available worker ko dekhein, aur apne project/Task
            ke liye sabse Badhiya vyakti ko Kaam par lagayein.
          </p>
        </div>
        <div className="faq-item">
          <h3>PhysiTask par main kaun-kaun se kaamon ko dhoondh sakta hoon?</h3>
          <p>
            PhysiTask ghar ki marammat, babysitter, pet sitter, elctrician, plumber, safai sevayein,
            bagwani, gardening, writing, aur vyaktigat sahayata jaise kai saare kaamon ko present karta
            hai. PhysiTask platform par aap anek prakar ke kaamon ko dhund sakte ya karwa sakte hain .
          </p>
        </div>
        {/* <div className="faq-item">
          <h3>How much does it cost to use PhysiTask?</h3>
          <p>PhysiTask offers a free basic plan with access to basic tasks and standard support. For access to all tasks and priority support, we offer a premium plan at $29/month. You can find more details in our Pricing section.</p>
        </div> */}
        <div className="faq-item">
          <h3>Kya PhysiTask istemal karne mein surakshit hai?</h3>

          <p>
            Haan, PhysiTask dono pakshon ke liye suraksha aur safety ko
            preference deta hai. Hum apne upyogkartaon ki adhikatam safety
            provide karne ke liye sakht background verification process
            apnate hain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
