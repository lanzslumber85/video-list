import _ from "lodash";

export function paginate(arrMovieItems, pageNumber, itemsPerPage) {
  const startingIndexofItemsPerPage = (pageNumber - 1) * itemsPerPage;
  return _(arrMovieItems)
    .slice(startingIndexofItemsPerPage)
    .take(itemsPerPage)
    .value();
}
