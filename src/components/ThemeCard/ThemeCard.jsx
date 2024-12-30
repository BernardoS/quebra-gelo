import PropTypes from "prop-types";
import { 
    Card,
    CardTitle,
    CardSubtitle
} from "./styles";

const ThemeCard = ({ title, description }) => {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
        </Card>
    )
}

ThemeCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ThemeCard;