export class Movie {
    constructor(title, description, duration, lizPref, conPref, moviePoster) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.lizPref = lizPref;
        this.conPref = conPref;
        this.lizScore = 0;
        this.conScore = 0;
        this.score = 0;
        this.moviePoster = moviePoster;
    }

    addLiz(x) {
        this.lizScore = x;
    }

    addCon(x) {
        this.conScore = x;
    }

    scoreCalculator() {
        if (this.lizScore === 0 || this.conScore === 0) {
            this.score = 0;
        }
        else if (this.lizScore === this.conScore) {
            this.score = this.lizScore;
        }
        else if (this.lizPref >= this.conPref && this.conScore === 3) {
            this.score = this.lizScore + 0.75;
        }
        else if (this.conPref >= this.lizPref && this.lizScore === 3) {
            this.score = this.conScore + 0.75;
        }
        else if (this.lizPref >= this.conPref && this.conScore === 2) {
            this.score = this.lizScore + 0.5;
        }
        else if (this.conPref >= this.lizPref && this.lizScore === 2) {
            this.score = this.conScore + 0.5;
        }
        else {
            this.score = 0;
        }
    }

    
};

export class MovieList {
    constructor() {
        this.list = [];
    }

    addMovie(x) {
        if (x instanceof Movie) {
            this.list.push(x);
        } else {
            throw new Error("Not a movie");
        }
    }

    sortMovies() {
        this.list.sort((a, b) =>  {return b.score - a.score});
    }

    removeMovie(x) {
        const indexToRemove = this.list.findIndex(x);
        this.list.splice(indexToRemove);
    }

    printMovies() {
        console.log(this.list);
    }

    refineList(lDur, cDur, lOp, cOp) {
        this.list = this.list.filter(film => {return film.duration <= lDur});
        this.list = this.list.filter(film => {return film.duration <= cDur});
        this.list = this.list.filter(film => {return film.lizPref >= lOp});
        this.list = this.list.filter(film => {return film.conPref >= cOp});

    }

    shuffle() {
        for (let i = this.list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            const temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
        }
    }
};

