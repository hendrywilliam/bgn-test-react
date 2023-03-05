import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import { useSearch } from "@/hooks/useSearch";
import SearchItems from "../Elements/SearchItem/SearchItem";
import { Link } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
// import { AiOutlineMenu } from "react-icons/ai";
import Loading from "../Loading";

export default function Navbar() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [filter, setFilter] = useState("people");

  const { loading, data, error } = useSearch(inputSearch, filter);

  function showSearch() {
    setSearchShow(!searchShow);
    setInputSearch("");
  }

  return (
    <div className="navbar">
      <div className="navbar-primary">
        <div className="navbar-socialmedias">
          <div>
            <a href="https://twitter.com/starwars">
              <FaTwitter color="white" size={30} />
            </a>
            <a href="https://www.facebook.com/StarWars">
              <FaFacebook color="white" size={30} />
            </a>
            <a href="https://www.youtube.com/user/starwars">
              <FaYoutube color="white" size={30} />
            </a>
            <a href="https://www.youtube.com/user/starwars">
              <FaInstagram color="white" size={30} />
            </a>
          </div>
        </div>
        <div
          className={`navbar-logo-container ${searchShow ? "hidden" : " flex"}`}
        >
          <img
            src={
              "https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            }
            alt="Star Wars Logo"
            className="navbar-logo"
          />
        </div>
        <div className={`navbar-search ${searchShow ? "w-full" : "w-1/3"}`}>
          <div className={`search-section ${searchShow ? "w-full" : "w-max"}`}>
            <div>
              <select
                className={`search-filter ${searchShow ? "flex" : "hidden"}`}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                <option value="people">PEOPLE</option>
                <option value="films">FILMS</option>
                <option value="starships">STARSHIPS</option>
                <option value="vehicles">VEHICLES</option>
                <option value="species">SPECIES</option>
                <option value="planets">PLANETS</option>
              </select>
              <input
                type="text"
                className={`search-input-text ${
                  searchShow ? "flex" : "hidden"
                }`}
                placeholder="SEARCH"
                value={inputSearch}
                onChange={(e) => {
                  setInputSearch(e.target.value);
                }}
              />
              <button>
                {searchShow ? (
                  <HiXMark
                    className="search-button"
                    size={25}
                    onClick={() => showSearch()}
                  />
                ) : (
                  <FaSearch
                    className="search-button"
                    size={20}
                    onClick={() => showSearch()}
                  />
                )}
              </button>
            </div>
            <div className="result-list-search">
              <ul>
                {loading === true ? (
                  <li>
                    <Loading />
                  </li>
                ) : (
                  ""
                )}
                {data.map((item, index) => {
                  return <SearchItems key={index} name={item.name} />;
                })}
                {error ? <li>We cannot reach the server :(!</li> : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-secondary">
        <ul>
          <li>
            <p>
              <Link to={"/"} className="nav-link">
                HOME
              </Link>
            </p>
          </li>
          <li>
            <a className="nav-link" href="#">
              FILMS
            </a>
          </li>
          <li>
            <p>
              <Link to={"/people"} className="nav-link">
                PEOPLE
              </Link>
            </p>
          </li>
          <li>
            <a className="nav-link" href="#">
              PLANETS
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              SPECIES
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              STARSHIPS
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              VEHICLES
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
