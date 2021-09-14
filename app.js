console.log("Let's get this party started!");
const $img = $("#img");

/* search for a GIF  */
  
$("form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let search = $("#search").val();
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: search,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      }
    });

    getImg(response.data);
    $("#search").val("");
  });


function getImg(response) {
    const rows = response.data.length;
    let id = Math.floor(Math.random() * rows);
    let $newGif = $("<img>", {
    src: response.data[id].images.original.url,
    });
    $img.append($newGif); 
  }
 

  $("#remove").on("click", function() {
    $img.empty();
  });

  