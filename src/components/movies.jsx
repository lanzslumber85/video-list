import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Paragraph1 from "./paragraph-1";
import Paragraph0 from "./paragraph-0";
import Pages from "./pages";
import { paginate } from "../utils/paginate";
import ListGroup from "./listGroup";
import Table from "./table";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    activeCurrentPage: 1,
    itemsPerPage: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (movie) => {
    const filteredMovie = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: filteredMovie });
  };

  toggleLike = (movie) => {
    const clone = [...this.state.movies];
    const index = clone.indexOf(movie);
    clone[index] = { ...clone[index] };
    clone[index].liked = !clone[index].liked;
    this.setState({ movies: clone });
  };

  handlePaparanLamanAktif = (nomborLaman) => {
    this.setState({ activeCurrentPage: nomborLaman });
  };

  handlePaparanGenreAktif = (genreSelection) => {
    this.setState({
      activeGenreSelection: genreSelection,
      activeCurrentPage: 1,
    });
  };

  handleSorting = (path) => {
    const clone = { ...this.state.sortColumn };
    if (clone.path === path) {
      clone.order = clone.order === "asc" ? "desc" : "asc";
    } else {
      clone.path = path;
      clone.order = "asc";
    }
    this.setState({ sortColumn: clone });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <Paragraph0 count={this.state.movies.length} />;
    } else {
      const filteredGenre =
        this.state.activeGenreSelection && this.state.activeGenreSelection._id
          ? this.state.movies.filter(
              (m) => m.genre._id === this.state.activeGenreSelection._id
            )
          : this.state.movies;

      const sortedColumn = _.orderBy(
        filteredGenre,
        [this.state.sortColumn.path],
        [this.state.sortColumn.order]
      );

      const arrMovies = paginate(
        sortedColumn,
        this.state.activeCurrentPage,
        this.state.itemsPerPage
      );
      return (
        <div className="row">
          <div className="col-3">
            <ListGroup
              genreName={this.state.genres}
              selectedGenre={this.state.activeGenreSelection}
              onClickGenreSelect={this.handlePaparanGenreAktif}
            />
          </div>

          <div className="col">
            <Paragraph1 count={filteredGenre.length} />

            <Table
              arrMovies={arrMovies}
              onLiked={this.toggleLike}
              onDelete={this.handleDelete}
              onSorting={this.handleSorting}
              sortColumn={this.state.sortColumn}
            />

            <Pages
              totalItems={filteredGenre.length}
              itemsPerPage={this.state.itemsPerPage}
              activeCurrentPage={this.state.activeCurrentPage}
              onClickPageNumber={this.handlePaparanLamanAktif}
            />
          </div>
        </div>
      );
    }
  }
}

export default Movies;
