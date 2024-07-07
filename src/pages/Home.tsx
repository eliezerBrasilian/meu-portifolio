import "react-datepicker/dist/react-datepicker.css";
import meimg from "../assets/me.jpg";
import rightIcon from "../assets/next.png";
import { CustomBtn } from "../components/CustomBtn";
import hs from "../modules/Home.module.css";
import { buildEmailService } from "../services/factory/EmailServiceFactory";

export function Home() {
  return (
    <div className={hs.home_container}>
      <HomeContentRow />
    </div>
  );
}

function HomeContentRow() {
  return (
    <div className={hs.row_container}>
      <div className={hs.profile_img}>
        <img src={meimg} />
      </div>

      <HomeContentColumn />
    </div>
  );
}

function HomeContentColumn() {
  const emailService = buildEmailService();

  const onClick = () => {
    emailService.sendEmail(
      "Proposta de Emprego",
      "Olá, tenho uma proposta interessante para discutirmos."
    );
  };

  return (
    <div className={hs.home_column}>
      <p>Oi, eu sou</p>
      <h2>Eliezer Assunção de Paulo</h2>
      <p>Desenvolvedor FullStack</p>

      <div className={hs.about_me_column}>
        <p>Sobre mim</p>

        <p>
          Meu nome é Eliezer Assunção de Paulo, tenho 24 anos. Sou desenvolvedor
          FullStack há aproximadamente 5 anos. Eu desenvolvo sites com React,
          Backend monolíticos com Spring Boot e crio aplicativos Android
          utilizando o framework Jetpack-compose 🍵
        </p>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <CustomBtn
            icon={rightIcon}
            backgroundColor="#17B761"
            text="Enviar proposta"
            padding={"9px 15px 9px 15px"}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
