const btn = document.getElementById("shortbtn");

btn.addEventListener("click", short);

function short() {
  let lurl = document.getElementById("url").value;
  console.log(lurl);
  if (lurl == "") {
    alert("Please enter a URL");
  }
  const purl = "https://shrtlnk.dev/api/v2/link";
  fetch(purl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": "EwRBkB6jOqqQ2BeaTE6OwrxBJ4FZDqkqw4mHmjbt600vs",
      Accept: "application/json",
    },
    body: JSON.stringify({ url: `${lurl}` }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
    .then((data) => {
      console.log(data);
      const x = document.getElementById('copy');
       x.style.visibility =  'visible';
      if(data !== '' || data !== undefined){
        document
        .getElementById("surl")
        .appendChild(document.createTextNode(data["shrtlnk"]));
      }
    })
    .catch((err) => alert(`Error! ${err}`));
}

const cbtn = document.getElementById('cpybtn')

cbtn.addEventListener('click', copyToClipboard);

function copyToClipboard(){
    /* Get the text field */
    const copyText = document.getElementById("surl");
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText);
    /* Alert the copied text */ 
    alert('Link Copied to clipboard');
    const x = document.getElementById('copy');
    x.style.visibility='hidden';

    document.getElementById('surl').innerText="";
}

