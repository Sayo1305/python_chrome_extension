const Input_tag = document.querySelector(".inputtag");
const submit_button = document.querySelector(".submitbutton");
const output_text = document.querySelector(".OutputText");

output_text.value += "\n >>> ";


submit_button.addEventListener("click", async () => {
  var text = Input_tag.value;
  var arr = text.split('"');
  var resultinput = arr.join('"');
  let result;
  await fetch("https://pythoncompiler.onrender.com/compile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      lang: "python3",
      code: resultinput,
      input: "",
    }),
  })
    .then((rep) => rep.json())
    .catch((Err) => console.log(Err))
    .then((rep) => {
      result = rep;
    });
    if(result.status === "400")
    {
      output_text.value  += result.data;
    }
    if(result.status === "200")
    {
      output_text.value += result.data.output;
    }
    Input_tag.value = "";
  // const encodedParams = new URLSearchParams();
  // encodedParams.append("LanguageChoice", "5");
  // encodedParams.append("Program",(resultinput));

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'X-RapidAPI-Key': '74515798fbmshe0dba6869dec757p1d1ad6jsn2cea12992d1a',
  //     'X-RapidAPI-Host': 'code-compiler.p.rapidapi.com'
  //   },
  //   body: encodedParams
  // };
  // let result;
  // await  fetch('https://code-compiler.p.rapidapi.com/v2', options)
  // .then(rep => rep.json())
  // .catch((Err)=> console.log(Err))
  // .then((rep) => {
  //   console.log(rep);
  //   result = rep;
  // });
  // if(result.Errors !== null)
  // {
  //   output_text.value += result.Errors;
  // }else{
  //   output_text.value +=result.Result;
  // }
  output_text.value += "\n >>> ";
  document.querySelector(".OutputText").scrollTop =
    output_text.offsetHeight + output_text.offsetTop;
});
