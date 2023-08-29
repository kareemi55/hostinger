import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Searchinput.css";


const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className='d-flex search-box'
        role='search'
        onSubmit={handleSubmit}>
        <input
        className="input-search"
          type='search'
          placeholder='Brown Foothpath Tiles'
          aria-label='Search'
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className='btn-search' type='submit'>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
