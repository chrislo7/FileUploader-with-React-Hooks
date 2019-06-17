const ValidateExtension = (fileName) => {
    let validExtensions = [ '.jpg', '.jpeg', '.png', '.bmp', '.gif' ];

    let strArr = fileName.toLowerCase().split("");
    let extension = strArr.slice(strArr.lastIndexOf('.')).join('');

    if ( validExtensions.lastIndexOf(extension) === -1 ) {
        return false;
    } else {
        return true;
    }
}


export default ValidateExtension;