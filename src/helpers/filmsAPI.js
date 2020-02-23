import Poster from "../assets/images/poster.png";
import Poster2 from "../assets/images/poster-2.jpg";
import Poster3 from "../assets/images/poster-3.jpg";
import Poster4 from "../assets/images/poster-4.jpg";

export const getFilms = () => {
    return [
        {
            "id": 0,
            "poster": Poster,
            "title": "The Irishman",
            "desc": "Frank Sheeran is a man with a lot on his mind. The former labor union high official and hitman, learned to kill serving in Italy during the Second World War.",
            "duration": "3h 29min",
            "director": "Martin Scorsese",
            "showTime": ["11:30", "13:30", "18:00", "20:00"]
        },
        {
            "id": 1,
            "poster": Poster2,
            "title": "1917 (2019)",
            "desc": "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
            "duration": "1h 59min",
            "director": "Sam Mendes",
            "showTime": ["11:30", "13:30", "18:00"]
        },
        {
            "id": 2,
            "poster": Poster3,
            "title": "Toy Story 4",
            "desc": "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
            "duration": "1h 40min",
            "director": "Josh Cooley",
            "showTime": ["11:30", "13:30", "18:00"]
        },
        {
            "id": 3,
            "poster": Poster4,
            "title": "Bad Boys for Life",
            "desc": "The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.",
            "duration": "2h 04min",
            "director": "Adil El Arbi",
            "showTime": ["11:30", "18:00", "20:00"]
        }
    ];
}