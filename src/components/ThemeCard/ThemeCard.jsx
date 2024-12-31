import PropTypes from "prop-types";
import { 
    Card,
    CardTitle,
    CardSubtitle
} from "./styles";

const ThemeCard = ({ title, description, onClickHandler }) => {
    return (
        <Card onClick={onClickHandler} >
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
        </Card>
    )
}

ThemeCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default ThemeCard;