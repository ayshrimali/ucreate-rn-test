export enum TYPES {
  MOVIE_LIST = 'movieList/GET',
  FETCH_SUCCESS = 'SUCCESS',
}

export type MovieListAction = {
  type: string;
  payload: Array<Movie>;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
