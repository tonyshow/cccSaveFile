const {ccclass, property} = cc._decorator;
@ccclass
export default class scene extends cc.Component {

    eve(){
        let jsonInfo = [ {"acc":1},{"acc":2} ];
        let textToWrite =JSON.stringify(jsonInfo);
        let fileNameToSaveAs = "saveFile.json"
        if (cc.sys.isBrowser) {
            let textFileAsBlob = new Blob([textToWrite], {type:'application/json'});
            let downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null)
            {
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else
            {
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }
            downloadLink.click();
        } 
    }
}
