import React from "react";
import bgImage from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
      <footer
        class="footer p-10 ml-20 text-gray-500 mx-auto "
        
      >
        <div>
          <span class="footer-title text-xl uppercase">Services</span>
          <p>Emergency checkup</p>
          <p>Monthly checkup</p>
          <p>Weekly checkup</p>
          <p>Deep checkup</p>
        </div>
        <div>
          <span class="footer-title text-xl uppercase">Oral Health</span>
            <p>Fluoride treatment</p>
            <p>Cavity filling</p>
            <p>Teat whitening</p>
        </div>
        <div>
          <span class="footer-title text-xl uppercase">Our Address</span>
           <p> Bangladesh Dhaka motijhil</p>
        </div>
      </footer>
      <footer class="footer footer-center pb-5 font-medium text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
