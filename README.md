# Modifications apportées au projet

- Mise en place de fastify pour la gestion des vues template → /views/index.hbs et le controller /src/app.controller.ts
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

# Commandes utiles

- nest generate controller <nom-du-controller> (Sert à générer un controller)
- nest generate service <nom-du-service> (Sert à générer un service)
- nest generate module <nom-du-module> (Sert à générer un module)
- nest generate pipe <nom-du-pipe> (Sert à générer un pipe)
- nest generate guard <nom-du-guard> (Sert à générer un guard)
- nest generate interceptor <nom-du-interceptor> (Sert à générer un interceptor)
- nest generate filter <nom-du-filter> (Sert à générer un filter)
- nest generate middleware <nom-du-middleware> (Sert à générer un middleware)