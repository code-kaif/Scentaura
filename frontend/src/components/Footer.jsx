import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 text-base-content p-2 md:p-4">
        <aside>
          <p className="font-medium md:text-[16px] text-[12px]">
            Copyright © {new Date().getFullYear()} - All right reserved by
            ScentAura Pvt Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
