# Modifications apportées au projet

- Mise en place de HBS pour la gestion des vues (Handlebars) → /views
- Mise en place de TailwindCSS pour le design → /public/main.css
- Mise en place d'un alias pour le src permettant d'éviter les ../../ → maintenant, c'est @/...
- Mise en place de dotenv pour la gestion des variables d'environnement → /.env

# Installation

```bash
    git clone https://github.com/pauldecalf/Projet-Start-NestJS-HBS-TailwindCSS.git
    cd Projet-Start-NestJS-HBS-TailwindCSS
    npm install
```

# Configuration

Créer un fichier `.env` à la racine du projet et ajouter les variables suivantes :

```bash
  PORT=3000
```


# Lancement

```bash
  npm run start
```

# Utilisation

- Ouvrir un navigateur
- Aller à l'adresse `http://localhost:3000/`