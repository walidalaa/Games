import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();

    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.getDetails(id);
  }

  getDetails(idGames) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "bdbe599495mshda7a89d6c480a36p1db22bjsn2818ea945f9a",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
      options
    )
      .then((response) => response.json())
      .then((response) => this.ui.displayDetails(response))
      .catch((err) => console.error(err))
      .finally(() => {
        loading.classList.add("d-none");
      });
  }
}
