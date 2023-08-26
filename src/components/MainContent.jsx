import "./MainContent.css";
import Button from "./Button.jsx";
import mailIcon from "../assets/mail-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

export default function MainContent() {
  return (
    <>
      <section className="contact">

        <h1 className="title">Alfredo Canto</h1>
        <h2 className="subtitle">Software developer</h2>
        <h3 className="subtitle-2">alfredocanto.github.io</h3>

        <div className="button-container">
          <Button className="email-button" text="Email" logo={mailIcon} />
          <Button className="linkedin-button" text="Linkedin" logo={linkedinIcon} />
        </div>

      </section>

      <section className="about">
        <h3 className="about-title">About</h3>
        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nobis vero illo saepe fuga enim, voluptate eius facilis ipsa repellat sit tempora a iste quisquam velit perferendis aspernatur! Ducimus, ea?</p>
      </section>

      <section className="experience">
        <h3 className="experience-title">Experience</h3>
        <p className="experience-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rem voluptas totam obcaecati quia neque excepturi commodi quidem incidunt eligendi eius eaque, dicta molestiae delectus qui fuga pariatur velit repudiandae.</p>
      </section>

    </>
  )
}