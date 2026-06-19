import "./About.css";
import AboutBounce from "./AboutBounce";
import CopyEmail from "./CopyEmail";
import Soluciones from "./Soluciones";

const About = () => {
  return (
    <div className="About">
      <AboutBounce />
      <div className="info">
        <h1>About</h1>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
      </div>
      <div className="ondas" />
      <div className="Contacto">
        <Soluciones />
        <CopyEmail />
      </div>
    </div>
  );
};

export default About;
