import { PrimaryFooter, SecondaryFooter } from "./style";
import PropTypes from "prop-types";

const Footer = ({ version }) => {

    let component = (<PrimaryFooter><a href="https://github.com/BernardoS">Developed by BernardoS</a></PrimaryFooter>);

    switch (version) {
        case "secondary":
            component = (
                <SecondaryFooter>
                    <a href="https://github.com/BernardoS">Developed by BernardoS</a>
                </SecondaryFooter>
            );
            break;
        case "primary":
            component = (
                <PrimaryFooter>
                    <a href="https://github.com/BernardoS">Developed by BernardoS</a>
                </PrimaryFooter>
            );
            break;
    }

    return component;

}

Footer.propTypes = {
    version: PropTypes.string.isRequired,
}

export default Footer;