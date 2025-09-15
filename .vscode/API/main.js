const more = document.getElementById("more");

async function fetchData() {
    const input = document.getElementById("input").value.toLowerCase();
    console.log(input)
    try {
        const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data = await response.json();
        const data2 = await response2.json();
        console.log(data2.results)
        more.textContent = "TRY THESE NAMES :-";
        data2.results.forEach(name => {
            console.log(name.name);
            more.textContent += name.name + " ";
            // more.appendChild(more);
          });
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            const image = document.getElementById("image");
            const imagepath = data.sprites.front_shiny;
            image.src = imagepath;
            image.style.display = "block";
            console.log(data2);

        }
    catch (err) {
            console.log(err)
        }
    }