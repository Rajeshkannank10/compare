class movie(){
    constructor(title,std,rating){
        this.title= title;
        this.std= std;
        this.rating=rating;
    }
    getrating() {
        return "the rating is  " + this.rating;
      }
    }
    console.log(getrating());

    class movie {
        constructor(title, studio, rating){
            this.title = title;
            this.studio = studio;
            this.rating = "PG";
        }
    }
    const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
    console.log(CasinoRoyale.rating);