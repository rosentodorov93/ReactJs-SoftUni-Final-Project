import useForm from "../../hooks/useForm";

export default function SearchBar({
    onSearchSubmit
}){

    const { formValues, onChange, onSubmit } = useForm(onSearchSubmit, {
        category: category ? category : "",
        search: "",
      });
    return(
        <div className="search-container">
        <form className="search-form" method="GET" onSubmit={onSubmit}>
          <div>
            <label htmlFor="category">Category</label>
            <select
              className="search-input"
              name="category"
              id="category"
              onChange={onChange}
              value={formValues.category}
              placeholder="category"
            >
              <option value={""}>All</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="search-wrapper">
            <label htmlFor="search">Search</label>
            <div className="search-box">
              <input
                id="search"
                type="text"
                name="search"
                onChange={onChange}
                value={formValues.search}
                placeholder="Search Title..."
              />
              <button type="submit" className="btn-search">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}