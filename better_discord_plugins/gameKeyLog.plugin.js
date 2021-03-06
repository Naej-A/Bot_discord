/**
 * @name needed_plugin_to_play_snake
 * @version 0.0.1
 * @description plugin nécessaire pour envoyer au bot les touches utilisé par l'utilisateur
 * @author Antolefou
 *
 */



module.exports = class Example{

    load() { }

    start() {

//code here
        addEvent(document, "keydown", async function (e) {
            // console.log("keydown")
            e = e || window.event;
            // console.log(e.keyCode)

            let changeDir = null;
            let interestingKeyCode = [37, 38, 39, 40]

            if (e.keyCode >= 37 && e.keyCode <= 40 ) {
                if (e.keyCode === 38) {
                    changeDir = "up"
                    // console.log("up")

                } else if (e.keyCode === 40) {
                    changeDir = "down"
                    // console.log("down")
                    // down arrow
                } else if (e.keyCode === 37) {
                    changeDir = "left"
                    // console.log("left")
                    // left arrow
                } else if (e.keyCode === 39) {
                    changeDir = "right"
                    // console.log("right")
                    // right arrow
                } else {
                    changeDir = "null"
                }



                let url_api_request = "http://localhost:8081/changeDirection"

                let response = await fetch(url_api_request, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        //Origin: origin
                    },
                    body: JSON.stringify({
                        changeDir: changeDir
                    })

                }, {mode: 'cors'})
                    .then(result => result.json())
                    .then(data => {
                        return data;
                    });
                // console.log(response);

                return (response)
            }
            // use e.keyCode
        });

        function addEvent(element, eventName, callback) {
            if (element.addEventListener) {
                element.addEventListener(eventName, callback, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + eventName, callback);
            } else {
                element["on" + eventName] = callback;
            }
        }
//stop coding
    }
    stop(){

    }
}