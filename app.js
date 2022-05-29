$("form").on("submit", async function(e){
    e.preventDefault();
    console.log("submit clicked")
    const searchTerm = $("#search-text").val()
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addResult(response.data);
    $("#search-text").val('');
})

$("#remove-btn").on("click", function(){
    $(".results").empty();
})

function addResult(result){
    const resultArea = $(".results");
    let numResults = result.data.length;
    if (numResults){
        let chooseRandom = Math.floor(Math.random() * numResults);

        let newDiv = document.createElement('div');
        newDiv.classList.add('result-div');

        let newGif = document.createElement('img');
        newGif.setAttribute('src', result.data[chooseRandom].images.original.url)
        newGif.classList.add('gif')

        console.log("newGif =", newGif)
        newDiv.append(newGif);
        resultArea.append(newDiv);
    }
}