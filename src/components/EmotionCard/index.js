import './index.css';

const EmotionCard=(props)=>{
    const {emotionDetails,isHighlighted}=props;
    const {imageUrl,title,description,cardColor}=emotionDetails;
    
    const highlightedEmotionTitle=isHighlighted && "highlighted-emotion-title";
    const highlightedEmotionDescription=isHighlighted && "highlighted-emotion-description";
    const hilightedEmotionCard=isHighlighted && "highlighted-emotion-card";

    return(
        <li className={`emotion-card ${hilightedEmotionCard}`} style={{backgroundColor: cardColor}}>
            <img src={imageUrl} className="emotion-image" alt="emotion"/>
            <p className={`emotion-title ${highlightedEmotionTitle}`}>{title}</p>
            <p className={`emotion-description ${highlightedEmotionDescription}`}>{description}</p>
        </li>
    );
};

export default EmotionCard;