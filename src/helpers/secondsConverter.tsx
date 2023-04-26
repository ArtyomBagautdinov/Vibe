const secondsConverter = (common_seconds: number) : string => {
    let minutes = Math.floor(common_seconds/60);
    let seconds = common_seconds%60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}


export default secondsConverter;