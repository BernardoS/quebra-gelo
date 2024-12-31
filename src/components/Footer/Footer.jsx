import { PrimaryFooter, SecondaryFooter } from "./style";
import MascotBlue from "../../assets/mascot-blue.svg";
import MascotYellow from "../../assets/mascot-yellow.svg";
import PropTypes from "prop-types";

const Footer = ({ version, withMascot }) => {

    let component = (
        <PrimaryFooter>
            {withMascot && (
                <img alt="Mascote do site" aria-label="Cubo de gelo sorridente com luvas azuis" src={MascotBlue} />
            )}
            <a href="https://github.com/BernardoS">Developed by BernardoS</a>
        </PrimaryFooter>
    );

    switch (version) {
        case "secondary":
            component = (
                <SecondaryFooter>
                    {withMascot && (
                        <img alt="Mascote do site" aria-label="Cubo de gelo sorridente com luvas amarelas" src={MascotYellow} />
                    )}
                    <a href="https://github.com/BernardoS">Developed by BernardoS</a>
                </SecondaryFooter>
            );
            break;
        case "primary":
            component = (
                <PrimaryFooter>
                    {withMascot && (
                        <img alt="Mascote do site" aria-label="Cubo de gelo sorridente com luvas azuis" src={MascotBlue} />
                    )}
                    <a href="https://github.com/BernardoS">Developed by BernardoS</a>
                </PrimaryFooter>
            );
            break;
    }

    return component;

}

Footer.propTypes = {
    version: PropTypes.string.isRequired,
    withMascot: PropTypes.bool
}

export default Footer;