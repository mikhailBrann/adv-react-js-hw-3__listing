const TruncateText = ({text, maxLength}: {text: string, maxLength: number}) => {
    if(!text || typeof text !== 'string') {
        return;
    }
 
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    //return text > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export default TruncateText;