import React, { useState, useEffect } from "react";

import Link from "next/link";

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from your Django API
    fetch("http://localhost:8000/api/items/")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const originalArtists = [
    {
      name: "Safari Serengeti",
      profession: "Acrylic Wildlife Muralist",
      class: "filter-visual-artists",
    },
    {
      name: "Pwani Pixel",
      profession: "Swahili Digital Artisan",
      class: "filter-visual-artists",
    },
    {
      name: "Bahari Brush",
      profession: "Oceanic Realism Illustartor",
      class: "filter-visual-artists",
    },
    {
      name: "Pwani Pixel",
      profession: "Swahili Digital Artisan",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-literary-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-sound-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-sound-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-literary-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-visual-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-visual-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-visual-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    // ... (your original list of artists)
  ];

  const [artists, setArtists] = useState(originalArtists);
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = () => {
    const filteredArtists = originalArtists.filter(
      (artist) =>
        artist.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        artist.profession.toLowerCase().includes(searchValue.toLowerCase())
    );
    setArtists(filteredArtists);
  };

  const handleSearch = () => {
    setSearchValue("");
    setArtists(originalArtists);
  };

  return (
    <>
      <main id="main">
        <section id="portfolio" className="section-bg">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3 className="section-title">Our Artists</h3>
            </header>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-14">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-visual-artists">Visual Artists</li>
                  <li data-filter=".filter-performing-artists">
                    Perfoming Artists
                  </li>
                  <li data-filter=".filter-literary-artists">
                    literary Artists
                  </li>
                  <li data-filter=".filter-fashion-designs">Fashion Designs</li>
                  <li data-filter=".filter-sound-artists">Sound Artists</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <form className="form-inline">
                  <div className="form-group mx-sm-3 mb-2">
                    <input
                      style={{
                        width: "300px",
                        height: "50px",
                        padding: "5px",
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Search Artists..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyUp={handleKeyUp}
                    />
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-primary btn-lg mb-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {artists.map((artist, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 portfolio-item ${artist.class}`}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <Link href="/profile">
                        <img
                          src="assets/images/projects/Image_30.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="portfolio-info">
                      <h4>{artist.name}</h4>
                      <hr
                        style={{ borderTop: "2px solid ", width: "100%" }}
                      ></hr>
                      <p>{artist.profession}</p>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </section>

        <div className="container mt-5">
          <h1 className="mb-4">Artists</h1>
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  {/* Add logic to display the photo if available */}
                  {item.photo && (
                    <img
                      src={`${item.photo}`}
                      className="card-img-top"
                      alt={item.name}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-title">{item.type}</h6>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
