import React from "react";
import { FooterDnd, FooterInfo } from "./styles";
import Link from "../Link";

function FooterOpen() {
  return (
    <FooterDnd>
      <FooterInfo>
        <p>
          &copy; 2022 &nbsp;
          <Link
            href="https://www.patriciadourado.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patricia Dourado
          </Link>
        </p>
      </FooterInfo>
    </FooterDnd>
  );
}

export default FooterOpen;
