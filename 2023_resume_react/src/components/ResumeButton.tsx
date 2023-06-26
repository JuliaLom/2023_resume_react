import resume from './src/images/testimg.png'

function ResumeButton() {

//     return(
//     <a href={resume} download="MyExampleDoc" target='_blank'>
//    <Button className="download-button">My Example Doc</Button>
//     </a>
//     );

    function handleClick() {

    }
    return (
        <button onClick={handleClick} className="download-button">Download Resume</button>
    );
}

export default ResumeButton;