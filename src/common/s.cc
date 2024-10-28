*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  text-decoration: none;
}

.navbar {
  display: flex;
  background-color: #fff !important;
  z-index: 1000;
}
.toggle-button {
  display: none;
  font-size: 22px;
  border: none;
  cursor: pointer;
}

.drawer {
  display: flex;
  flex-direction: row;
}
.nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-item {
  align-items: center;
  margin: 0 35px;
  text-transform: uppercase;
  font-weight: 700;
}
.home-item {
  margin-left: 280px;
  color: #15c8eb;
}

.nav-link {
  text-decoration: none;
  color: #15c8eb;
  font-weight: bold;
  font-size: 17px;
  text-decoration: none;
  position: relative;
}

.nav-logo {
  width: 300px;
  height: auto;
}

.nav-link:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background-color: #15c8eb;
}
/* Crousel */

.slider-container {
  position: relative;
  width: 100%;
  /* height: 700px; */
  overflow: hidden;
  max-width: 100%;
  /* z-index: 1; */
}
.slider-wrapper{
  position: relative;
  /* display: flex; */
  justify-content: center;
  align-items: center;

}
.slider-item img {
  width: 100%;
  /* height: 100%; */
  height: auto;
  object-fit: cover;
}

.slider-item.active {
  opacity: 1;
}
.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.slider-button img {
  width: 50px; 
  height: 50px;
}
.slider-button:first-of-type {
  left: 20px; 
}

.slider-button:last-of-type {
  right: 20px; 
}
.container-banner{
  width: 1200px !important;
}
.background-banner{
  background-color: #e0e3e7;
  /* margin-top: -10px; */
}

.infos ::before{
  display: table;
  content: " ";
  box-sizing: border-box;
}
.infos h1 {
  font-size: 48px;
  color: #FFF;
  font-weight: 400;
  font-family: 'Roboto Condensed', sans-serif;
}
.infos p {
  color: #fff;
  font-family: 'Dosis', Arial, sans-serif;
  font-size: 20px;
  margin-top: 20px;
}
.about-container {
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
}

.about-container p {
  font-size: 17px;
  color: black;
  line-height: 1.6;
}
.main-footer {
  background-color: #15c8eb;
  padding: 20px 0; 
  width: 100%;
}


@media (max-width: 768px) {
  .toggle-button {
    display: flex;
  }
  .nav-logo {
    display: none;
  }
  .nav-logo-small-screen {
    display: flex;
    width: 180px;
    margin-left: 10px;
  }
  .slider-item img {
    width: 100%;
    height: 35%;
    object-fit: cover;
}

  .drawer {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .drawer.open {
    display: flex;
  }

  .nav-list {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
  .container-banner{
    width: 100% !important;
  }
  .nav-item {
    margin: 10px 0;
    width: 100%;
    text-align: left;
  }

  .home-item {
    margin-left: 0;
  }
  .slider-button img {
    width: 50px; 
    height: 50px;
    display: none;
  }
   .background-banner h1 {
    font-size: 1.8rem; 
  }
  .background-banner p {
    font-size: 1rem; 
    padding: 10px;
  }
}
