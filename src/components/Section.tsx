import * as React from "react";

export interface SectionProps {
  headerTitle: string;
}

const Section: React.FC<SectionProps> = ({ children, headerTitle }) => {
  return (
    <section className="main-section" id={headerTitle.replaceAll(" ", "_")}>
      <header className="header">{headerTitle}</header>
      {children}
    </section>
  );
};

export default Section;
