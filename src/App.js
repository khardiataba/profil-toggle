import React, { Component } from "react";
import "./App.css";

// Composant basé sur une classe
class App extends Component {
  // Constructeur pour initialiser l'état
  constructor() {
    super(); 

    // État initial du composant
    this.state = {
      // Informations sur la personne
      person: {
        fullName: "Khardiata Ba", // Nom complet
        bio: "Développeuse passionnée par React et le front-end.", // Biographie
        imgSrc: "/PORTFOLIO.jpeg", // URL de l'image
        profession: "Développeuse web", // Profession
      },
      shows: false, // Booléen pour afficher ou masquer le profil
      interval: 0, // Compteur du temps écoulé depuis le montage
    };
  }

  // Méthode pour basculer l'affichage du profil
  toggleProfile = () => {
    // Met à jour le state : si shows est true → false, si false → true
    this.setState({ shows: !this.state.shows });
  };

  // Méthode du cycle de vie : appelée une fois que le composant est monté
  componentDidMount() {
    // Démarre un timer qui s'incrémente toutes les secondes
    this.timerID = setInterval(() => {
      // Met à jour l'état du compteur interval
      this.setState((prevState) => ({
        interval: prevState.interval + 1, // +1 chaque seconde
      }));
    }, 1000);
  }

  // Méthode du cycle de vie : appelée juste avant que le composant soit démonté
  componentWillUnmount() {
    // Nettoie l'intervalle pour éviter des fuites mémoire
    clearInterval(this.timerID);
  }

  // Méthode pour afficher le rendu du composant
  render() {
    // Déstructuration de l'état pour plus de lisibilité
    const { person, shows, interval } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
        {/* Bouton pour afficher ou masquer le profil */}
        <button onClick={this.toggleProfile}>
          {shows ? "Masquer le profil" : "Afficher le profil"}
        </button>

        {/* Affichage conditionnel : seulement si shows est true */}
        {shows && (
          <div style={{ marginTop: "20px" }}>
            {/* Image de profil */}
            <img
              src={person.imgSrc}
              alt="profile"
              style={{
                borderRadius: "50%", // rend l'image ronde
                width: "100px",       // largeur
                height: "100px",      // hauteur
                objectFit: "cover",   // garde l'image centrée et sans déformation 
                }}
            />
            {/* Nom complet */}
            <h2>{person.fullName}</h2>
            {/* Biographie */}
            <p>{person.bio}</p>
            {/* Profession */}
            <p>
              <strong>Profession:</strong> {person.profession}
            </p>
          </div>
        )}

        {/* Affichage du temps écoulé depuis le montage */}
        <p style={{ marginTop: "30px" }}>
          Temps écoulé depuis le montage du composant: {interval} secondes
        </p>
      </div>
    );
  }
}

// Export du composant pour l'utiliser dans index.js
export default App;
