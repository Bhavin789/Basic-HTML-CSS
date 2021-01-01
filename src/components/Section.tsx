import * as React from "react";

export interface SectionProps {
  headerTitle: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  headerTitle,
  id = "section",
}) => {
  return (
    <section className="main-section" id={id}>
      <header className="header">{headerTitle}</header>
      {children}
    </section>
  );
};

export default Section;
