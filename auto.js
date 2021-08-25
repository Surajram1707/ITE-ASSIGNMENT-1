const text="Fill in all your details to get registered";

let index =0;
function writeText(){
    auto = document.getElementById("head1");
	auto.innerText = text.slice(0,index);

	index++;
	if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);